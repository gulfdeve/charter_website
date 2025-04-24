"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useEffect ,useState} from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Aboutus from "@/app/components/Aboutus";
import Reviews from "@/app/components/Reviews";
// import Modal from "@/app/components/Modal"
import Counters from "@/app/components/Counters";
import LocationCarousel from "@/app/components/LocationCarousel";
import Video from "@/app/components/Video";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Link } from "../i18n/routing";
import Image from "next/image";
import Yachtmobilecarousal from '@/app/components/Yachtmobilecarousal'
import VideoLocal from "@/app/components/VideoLocal";
import ModalAfternoon from "@/app/components/ModalAfternoon";
export default function Home() {
  const t = useTranslations();
  const emblaRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const emblaInstance = useRef(null);
  const { data, loading, error } = useData();
  const { language } = useLanguage();
  const locale = useLocale();

  useEffect(() => {
    // Show modal when the page loads
    setIsModalVisible(true);
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (emblaRef.current) {
      emblaInstance.current = EmblaCarousel(emblaRef.current, { loop: true });
    }

    // Return a cleanup function if needed
    return () => {
      if (emblaInstance.current) {
        emblaInstance.current.destroy(); // Properly destroy the instance if it exists
      }
    };
  }, []);

  const scrollPrev = () => emblaInstance.current?.scrollPrev();
  const scrollNext = () => emblaInstance.current?.scrollNext();

  return (
    <>
    <div>
    {/* <Modal show={isModalVisible} onClose={closeModal} /> */}
    {/* <ModalAfternoon show={isModalVisible} onClose={closeModal} /> */}
      <div>
      
        {/* <Video /> */}
        <VideoLocal filename="/Seasonal Tour _ Luxury Tours.mp4" section="home" />
      </div>
    <div className="relative">
      
      <div className="flex flex-col items-center justify-center">
        <h2 className=" text-primary-blue text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl md:p-4 pb-4 px-3">
          DUBAI YACHTS - ONLINE BOOKING
        </h2>
        <p className=" text-primary-blue text-center text-lg sm:text-xl md:text-xl lg:text-2xl  pb-6 md:pb-12">
          Enjoy your Luxury Yacht Experience
        </p>
      </div>
        

      {/* DESKTOP */}
      <div className="hidden md:block z-30">
        <div className="container mx-auto p-0">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4">
            {!loading &&
              data?.products?.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col p-5 rounded-lg shadow-custom bg-white"
                >
                  <Link  href={`/yacht-rentals/${product.slug}`}>
                  <h3 className="md:text-lg  font-bold">
                    {product.translations?.[locale].name_of_yacht}
                  </h3>
                  </Link>
                  <div className="relative">
                    {/* Yacht Image */}
                  <Link  href={`/yacht-rentals/${product.slug}`}>
                  <Image 
                    src={`https://www.centauruscharter.net/product/images/${product.image}`}
                    alt={product.translations?.[locale].name_of_yacht}
                    className="w-full rounded-lg mt-3"
                    width={400}
                    height={400}
                  />

                  </Link>

                  <div className="absolute grid grid-cols-3 items-center gap-0 rounded-lg center-absolute -bottom-5 left-0 right-0 px-5">
                    {/* Model */}
                    <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-l-lg">
                      <span className="text-xs">
                        Model:
                      </span>
                      <span className="font-bold text-sm text-black">
                        {product.translations?.[locale].model}
                      </span>
                    </div>

                    {/* Length */}
                    <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center">
                      <span className="text-xs">
                        Length:
                      </span>
                      <span className="font-bold text-sm text-black">
                        {product.translations?.[locale].size}
                      </span>
                    </div>

                    {/* Guests */}
                    <div className="bg-[#f1f1f1] text-primary-grey p-1 xl:p-2 flex flex-col items-center rounded-r-lg">
                      <span className="text-xs">
                        Guests:
                      </span>
                      <span className="font-bold text-sm text-black">
                        {product.translations?.[locale].guests}
                      </span>
                    </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-end z-10 mt-12">
                    <div>
                      <div className="text-sm font-semibold mt-3 mb-2">
                        Trip inclusions from 3 hours onwards:
                      </div>
                      <div>
                      <ol className="text-xs">
                        <li>
                          {" "}
                          Hops, Wines, Bubbly Drinks, Coffee, Tea, Water, &
                          Softdrinks
                        </li>
                      </ol>
                      </div>
                      <div className="text-sm font-semibold mt-3 mb-2">
                        Extras: <span className="text-xs text-primary-grey font-normal">(additional charges apply)</span> 
                      </div>
                      <div>
                      <ol className="text-xs">
                        <li>
                          {" "}
                          Transfer
                        </li>
                        <li>Canapés & Snacks</li>
                        <li>DJ</li>
                      </ol>
                      </div>
                      
                    </div>
                    <div>
                      <Link
                        href={
                          "https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding"
                        }
                      >
                        <img
                          src="/centaurus_link.svg"
                          alt="centaurus link"
                          className="w-[11rem]"
                        />
                      </Link>
                      <div className="flex flex-col items-center justify-center">
                      <span className=" text-primary-blue-2 text-xs text-center">
                        <a href="https://www.centauruscharter.com/terms-and-condition" target="_blank">T&C’s Apply</a>
                      </span>
                    </div>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center z-20 border-t border-gray-400 pt-3 mt-5">
                    {/* Price per Hour */}
                    <div className="p-1 xl:p-2 flex flex-col">
                      <span className=" text-sm">Price per hour:</span>
                      <span className="font-bold text-lg lg:text-xl text-primary-red">
                      AED {product.per_hour_price.toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-3">
                   

                    <a
  href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
  target="_self"
  rel="noopener noreferrer"
  className="blue-solid-button "
>
  Book Now
</a>

                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
      {/* MOBILE */}
      <div className="md:hidden block">
        <Yachtmobilecarousal/>

      </div>
      <p className=" text-primary-grey text-center  text-base py-4 md:py-14 px-3 mx-auto container">
                  Centaurus Charter is a yacht rental company in Dubai that offers range
                  of private yachts and boats for those who like glamorous, a taste of
                  luxury & cruiser that bring forth a wonderful yachting experience. Let
                  our experienced yachtsmen take care of you and your family, whether
                  you're looking for the thrill of the open seas, the relaxation of a
                  private island, or simply want to explore new destinations. We'll make
                  sure you enjoy a calm experience with every detail taken care of. Our
                  yachts also provide a comfortable environment for all ages. You can
                  enjoy drinks on the deck while watching the sunset. Come cruise with
                  us.
                </p>
{/* Background SVG in Front */}
<div
        className="absolute inset-0 z-[-10]"
        style={{
          backgroundImage: "url('/images/bg-svg-blue.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundAttachment: "fixed",
        }}
      ></div>
      </div>




      <div className="flex flex-col  md:flex-row-reverse items-center justify-center ">
        <div className="">
          <div className="">
            <img
              src="/LUXURY YACHT CHARTER.webp"
              alt="luxury yacht charter"
              className="w-full h-full object-cover xl:w-[380rem] sm:w-[170rem] lg:w-[160rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-primary-blue px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[395rem] lg:w-[250rem] xl:h-[452px] lg:h-[404px]">
        
          <h2 className=" text-primary-yellow text-center font-bold text-2xl xl:text-4xl py-7">
            LUXURY YACHT RENTALS
          </h2>
          <p className=" text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Marvel with the beauty of Dubai on a luxury yacht. Explore our
            yachts in Dubai Marina and Dubai Harbor Marina with excellent
            conditions, full of luxurious amenities, flexible booking timings,
            capacity and yacht sizes. Cruise along the Arabian Gulf and Dubai’s
            top attractions – Burj Al Arab, Atlantis The Palm, JBR, Ain Dubai,
            Bluewaters Island and much more.
          </p>
          <p className=" text-white text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Welcome your guests in a warm atmosphere with pure elegance and
            style.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center mb-4 py-2 px-6 md:py-2 md:px-4   outline-primary-yellow outline-double rounded-md bg-primary-blue text-primary-yellow  font-bold text-[20px] md:text-sm xl:text-lg">
            EXPLORE OUR YACHTS
          </button>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row items-center justify-center">
        <div>
          <div className="">
            <img
              src="/CUSTOMIZEDEXPERIENCES.webp"
              alt="customized experiences"
              className="w-full h-full object-cover xl:w-[260rem] sm:w-[170rem] lg:w-[160rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center  bg-primary-yellow px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[277rem] xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-primary-blue text-center font-bold text-2xl xl:text-4xl py-7">
            CUSTOMIZED YACHT TRIPS
          </h2>
          <p className=" text-primary-blue text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Centaurus Charter has something for everyone. Embark on a sunset
            cruise, catch some fish, celebrate milestones, woo your loved one or
            take your colleagues to a different team meeting; rent a yacht in
            Dubai and enjoy the day making memories that last forever. Book a
            Dubai luxury yacht for parties, fishing trips or romantic getaway in
            Dubai.
          </p>
          <p className=" text-primary-blue text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Celebrate Birthday Parties, Wedding Anniversary, Marriage proposals
            or Corporate Events on private yachts.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center mb-4 py-2 px-6 md:py-2 md:px-4   outline-[#0D2343] outline-double rounded-md bg-primary-yellow text-primary-blue  font-bold text-[20px] md:text-sm xl:text-lg">
            EXPLORE OUR EXPERIENCES
          </button>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row-reverse items-center justify-center">
        <div>
          <div className="">
            <img
              src="/EXCLUSIVEOFFERS.webp"
              alt="exclusive offers"
              className="w-full h-full object-cover xl:w-[270rem] sm:w-[170rem] lg:w-[140rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-primary-blue px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[287rem]  xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-primary-yellow text-center font-bold text-2xl xl:text-3xl py-7">
            EXCLUSIVE OFFERS
          </h2>
          <p className=" text-white text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Dubai is a true yachting heaven with azure blue waters and beautiful
            skyscrapers. Take your loved ones to sea. We bring to you deals from
            day charter, yacht parties to overnight yacht rentals. Don’t miss to
            explore the special discount for Emirates platinum , Business
            councils & FAZAA members.
          </p>
          <p className=" text-white text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Find your ideal boat with great deals and confirm your booking
            instantly.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center mb-4 py-2 px-6 md:py-2 md:px-4   outline-primary-yellow outline-double rounded-md bg-primary-blue text-primary-yellow  font-bold text-[20px] md:text-sm xl:text-lg">
            EXPLORE ALL OFFERS
          </button>
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row items-center justify-center">
        <div>
          <div className="">
            <img
              src="/WATERACTIVITIES.webp"
              alt="water activities"
              className="w-full h-full object-cover xl:w-[240rem] sm:w-[170rem] lg:w-[140rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center  bg-primary-yellow px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[250rem] xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-primary-blue text-center font-bold text-2xl xl:text-3xl py-7">
            WATER SPORTS ADD ON’s
          </h2>
          <p className=" text-primary-blue text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Holidays in Dubai offers a great mix of fun, adventure, breath
            taking places and special moments. It’s truly amazing to cruise the
            beautiful coastline with the speed jet boat or fly high on waters
            with fly boarding. Find plenty of water activities at the best price
            and make your excursion even more exciting.
          </p>
          <p className=" text-primary-blue text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Book your watersports together with boat charter at the best price.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center mb-4 py-2 px-6 md:py-2 md:px-4   outline-[#0D2343] outline-double rounded-md bg-primary-yellow text-primary-blue  font-bold text-[20px] md:text-sm xl:text-lg">
            EXPLORE OUR WATER ACTIVITIES
          </button>
        </div>
      </div>
      <WhyChooseUs />
      <div className="h-[30vh] lg:h-[50vh] relative">
  {/* Scrollable Background */}
  <div
    className="h-[30vh] lg:h-[50vh] bg-cover bg-fixed lg:bg-top bg-center"
    style={{
      backgroundImage: "url('/images/yacht-sun.webp')",
    }}
  >
    {/* SVG Divider */}
    <div className="divider-top absolute w-full -top-2">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full "
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill fill-white"
          
        ></path>
      </svg>
    </div>
  </div>

  {/* Fixed Content */}
</div>
      <Aboutus />
      <Reviews />

      <Counters />
      <LocationCarousel />
      </div>
    </>
  );
}