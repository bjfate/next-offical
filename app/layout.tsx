/*
 * @Author: huoguangxuan
 * @Date: 2025-02-11 14:14:20
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-12 13:17:24
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
