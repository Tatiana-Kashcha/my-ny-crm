import React from 'react';
// import { getPromotions } from '../../../../../lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  // const data = await getPromotions();
  const data = [
    {
      id: '1',
      title: 'Canada',
      companyTitle: 'CanadaCompany',
      discount: 40,
    },
    {
      id: '2',
      title: 'USA',
      companyTitle: 'USACompany',
      discount: 20,
    },
    {
      id: '3',
      title: 'Italia',
      companyTitle: 'ItaliaCompany',
      discount: 60,
    },
    {
      id: '4',
      title: 'Ukraine',
      companyTitle: 'UkraineCompany',
      discount: 50,
    },
    {
      id: '5',
      title: 'Spain',
      companyTitle: 'SpainCompany',
      discount: 40,
    },
    {
      id: '6',
      title: 'Ukraine',
      companyTitle: 'UkraineCompanyNew1',
      discount: 30,
    },
    {
      id: '7',
      title: 'Ukraine',
      companyTitle: 'UkraineCompanyNew2',
      discount: 30,
    },
  ];

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
