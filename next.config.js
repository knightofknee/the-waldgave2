/** @type {import('next').NextConfig} */
// Serve the Apple App Site Association file (which has no file extension) as JSON. Next.js serves
// files in /public at the site root, so /.well-known/apple-app-site-association resolves; this just
// forces the correct Content-Type. assetlinks.json already has a .json extension and needs no rule.
const nextConfig = {
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
