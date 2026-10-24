// Offline cache. The page itself is network-first: when online you always get the newest version,
// with no signal (or a slow one, after 2.5 s) the cached copy is used. Icons and manifest are cache-first.
const CACHE = "hdri-bracket-b3be2126ed";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "maskable-512.png", "apple-touch-icon.png", "favicon.ico", "favicon.svg", "archivo.woff2"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: "reload"}))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
function fromNet(req){
  return fetch(req, {cache: "no-store"}).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req.mode === "navigate" ? "index.html" : req, copy)); }
    return res;
  });
}
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === "navigate" || /\/(index\.html)?$/.test(new URL(req.url).pathname);
  if (isPage) {
    e.respondWith(new Promise(resolve => {
      let done = false;
      const fallback = () => caches.match("index.html").then(hit => { if (!done && hit) { done = true; resolve(hit); } });
      const t = setTimeout(fallback, 2500);
      fromNet(req).then(res => { clearTimeout(t); if (!done) { done = true; resolve(res); } })
                  .catch(() => { clearTimeout(t); caches.match("index.html").then(hit => { if (!done) { done = true; resolve(hit || Response.error()); } }); });
    }));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fromNet(req)));
});
