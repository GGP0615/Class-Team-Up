import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { session } } = await supabase.auth.getSession();

  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Get user role and redirect to appropriate dashboard
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('user_id', session.user.id)
      .single();

    if (req.nextUrl.pathname === '/dashboard') {
      const redirectPath = userData?.role === 'instructor' 
        ? '/dashboard/instructor'
        : '/dashboard/student';
      return NextResponse.redirect(new URL(redirectPath, req.url));
    }

    // Prevent students from accessing instructor dashboard and vice versa
    const isInstructorPath = req.nextUrl.pathname.startsWith('/dashboard/instructor');
    const isInstructor = userData?.role === 'instructor';

    if (isInstructorPath && !isInstructor) {
      return NextResponse.redirect(new URL('/dashboard/student', req.url));
    }

    if (!isInstructorPath && isInstructor) {
      return NextResponse.redirect(new URL('/dashboard/instructor', req.url));
    }
  }

  // Redirect authenticated users from auth pages to dashboard
  if (session && (
    req.nextUrl.pathname.startsWith('/auth') ||
    req.nextUrl.pathname === '/'
  )) {
    const { data: userData } = await supabase
      .from('users')
      .select('role')
      .eq('user_id', session.user.id)
      .single();

    const redirectPath = userData?.role === 'instructor'
      ? '/dashboard/instructor'
      : '/dashboard/student';
    return NextResponse.redirect(new URL(redirectPath, req.url));
  }

  return res;
}

export const config = {
  matcher: ['/', '/auth/:path*', '/dashboard/:path*'],
};