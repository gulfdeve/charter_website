// app/[locale]/events/page.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import YachtCarousal from "@/app/components/YachtCarousel";
import Eventmobilecarousal from "@/app/components/EventMobilecarousal";
import PageTitleHeading from "@/app/components/PageTitleHeading";
import EventCard from "@/app/components/EventCard";
import { usePathname, Link } from "@/app/i18n/routing";
import { fetchData } from "@/app/lib/fetchData";

export default async function Page({ params }) {
  // We need to await params before accessing its properties
  const resolvedParams = await params;
  const language = resolvedParams.locale || "en";
  const data = await fetchData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto nav-space">
        <PageTitleHeading title="YACHT EVENTS DUBAI" />

        <div className="hidden md:block">
          <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-4">
            {data?.events?.map((event, index) => (
              <EventCard key={event.id} event={event} language={language} index={index} />
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <Eventmobilecarousal events={data?.events} language={language} />
        </div>
      </div>

      <div className="container mx-auto px-3 py-5 pb-8">
        <p className="text-base text-primary-grey">
          Experience the perfect fusion of luxury, elegance, and unforgettable
          moments on the glistening waters of Dubai. As a premier destination
          for hosting extraordinary events, parties, and exclusive gatherings,
          Dubai offers a captivating backdrop for yacht events like no other.
          Whether you seek a lavish party, after party, a themed cruise, or a
          special celebration, immerse yourself in the excitement and glamour
          that awaits onboard. Dance under the stars, savor exquisite cuisine,
          and let the vibrant atmosphere captivate your senses.
          <br />
          <br />{" "}
          <strong>
            Book your tickets, or reserve a table early to ensure your place for
            upcoming events.
          </strong>
        </p>
      </div>

      <YachtCarousal />
    </>
  );
}
