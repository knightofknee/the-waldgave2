/** @type {import('next').NextConfig} */
const fs = require("fs");
const path = require("path");

// Case-insensitive URLs: build a lowercase → canonical map of every page route at
// build time and hand it to middleware.js through `env` (inlined into the middleware
// bundle). Files keep their capitalization (/CarlsCommentary stays canonical); any
// casing a visitor types is rewritten to the real route. New pages are picked up on
// the next build with nothing to maintain.
function collectRoutes(dir, prefix = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (prefix === "" && entry.name === "api") continue;
      routes.push(...collectRoutes(path.join(dir, entry.name), `${prefix}/${entry.name}`));
      continue;
    }
    const m = entry.name.match(/^(.*)\.(js|jsx|ts|tsx)$/);
    if (!m || m[1].startsWith("_")) continue;
    routes.push(m[1] === "index" ? prefix || "/" : `${prefix}/${m[1]}`);
  }
  return routes;
}

const staticRoutes = {};
const dynamicPrefixes = [];
for (const route of collectRoutes(path.join(__dirname, "pages"))) {
  const bracket = route.indexOf("[");
  if (bracket >= 0) {
    // Dynamic route such as /bekin/invite/[code]: only the static prefix is
    // case-folded; the parameter keeps whatever case the visitor typed.
    const prefix = route.slice(0, bracket);
    dynamicPrefixes.push([prefix.toLowerCase(), prefix]);
  } else {
    staticRoutes[route.toLowerCase()] = route;
  }
}

// Serve the Apple App Site Association file (which has no file extension) as JSON. Next.js serves
// files in /public at the site root, so /.well-known/apple-app-site-association resolves; this just
// forces the correct Content-Type. assetlinks.json already has a .json extension and needs no rule.
const nextConfig = {
  // Claude Code previews build into .next-claude so they never collide with
  // the dev server running on port 3000 (two servers sharing .next corrupt it).
  distDir: process.env.CLAUDE_PREVIEW ? ".next-claude" : ".next",
  env: {
    CASE_ROUTES: JSON.stringify({ static: staticRoutes, dynamic: dynamicPrefixes }),
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

module.exports = nextConfig;
