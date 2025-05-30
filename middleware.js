import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl;

  // Normalize the path to lowercase
  if (url.pathname === '/ChiGui' || url.pathname === '/Chigui') {
    url.pathname = '/chigui'; // Redirect to the case-sensitive route
    return NextResponse.rewrite(url);
  }
  if (url.pathname === '/OpenChicago' || url.pathname === '/openchicago') {
    url.pathname = '/chigui'; // Redirect to the case-sensitive route
    return NextResponse.rewrite(url);
  }
  if (url.pathname === '/teganandsara' || url.pathname.toLowerCase() === '/TeganandSara') {
    url.pathname = '/TeganAndSara'; // Redirect to the case-sensitive route
    return NextResponse.rewrite(url);
  }

  return NextResponse.next(); // Proceed normally for other paths
}
