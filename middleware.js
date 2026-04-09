import { NextResponse } from 'next/server';

const aliases = {
  '/chigui': '/chigui',
  '/openchicago': '/chigui',
  '/carlscommentary': '/CarlsCommentary',
};

export function middleware(req) {
  const url = req.nextUrl;
  const target = aliases[url.pathname.toLowerCase()];

  if (target && url.pathname !== target) {
    url.pathname = target;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\.).*)'],
};
