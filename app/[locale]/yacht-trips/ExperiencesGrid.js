import React from 'react';
import { IoIosPricetag } from 'react-icons/io';
import { Link } from '@/app/i18n/routing';
import Image from 'next/image';

export default function ExperiencesGrid({ experiences, locale }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-7 pb-16">
      {/* Static Water Sports Card */}
      <div className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow">
        <Link href="/watersports">
          <Image src="/images/watersports-cover.webp" alt="Water Sports" className="rounded-tl-md rounded-tr-md w-full object-cover" width={800} height={600} />
        </Link>
        <div className="felx flex-col items-start justify-start px-5">
          <h2 className="text-primary-black text-2xl font-bold pt-6 transition-all duration-300 cursor-pointer">
            <Link href="/watersports">Water Sports</Link>
          </h2>
          <p className="text-primary-grey text-md pt-2 pb-9">Experience thrilling water sports activities in Dubai&apos;s beautiful waters. From banana boat rides to jet skiing, we offer a variety of exciting water adventures.</p>
          <div className="bg-primary-black w-full h-[0.05rem]"></div>
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex flex-row items-center justify-evenly gap-4">
              <IoIosPricetag className="text-primary-blue-light text-3xl lg:text-5xl" />
              <div className="flex flex-col items-start justify-start">
                <p className="text-primary-grey font-semibold text-sm xl:text-base">
                  Starting
                  <br className="hidden sm:block" />
                  <span className="xl:text-xl text-primary-red font-bold">AED 350</span>
                </p>
              </div>
            </div>
            <Link href="/watersports" className="blue-solid-button">
              KNOW MORE
            </Link>
          </div>
        </div>
      </div>

      {experiences?.map(experience => {
        const title = experience.translations?.[locale]?.title || experience.translations?.en?.title || 'Untitled';
        const preivew_text = experience.translations?.[locale]?.preivew_text || experience.translations?.en?.preivew_text || 'Untitled';

        return (
          <div key={experience.id} className="flex flex-col justify-start lg:justify-between rounded-md bg-white custom-shadow">
            <Link href={`/yacht-trips/${experience.slug}`}>
              <Image src={`https://www.centauruscharter.net/product/images/${experience.image}`} alt="yacht" className="rounded-tl-md rounded-tr-md w-full object-cover" width={800} height={600} />
            </Link>
            <div className="felx flex-col items-start justify-start px-5">
              <h2 className="text-primary-black text-2xl font-bold pt-6 transition-all duration-300 cursor-pointer">
                <Link href={`/yacht-trips/${experience.slug}`}>{title}</Link>
              </h2>
              <p className="text-primary-grey text-md pt-2 pb-9">{preivew_text}</p>
              <div className="bg-primary-black w-full h-[0.05rem]"></div>
              <div className="flex flex-row items-center justify-between py-4">
                <div className="flex flex-row items-center justify-evenly gap-4">
                  <IoIosPricetag className="text-primary-blue-light text-3xl lg:text-5xl" />
                  <div className="flex flex-col items-start justify-start">
                    <p className="text-primary-grey font-semibold text-sm xl:text-base">
                      Starting
                      <br className="hidden sm:block" />
                      <span className="xl:text-xl text-primary-red font-bold">AED {experience.amount.toLocaleString()}</span>
                    </p>
                  </div>
                </div>
                <Link href={`/yacht-trips/${experience.slug}`} className="blue-solid-button">
                  KNOW MORE
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
