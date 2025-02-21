/*
 * @Author: huoguangxuan
 * @Date: 2025-02-21 15:26:27
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-21 15:29:48
 * @FilePath: \nextjs-dashboard\auth.config.ts
 * @Description:
 */
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
