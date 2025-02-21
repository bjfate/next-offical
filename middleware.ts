/*
 * @Author: huoguangxuan
 * @Date: 2025-02-21 15:31:44
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-21 15:32:19
 * @FilePath: \nextjs-dashboard\middleware.ts
 * @Description: 
 */
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};