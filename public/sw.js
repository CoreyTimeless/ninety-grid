const CACHE = "ninety-shell-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(["/", "/favicon.svg", "/__grok/icon-180.png", "/cover.jpg"]))
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

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api")) return;

  const navigate = request.mode === "navigate" || (request.headers.get("accept") || "").includes("text/html");

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const saved = await cache.match(request);
      const update = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
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
