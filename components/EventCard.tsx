import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getImageUrl } from "@/lib/utils";

type EventCardProps = {
  id: string;
  title: string;
  date: Date;
  time: string;
  venue: string;
  description: string;
  tag: string;
  imagePath: string;
  slug: string;
};

export function EventCard({
  id,
  title,
  date,
  tag,
  description,
  imagePath,
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="rounded-lg shadow-lg overflow-hidden">
      <Image
        alt={title}
        src={getImageUrl(imagePath)}
        className="w-full h-[160px] md:h-[352px] object-contain"
        height="512"
        width="512"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description.slice(0, 150)}...</p>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs font-medium text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
              })}
            </div>
            <div className="text-xl font-bold">
              {new Date(date).getDate()}
            </div>
            <div className="text-xs font-medium text-gray-500">
              {new Date(date).getFullYear()}
            </div>
          </div>
          <div className="flex space-x-2">
            {tag.split(",").map((t, index) => (
              <Badge key={index} variant="secondary">
                {t.trim()}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export function EventCardSkeleton() {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-[160px] md:h-[352px] object-cover bg-gray-300" />
      <div className="p-4">
        <div className="text-lg font-semibold mb-2 bg-gray-300" />
        <div className="text-sm mb-4 bg-gray-300" />
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs font-medium text-gray-500 bg-gray-300" />
            <div className="text-xl font-bold bg-gray-300" />
            <div className="text-xs font-medium text-gray-500 bg-gray-300" />
          </div>
          <div className="flex space-x-2">
            <div className="bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
