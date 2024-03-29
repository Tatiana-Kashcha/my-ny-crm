import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyButton from '../../components/add-company-button';
import CompanyTable from '../../components/company-table';
import AddCompanyButtonCopy from '@/app/components/add-company-button copy';

export interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
        <AddCompanyButtonCopy />
      </Toolbar>
      <CompanyTable />
    </>
  );
}
