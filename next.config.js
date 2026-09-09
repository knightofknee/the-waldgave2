/** @type {import('next').NextConfig} */
// Serve the Apple App Site Association file (which has no file extension) as JSON. Next.js serves
// files in /public at the site root, so /.well-known/apple-app-site-association resolves; this just
// forces the correct Content-Type. assetlinks.json already has a .json extension and needs no rule.
const nextConfig = {
  // Claude Code previews build into .next-claude so they never collide with
  // the dev server running on port 3000 (two servers sharing .next corrupt it).
  distDir: process.env.CLAUDE_PREVIEW ? ".next-claude" : ".next",
  // /EscapeFromHadesIRL serves the same privacy policy as /escapefromhadesirl/privacy
  // so the App Store listing can point at a single flat URL, the way /bekinPrivacy does.
  // A rewrite (not a page file) because pages/EscapeFromHadesIRL.js would collide with
  // pages/escapefromhadesirl/ on case-insensitive filesystems at build time.
  async rewrites() {
    return [
      { source: "/EscapeFromHadesIRL", destination: "/escapefromhadesirl/privacy" },
    ];
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
