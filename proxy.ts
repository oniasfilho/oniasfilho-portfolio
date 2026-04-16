import { NextRequest, NextResponse } from 'next/server'

const PROTECTED_PATHS = ['/blog', '/works']
const COOKIE_NAME = 'portfolio_access'
const COOKIE_VALUE = 'granted'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + '/')
  )

  if (!isProtected) return NextResponse.next()

  const cookie = request.cookies.get(COOKIE_NAME)
  if (cookie?.value === COOKIE_VALUE) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = '/unlock'
  url.searchParams.set('from', pathname)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/blog/:path*', '/works/:path*'],
}
