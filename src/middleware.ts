import { geolocation } from '@vercel/functions';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { country } = geolocation(request);
  const locale = country === 'BR' ? 'pt-BR' : 'en';
  
  const response = NextResponse.next();
  response.headers.set('x-locale', locale);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
