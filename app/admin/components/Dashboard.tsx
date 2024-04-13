
"use client"

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { formatNumber } from "@/lib/formatters";
import { FaUser } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { createClient } from "@/lib/supabase";
import { useEffect, useState } from 'react';


export default async function AdminDashboard() {
  const [eventCount, setEventCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('events')
          .select('count', { count: 'exact' })
          .single();
        if (error) {
          throw error;
        }
        setEventCount(data?.count || 0);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('users')
          .select('count', { count: 'exact' })
          .single();
        if (error) {
          throw error;
        }
        setUserCount(data?.count || 0);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchEventData();
    fetchUserData();
  }, []);

  return (
    <main className="p-4 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Members"
          icon={<FaUser />}
          body={formatNumber(userCount)}

        />
        <DashboardCard
          title="Events"
          icon={<MdEventAvailable />}
          body={formatNumber(eventCount)}
        />
      </div>
    </main>
  );
}


type DashboardCardProps = {
  title: string;
  icon: any;
  body: string;
};

function DashboardCard({ title, icon, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        {icon}
        <CardTitle className="text-2xl font-medium">{body}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium">{title}</p>
      </CardContent>
    </Card>
  );
}
