/*
 * @Author: huoguangxuan
 * @Date: 2025-02-15 14:38:03
 * @LastEditors: huoguangxuan 117622536@qq.com
 * @LastEditTime: 2025-02-15 14:38:16
 * @FilePath: \next-offical\app\dashboard\invoices\create\page.tsx
 * @Description: 
 */
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}