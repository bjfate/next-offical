/*
 * @Author: huoguangxuan
 * @Date: 2025-02-12 14:38:19
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-12 14:38:36
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}