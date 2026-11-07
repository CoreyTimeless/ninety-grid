const CACHE = "ninety-shell-v2";
const SHELL = ["/", "/favicon.svg", "/fonts.css", "/cover.jpg", "/__grok/icon-180.png", "/icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => Promise.all(SHELL.map((url) => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  const urls = event.data && event.data.type === "cache" ? event.data.urls : null;
  if (!urls) return;
  event.waitUntil(
    caches.open(CACHE).then((cache) => Promise.all(urls.map((url) => cache.add(url).catch(() => null)))),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api")) return;

  const navigate = request.mode === "navigate";
  const key = navigate ? "/" : request;

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const saved = await cache.match(key);
      const update = fetch(request)
        .then((response) => {
          if (response && response.ok && response.type === "basic") cache.put(key, response.clone());
          return response;
        })
        .catch(() => null);
      if (saved) return saved;
      const fresh = await update;
      if (fresh) return fresh;
      if (navigate) {
        const home = await cache.match("/");
        if (home) return home;
      }
      return new Response("Offline", { status: 503, headers: { "content-type": "text/plain" } });
    }),
  );
});
