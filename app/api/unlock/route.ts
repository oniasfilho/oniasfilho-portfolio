import { NextRequest, NextResponse } from 'next/server'

const PASSWORD = process.env.PORTFOLIO_PASSWORD ?? 'changeme'
const COOKIE_NAME = 'portfolio_access'
const COOKIE_VALUE = 'granted'

export async function POST(request: NextRequest) {
  const { password, from } = await request.json()

  if (password !== PASSWORD) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    secure: process.env.NODE_ENV === 'production',
  })

  return response
}
