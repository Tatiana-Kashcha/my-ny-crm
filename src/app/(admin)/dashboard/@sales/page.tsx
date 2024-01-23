import React from 'react';
// import { getSummarySales } from '../../../../../lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  // const data = await getSummarySales();

  const data = [
    {
      id: '1',
      companyId: '11',
      companyTitle: 'CanadaCompany',
      sold: 200,
      income: 200,
    },
    {
      id: '2',
      companyId: '12',
      companyTitle: 'USACompany',
      sold: 300,
      income: 300,
    },
    {
      id: '3',
      companyId: '13',
      companyTitle: 'ItaliaCompany',
      sold: 400,
      income: 400,
    },
    {
      id: '4',
      companyId: '14',
      companyTitle: 'UkraineCompany',
      sold: 500,
      income: 500,
    },
    {
      id: '5',
      companyId: '15',
      companyTitle: 'SpainCompany',
      sold: 600,
      income: 600,
    },
    {
      id: '6',
      companyId: '16',
      companyTitle: 'UkraineCompanyNew',
      sold: 700,
      income: 700,
    },
  ];

  return (
    <DashboardCard label="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
