import React from 'react';
import Layout from '../layout';
import Header from "@/app/admin/components/Header"
import Event from '@/app/admin/event/components/Event';

export default function DashboardPage() {

  return (
    <Layout>
      <div className="flex-1">
        <div className="flex flex-col h-screen">
        <Header/>
          <Event />
        </div>
      </div>
    </Layout>
  );
}
