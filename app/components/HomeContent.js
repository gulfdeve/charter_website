"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useEffect ,useState} from "react";
import EmblaCarousel from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Aboutus from "@/app/components/Aboutus";
import Reviews from "@/app/components/Reviews";
import Modal from "@/app/components/Modal"
import Counters from "@/app/components/Counters";
import LocationCarousel from "@/app/components/LocationCarousel";
import Video from "@/app/components/Video";
import { useData } from "@/app/context/DataContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { Link } from "../i18n/routing";

export default function Home() {
  const t = useTranslations();
  const emblaRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const emblaInstance = useRef(null);
  const { data, loading, error } = useData();
  const { language } = useLanguage();

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
    <Modal show={isModalVisible} onClose={closeModal} />
    
      <div>
        <Video />
      </div>

      <div className="flex flex-col bg-white items-center justify-center pb-10 xl:pt-20
       2xl:pt-20 2xl:py-0 ">
        <h1 className=" text-[#0D2343] text-center font-bold text-4xl pb-4">
          YACHT RENTAL DUBAI {t("navbar.private-yachts")}
        </h1>
        <h1 className=" text-[#0D2343] text-center  text-4xl pb-16">
          Enjoy your Luxury Yacht Experience
        </h1>

        <p className=" text-[#848484] text-center  text-base  px-3 xl:px-44 mx-auto container">
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
      </div>
        

      {/* DESKTOP */}
      <div className="">
        <div className="container mx-auto  lg:p-6">
          <div className="grid grid-col-1 md:grid-cols-2 p-6 2xl:px-36 2xl:gap-14 gap-10">
            {!loading &&
              data?.products?.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col border border-gray-400 xl:p-10 p-5 rounded-lg"
                >
                  <Link  href={`/yacht-rentals/${product.slug}`}>
                  <h2 className=" xl:text-4xl text-3xl font-bold">
                    {product.translations[language].name_of_yacht}
                  </h2>
                  </Link>
                  <Link  href={`/yacht-rentals/${product.slug}`}>
                  <img
                    src={`https://www.centauruscharter.com/product/images/${product.image}`}
                    alt={product.translations[language].name_of_yacht}
                    className="rounded-lg xl:w-[32rem] w-[25rem] mt-3"
                  />
                  </Link>

                  <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-1 items-center gap-0 rounded-lg lg:w-[25rem] xl:w-[23rem] shadow-md mb-7 mt-5">
                    {/* Model */}
                    <div className="bg-[#0d2343] text-white p-1 xl:p-2.5 flex flex-col items-center xl:rounded-l-lg">
                      <span className="font-bold  text-sm">
                        Model:
                      </span>
                      <span className="font-semibold  text-sm xl:text-xs text-[#e1ae48]">
                        {product.translations[language].model}
                      </span>
                    </div>

                    {/* Length */}
                    <div className="bg-[#0d2343] text-white p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-bold  text-sm">
                        Length:
                      </span>
                      <span className="font-semibold  text-sm text-[#e1ae48]">
                        {product.translations[language].size}
                      </span>
                    </div>

                    {/* Guests */}
                    <div className="bg-[#0d2343] text-white p-1 xl:p-2 flex flex-col items-center">
                      <span className="font-bold  text-sm">
                        Guests:
                      </span>
                      <span className="font-semibold  text-sm text-[#e1ae48]">
                        {product.translations[language].guests}
                      </span>
                    </div>

                    {/* Good For */}
                    <div className="bg-[#e1ae48] text-[#0d2343] xl:w-56 p-1 xl:p-2 flex flex-col items-center xl:rounded-r-lg">
                      <span className=" text-sm">Per Hour:</span>
                      <span className="font-semibold  text-sm">
                        {product.per_hour_price} +VAT
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center xl:w-[32rem]">
                    <div>
                      <div className=" font-bold">
                        Trip inclusions from 3 hours onwards:
                      </div>
                      <ol className="list-disc ml-7 text-xs font-bold ">
                        <li>
                          {" "}
                          Hops, Wines, Bubbly Drinks, Coffee, Tea, Water, &
                          Softdrinks
                        </li>
                        <li> Transfer (upon request)</li>
                        <li> Canapés & Snacks (additional charges apply)</li>
                      </ol>
                    </div>

                    <div>
                      <Link
                        href={
                          "https://centaurusint.net/?utm_source=centauruscharter&utm_medium=logo_text&utm_campaign=branding"
                        }
                      >
                        <img
                          src="./centaurus_link.svg"
                          alt="centaurus link"
                          className="w-[10rem] xl:mt-3"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between items-center xl:w-[32rem] mt-3">
                    <div className="pt-3">
                   

                    <a
  href={`https://fareharbor.com/embeds/book/centauruscharter/items/${product.fareharbor_id}/?full-items=yes&flow=645487`}
  target="_self"
  rel="noopener noreferrer"
  className="yellow-solid-button "
>
  Book Now
</a>

                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className=" text-blue-500 text-xs text-center mt-6 mr-3">
                        T&C’s Apply
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col  md:flex-row-reverse items-center justify-center ">
        <div className="">
          <div className="">
            <img
              src="/LUXURY YACHT CHARTER.webp"
              alt="luxury yacht charter"
              className="xl:w-[380rem] sm:w-[170rem] lg:w-[160rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-[#0D2343] px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[395rem] lg:w-[250rem] xl:h-[452px] lg:h-[404px]">
        
          <h2 className=" text-[#e1ae48] text-center font-bold text-2xl xl:text-3xl py-7">
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
          <button className="flex flex-row items-center sm:text-left justify-center py-2 px-6 md:py-2 md:px-4   outline-[#e1ae48] outline-double rounded-md bg-[#0d2343] text-[#e1ae48]  font-bold text-[20px] md:text-sm xl:text-lg">
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
              className="xl:w-[260rem] sm:w-[170rem] lg:w-[160rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center  bg-[#e1ae48] px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[277rem] xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-[#0D2343] text-center font-bold text-2xl xl:text-3xl py-7">
            CUSTOMIZED YACHT TRIPS
          </h2>
          <p className=" text-[#0D2343] text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Centaurus Charter has something for everyone. Embark on a sunset
            cruise, catch some fish, celebrate milestones, woo your loved one or
            take your colleagues to a different team meeting; rent a yacht in
            Dubai and enjoy the day making memories that last forever. Book a
            Dubai luxury yacht for parties, fishing trips or romantic getaway in
            Dubai.
          </p>
          <p className=" text-[#0D2343] text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Celebrate Birthday Parties, Wedding Anniversary, Marriage proposals
            or Corporate Events on private yachts.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center py-2 px-6 md:py-2 md:px-4   outline-[#0D2343] outline-double rounded-md bg-[#e1ae48] text-[#0D2343]  font-bold text-[20px] md:text-sm xl:text-lg">
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
              className="xl:w-[270rem] sm:w-[170rem] lg:w-[140rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center bg-[#0D2343] px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[287rem]  xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-[#e1ae48] text-center font-bold text-2xl xl:text-3xl py-7">
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
          <button className="flex flex-row items-center sm:text-left justify-center py-2 px-6 md:py-2 md:px-4   outline-[#e1ae48] outline-double rounded-md bg-[#0d2343] text-[#e1ae48]  font-bold text-[20px] md:text-sm xl:text-lg">
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
              className="xl:w-[240rem] sm:w-[170rem] lg:w-[140rem] md:h-[443px] xl:h-[452px] lg:h-[404px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:justify-start justify-center  bg-[#e1ae48] px-5 xl:px-32 xl:py-12 py-5 md:h-[443px] xl:w-[250rem] xl:h-[452px] lg:h-[404px]">
          <h2 className=" text-[#0D2343] text-center font-bold text-2xl xl:text-3xl py-7">
            WATER SPORTS ADD ON’s
          </h2>
          <p className=" text-[#0D2343] text-center sm:text-left  text-md  sm:text-sm xl:text-md pb-10">
            Holidays in Dubai offers a great mix of fun, adventure, breath
            taking places and special moments. It’s truly amazing to cruise the
            beautiful coastline with the speed jet boat or fly high on waters
            with fly boarding. Find plenty of water activities at the best price
            and make your excursion even more exciting.
          </p>
          <p className=" text-[#0D2343] text-center sm:text-left text-md sm:text-sm xl:text-md  pb-10">
            Book your watersports together with boat charter at the best price.
          </p>
          <button className="flex flex-row items-center sm:text-left justify-center py-2 px-6 md:py-2 md:px-4   outline-[#0D2343] outline-double rounded-md bg-[#e1ae48] text-[#0D2343]  font-bold text-[20px] md:text-sm xl:text-lg">
            EXPLORE OUR WATER ACTIVITIES
          </button>
        </div>
      </div>
      <WhyChooseUs />
      <div className=" h-[40vh]">
        {/* Scrollable Background */}
        <div
          className="w-full h-[50vh] bg-cover bg-fixed lg:bg-top bg-center"
          style={{
            backgroundImage: "url('YachtSun.webp')",
            // Ensure the background is behind the content
          }}
        ></div>

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