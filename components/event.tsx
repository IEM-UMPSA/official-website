"use client"

import Link from "next/link";
import { Suspense, useState, useEffect } from "react";
import { createClient } from '@/lib/supabase';
import { EventCard, EventCardSkeleton } from "./EventCard";
import { notFound } from 'next/navigation';
import { UUID } from "crypto";

export const revalidate = 1; // Set a low revalidate time to ensure frequent updates

type Event = {
  id: UUID;
  title: string;
  date: Date;
  time: string;
  venue: string;
  description: string;
  tag: string;
  imagePath: string;
  slug: string;
};

export default function Event() {
  const [events, setEvents] = useState<Event[] | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<Event[] | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      const supabase = createClient();
      const { data, error } = await supabase.from('events').select();
      if (error) {
        console.error('Error fetching events:', error);
        // Handle error appropriately (e.g., show error message)
        return;
      }
      setEvents(data || []);
    }

    fetchEvents();

    // Cleanup function
    return () => {
      // Cleanup tasks, if any
    };
  }, []);

  useEffect(() => {
    if (events) {
      setVisibleEvents(events.slice(0, 3)); // Initially show three events
    }
  }, [events]);

  const handleShowMore = () => {
    setShowMore(true);
    if (events) {
      setVisibleEvents(events.slice(0, 7)); // Show two more rows of events
    }
  };

  if (events === null || visibleEvents === null) {
    // Events are still loading
    return <div>Loading...</div>;
  }

  if (events.length === 0) {
    return notFound();
  }

  return (
    <div className="bg-white p-8" >
      <h2 className="text-2xl font-bold mb-6" id="events">Events for Academic Session 2023/2024</h2>
      <Suspense fallback={<EventCardSkeleton />}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
          <EventsSuspense events={visibleEvents} />
        </div>
      </Suspense>
      {!showMore && (
        <div className="mt-6 text-center">
          <Link href="#" className="text-blue-600 hover:underline" onClick={handleShowMore}>
            → More events
          </Link>
        </div>
      )}
    </div>
  );
}

interface EventsSuspenseProps {
  events: Event[];
}

function EventsSuspense({ events }: EventsSuspenseProps) {
  return (
    <>
      {events.map(event => 
        <EventCard key={event.id} {...event} />
      )}
    </>
  );
}
