import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country');
  const locale = country === 'BR' ? 'pt-BR' : 'en';
  
  const url = request.nextUrl.clone();
  url.locale = locale;
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
