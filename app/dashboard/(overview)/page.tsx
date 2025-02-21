/*
 * @Author: huoguangxuan
 * @Date: 2025-02-13 20:06:13
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-21 11:07:54
 * @FilePath: \nextjs-dashboard\app\dashboard\(overview)\page.tsx
 * @Description:
 */
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import {
  fetchCustomers,
} from "@/app/lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardsSkeleton } from "@/app/ui/skeletons";
export default async function Page() {

  const customers = await fetchCustomers();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
