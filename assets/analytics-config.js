/* Portfolio visitor analytics configuration.
 * Set the Cloudflare Web Analytics token from your own Cloudflare dashboard.
 * Do not paste passwords or API keys. The Web Analytics site token is public by design.
 * Keep token empty to disable ALL optional visitor analytics.
 * This configuration applies only to the /portafolio/ directory at nglmnz.github.io.
 */
window.PORTAFOLIO_ANALYTICS = Object.freeze({
  provider: "cloudflare-web-analytics",
  token: "",
  hostname: "nglmnz.github.io",
  pathPrefix: "/portafolio/"
});
