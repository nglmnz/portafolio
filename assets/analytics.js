/* No custom tracking, cookies, fingerprints, sessions or visitor IDs are created here.
 * The Cloudflare beacon is requested only if a real site token has been configured.
 * For privacy, site owners can leave the token blank to disable it everywhere.
 */
(function () {
  "use strict";
  var cfg = window.PORTAFOLIO_ANALYTICS;
  if (!cfg || cfg.provider !== "cloudflare-web-analytics") return;
  var token = typeof cfg.token === "string" ? cfg.token.trim() : "";
  if (!/^[a-z0-9-]{20,80}$/i.test(token)) return;
  if (window.location.hostname !== cfg.hostname) return;
  if (!window.location.pathname.startsWith(cfg.pathPrefix)) return;
  if (document.querySelector('script[data-cf-beacon]')) return;
  var beacon = document.createElement("script");
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.type = "module";
  beacon.defer = true;
  beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: token, spa: false }));
  document.head.appendChild(beacon);
})();
