import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { useEffect } from "react";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "NINETY — 90-day field manual";

function KeepOnPhone() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const urls = ["/", "/cover.jpg", "/favicon.svg", "/fonts.css", "/__grok/icon-180.png", "/icon-512.png"];
    document.querySelectorAll("script[src], link[rel='stylesheet']").forEach((node) => {
      const src = node.getAttribute("src") || node.getAttribute("href");
      if (!src || src.startsWith("data:")) return;
      urls.push(new URL(src, location.href).href);
    });
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then((reg) => {
      const send = () => {
        const worker = reg.active;
        worker?.postMessage({ type: "cache", urls });
      };
      if (reg.active) send();
      else navigator.serviceWorker.ready.then(send).catch(() => {});
    }).catch(() => {});
  }, []);
  return null;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "A field manual for 90 days without the power grid. Water, food, sanitation, fuel, and the kit to buy before the lights go out.",
      },
      { name: "theme-color", content: "#141612" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "NINETY" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: "/fonts.css" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <KeepOnPhone />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
