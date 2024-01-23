'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '../../../lib/api';
import CompanyRow from './company-row';

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
    title: 'Ukraine',
    status: 'active',
    joinedDate: '23.01.2024',
    hasPromotions: true,
    companyTitle: 'UkraineCompany',
    categoryTitle: 'Product',
    countryTitle: 'Ukraine',
    categoryId: '13',
  },
  {
    id: '2',
    title: 'Canada',
    status: 'notActive',
    joinedDate: '23.01.2024',
    hasPromotions: false,
    companyTitle: 'CanadaCompany',
    categoryTitle: 'Product',
    countryTitle: 'Canada',
    categoryId: '13',
  },
  {
    id: '3',
    title: 'Italia',
    status: 'pending',
    joinedDate: '23.01.2024',
    hasPromotions: false,
    companyTitle: 'ItaliaCompany',
    categoryTitle: 'Product',
    countryTitle: 'Italia',
    categoryId: '13',
  },
  {
    id: '4',
    title: 'USA',
    status: 'suspended',
    joinedDate: '23.01.2024',
    hasPromotions: true,
    companyTitle: 'USACompany',
    categoryTitle: 'Product',
    countryTitle: 'USA',
    categoryId: '13',
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
