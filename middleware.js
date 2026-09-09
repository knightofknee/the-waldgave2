import { NextResponse } from 'next/server';

// True aliases only: a different name for the same page. Keys must be lowercase.
// Plain case differences (/carlscommentary → /CarlsCommentary) are handled
// automatically by the route map below, so they don't belong here.
const aliases = {
  '/openchicago': '/chigui',
};

// Generated in next.config.js from the pages folder at build time.
const { static: staticRoutes, dynamic: dynamicPrefixes } = JSON.parse(process.env.CASE_ROUTES);

export function middleware(req) {
  const url = req.nextUrl;
  const original = url.pathname;
  const lower = original.toLowerCase();

  let target = aliases[lower] ?? staticRoutes[lower];
  if (!target) {
    const hit = dynamicPrefixes.find(([lowerPrefix]) => lower.startsWith(lowerPrefix));
    if (hit) target = hit[1] + original.slice(hit[0].length);
  }

  if (target && target !== original) {
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\.).*)'],
};
