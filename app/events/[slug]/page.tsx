import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase";
import { getCanonicalUrl, getImageUrl } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export const revalidate = 3600;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const supabase = createClient();
  const { data: post } = await supabase
    .from("events")
    .select()
    .match({ slug }) // Matching based on slug instead of id
    .single();

  if (!post) {
    return { title: "", description: "" };
  }

  return {
    title: post.name || "",
    description: post.description || "",
    openGraph: {
      images: [getImageUrl(post.imagePath)],
    },
    alternates: {
      canonical: `${getCanonicalUrl()}/events/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const supabase = createClient();
  const { data: events } = await supabase.from("events").select("slug");
  if (!events) {
    return [];
  }

  return events.map(({ slug }) => ({
    params: { slug },
  }));
}

export default async function Page({ params }: Props) {
  const supabase = createClient();
  const { data: event } = await supabase
    .from("events")
    .select()
    .match({ slug: params.slug }) // Use slug to fetch event details
    .single();

  if (!event) {
    return notFound();
  }

  // Fetch PIC details
  const { data: pic } = await supabase
    .from("users")
    .select()
    .match({ id: event.pic_id })
    .single();

  // Convert time to AM/PM format
  const timeParts = event.time.split(":");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;

  return (
    <>
      <Header />
      <div className="px-12 py-12 max-w-7xl mx-auto min-h-screen">
        <div className="flex justify-between mb-6">
          <Link href="/" className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded-md lg:flex">
            <span className="flex items-center">
              <IoMdArrowRoundBack className="mr-2" />
              Go Back
            </span>
          </Link>
        </div>
        <h2 className="text-3xl lg:text-4xl items-start uppercase m-4">{event.title}</h2>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-4">
          <Image
            className="rounded-lg shadow-xl border-4 border-gray-200 p-2 lg:min-w-[30rem] lg:min-h-[20rem] object-contain"
            width={600}
            height={600}
            alt={event.title}
            src={getImageUrl(event.imagePath)}
          />
          <div className="bg-gray-953 p-6 w-full">
            <label className="font-bold">📆 DATE:</label>
            <p className="text-gray-800 text-2xl lg:text-3xl pt-4 py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
              {event.date}
            </p>
            <label className="font-bold">⌚ TIME:</label>
            <p className="text-gray-800 text-2xl lg:text-3xl py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
              {formattedTime}
            </p>
            <label className="font-bold">🏟️ VENUE:</label>
            <p className="text-gray-800 text-2xl lg:text-3xl py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
              {event.venue}
            </p>
            <label className="font-bold">👷 PERSON IN CHARGE:</label>
            <p className="text-gray-800 text-2xl lg:text-3xl py-6 text-center border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
              <Link href={`https://wa.me/6${pic.contact_no}`}>
                {pic.name}
              </Link>
            </p>
            <div className="pt-4 gap-2 flex">
              {event.tag.split(",").map((t: any, index: any) => (
                <Badge key={index} className="px-2 py-1 text-xs rounded-full bg-blue-500 text-white">
                  {t.trim()}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6">
          <label className="font-bold pb-2 border-b-2 decoration-dotted border-dashed border-gray-800 border-opacity-15">
            📝 DESCRIPTION:
          </label>
          <div className="text-gray-600 text-lg my-4 pt-4 pb-6 ">
            <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: event.description }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
