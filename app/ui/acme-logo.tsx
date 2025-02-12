/*
 * @Author: huoguangxuan
 * @Date: 2025-02-11 14:14:20
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-12 14:08:09
 * @FilePath: \nextjs-dashboard\app\ui\acme-logo.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved. 
 */
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { irish_grover } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${irish_grover.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
