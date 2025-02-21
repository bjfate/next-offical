/*
 * @Author: huoguangxuan
 * @Date: 2025-02-15 15:00:07
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-21 17:04:24
 * @FilePath: \nextjs-dashboard\app\dashboard\invoices\[id]\edit\page.tsx
 * @Description: 
 */

import { Metadata } from 'next';

import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
export const metadata: Metadata = {
  title: "Invoices - Edit Invoice",
};
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
      if (!invoice) {
         notFound();
      }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}