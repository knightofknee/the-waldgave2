/** @type {import('next').NextConfig} */
// Serve the Apple App Site Association file (which has no file extension) as JSON. Next.js serves
// files in /public at the site root, so /.well-known/apple-app-site-association resolves; this just
// forces the correct Content-Type. assetlinks.json already has a .json extension and needs no rule.
const nextConfig = {
  // Claude Code previews build into .next-claude so they never collide with
  // the dev server running on port 3000 (two servers sharing .next corrupt it).
  distDir: process.env.CLAUDE_PREVIEW ? ".next-claude" : ".next",
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
