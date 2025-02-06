import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  
  const { data: { session } } = await supabase.auth.getSession()

  // Handle authentication and role-based redirections
  if (session) {
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('id', session.user.id)
      .single()

    if (req.nextUrl.pathname === '/') {
      // Redirect to appropriate dashboard based on role
      if (userData?.role === 'instructor') {
        return NextResponse.redirect(new URL('/dashboard/instructor', req.url))
      } else {
        return NextResponse.redirect(new URL('/dashboard/student', req.url))
      }
    }
  }

  return res
}

export const config = {
  matcher: ['/', '/dashboard/:path*']
}
