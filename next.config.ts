/*
 * @Author: huoguangxuan
 * @Date: 2025-02-13 20:06:14
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-13 22:15:58
 * @FilePath: \next-offical\next.config.ts
 * @Description: 
 */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {},
  experimental: {
    ppr: 'incremental'
  }
};

export default nextConfig;
