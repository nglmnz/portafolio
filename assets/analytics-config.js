/* Portfolio visitor analytics configuration.
 * Set the Cloudflare Web Analytics token from your own Cloudflare dashboard.
 * Do not paste passwords or API keys. The Web Analytics site token is public by design.
 * The public Cloudflare Web Analytics site token is configured below.
 * Set token to empty to disable optional visitor analytics.
 * This configuration applies only to the /portafolio/ directory at nglmnz.github.io.
 */
window.PORTAFOLIO_ANALYTICS = Object.freeze({
  provider: "cloudflare-web-analytics",
  token: "b4de4c34e4c84b1084b5711a1e98813e",
  hostname: "nglmnz.github.io",
  pathPrefix: "/portafolio/"
});
