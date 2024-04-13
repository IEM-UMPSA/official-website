import React from 'react';
import Layout from './layout';
import Header from "@/app/admin/components/Header"
import Dashboard from '@/app/admin/components/Dashboard';

export default function DashboardPage() {

  return (
    <Layout>
   
      <div className="flex-1">
        <div className="flex flex-col h-screen">
        <Header />
          <Dashboard />
        </div>
      </div>
    </Layout>
  );
}
