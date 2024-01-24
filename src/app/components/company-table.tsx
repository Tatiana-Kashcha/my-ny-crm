'use client';

import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getCompanies } from '../../../lib/api';
import CompanyRow from './company-row';
import { CompanyStatus } from '../../../lib/api';

export interface CompanyTableProps {}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

const data = [
  {
    id: '1',
    title: 'UkraineCompany',
    status: CompanyStatus.Active,
    joinedDate: '23.01.2024',
    hasPromotions: true,
    categoryTitle: 'Product',
    countryTitle: 'Ukraine',
  },
  {
    id: '2',
    title: 'CanadaCompany',
    status: CompanyStatus.NotActive,
    joinedDate: '23.01.2024',
    hasPromotions: false,
    categoryTitle: 'Product',
    countryTitle: 'Canada',
  },
  {
    id: '3',
    title: 'ItaliaCompany',
    status: CompanyStatus.Pending,
    joinedDate: '23.01.2024',
    hasPromotions: false,
    categoryTitle: 'Product',
    countryTitle: 'Italia',
  },
  {
    id: '4',
    title: 'USACompany',
    status: CompanyStatus.Suspended,
    joinedDate: '23.01.2024',
    hasPromotions: true,
    categoryTitle: 'Product',
    countryTitle: 'USA',
  },
];

export default function CompanyTable({}: CompanyTableProps) {
  // const { data } = useQuery({
  //   queryKey: ['companies'],
  //   queryFn: () => getCompanies(),
  //   staleTime: 10 * 1000,
  // });

  return (
    <div className="py-8 px-10 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="pb-5 text-sm font-light text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
