"use client"
import { useState, useEffect } from 'react';
import  {EventHeader}  from "@/app/admin/event/components/EventHeader"
import  EventForm  from "./EventForm"
import Layout from '../../../layout';
import Header from "@/app/admin/components/Header"
import { createClient } from '@/lib/supabase';

export default function EditProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const [event, setEvent] = useState(null); // State to store event data

  useEffect(() => {
    async function fetchEventData() {
      try {
        const supabase = createClient(); // Initialize Supabase client
        // Fetch event data from Supabase based on the provided id
        const { data, error } = await supabase.from('events').select('*').eq('id', id).single();

        if (error) {
          throw error;
        }

        if (data) {
          setEvent(data); // Set the fetched event data to state
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    }

    fetchEventData(); // Call the fetchEventData function when component mounts
  }, [id]); // Re-run effect when id changes

  return (
    <Layout>
      <div className="flex-1">
        <div className="flex flex-col h-screen">
          <Header />
          <EventHeader>Edit Product</EventHeader>
          {/* Pass the event prop to EventForm */}
          {event && <EventForm eventData={event} />}
        </div>
      </div>
    </Layout>
  );
}
