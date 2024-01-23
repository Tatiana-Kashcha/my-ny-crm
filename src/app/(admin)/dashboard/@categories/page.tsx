import React from 'react';
import { getCategories, getCompanies } from '../../../../../lib/api';
import getCountById from '../../../../../lib/utils/getCountById';
import StatCard, { StatCardType } from '../../../components/stat-card';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  // const categories = await getCategories();
  // const companies = await getCompanies();
  const categories = [
    { id: '1', title: 'Products-1' },
    { id: '2', title: 'Products-2' },
    { id: '3', title: 'Products-3' },
    { id: '4', title: 'Products-4' },
    { id: '5', title: 'Products-5' },
    { id: '6', title: 'Products-6' },
    { id: '7', title: 'Products-7' },
    { id: '8', title: 'Products-8' },
  ];
  // const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard label="Categories of companies">
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={StatCardType.Dark}
              label={title}
              counter={5}
              // counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
