import ExclusiveOffers from '@/app/components/ExclusiveOffers';
import TailorYachtExperience from '@/app/components/TailorYachtExperience';
import { Link } from '@/app/i18n/routing';
import FAQAccordion from './FAQAccordion';

const page = () => {
  const faqs = [
    {
      question: 'How much does it cost to rent a yacht?',
      answer:
        'Centaurus yacht rental in Dubai offers private, crewed yachts starting from AED 805 per hour. The price depends on the size of the yacht.',
    },
    {
      question: 'How do I book a yacht in Dubai?',
      answer:
        "You can book a yacht online, by phone, or via email with Centaurus Charter. Our sales team will assist you with all your questions. To secure your booking, a 50% deposit is required. You’ll receive booking confirmation via email or WhatsApp. Multiple payment options are available, including online payment, bank transfer, or cash. You'll also receive a location map, contact details, and information about your coordinator and captain. \n\nFor online bookings: Choose your preferred yacht, check availability, select your date and time, enter your details, and proceed to payment.\n\nTo book via phone: Call us at +971 50 248 4678 or +971 4 352 1833.\n\n To book via email: Contact us at info@centauruscharter.com.",
    },
    {
      question: 'Do you have any special offers on yachts?',
      answer:
        'Yes, we offer special deals on yacht bookings, including summer promotions, birthday packages, and discounts for Emirates staff, YPO, and Fazaa card members. Check out all our current offers.',
    },
    {
      question: 'Do you have a female crew onboard?',
      answer:
        'Yes, we do have female crew members on our yachts. Cruise with us safely and comfortably.',
    },
    {
      question: 'What are the modes of payment?',
      answer:
        'We accept various payment methods including Visa, Mastercard (credit or debit), and cash upon arrival.',
    },
    {
      question: 'Are we allowed to take photographs?',
      answer:
        'Yes, you are welcome to take photographs. Make sure your devices are fully charged. Please avoid photographing Arab women or girls without permission. Photography of government buildings or military sites is strictly prohibited.',
    },
    {
      question: 'What should we wear?',
      answer:
        'Wear swimwear or casual clothing based on your comfort. We also recommend bringing a jacket or upper layer, especially during winter.',
    },
    {
      question: 'Are we allowed to swim during the tour?',
      answer:
        'Yes, swimming is allowed during the tour, especially on trips longer than 3 hours. Our captain will guide you to safe swimming areas.',
    },
    {
      question: 'Is food and beverage included on the trip?',
      answer:
        'Complimentary soft drinks, coffee, and water are included. Food is not included, but catering can be arranged upon request. You are also welcome to bring your own food and beverages onboard.',
    },
    {
      question: 'Where does the boat depart from?',
      answer:
        'Our boats depart from Marina Walk in Dubai Marina or from Dubai Harbour near Barasti Beach.',
    },
    {
      question: 'What entertainment options are available on the boat?',
      answer:
        'Our yachts are equipped with high-quality music systems and TV screens. DJ setups and additional entertainment can be arranged upon request.',
    },
    {
      question: 'Is smoking allowed on the yacht cruise?',
      answer: 'No, smoking is not permitted during the yacht cruise.',
    },
    {
      question: 'Do you offer transfers?',
      answer:
        'Yes, transfers can be arranged upon request for an additional charge.',
    },
    {
      question: 'Do you offer water sports activities?',
      answer:
        'Yes, we offer a variety of water sports at an extra cost. Enhance your experience with activities like jet skiing, flyboarding, parasailing, fishing trips, banana boat rides, and swimming. Explore all our watersports add-ons.',
    },
    {
      question: 'Does the yacht have BBQ equipment?',
      answer:
        'Yes, our yachts are equipped with electric BBQ grills. Our crew can assist you with grilling your food.',
    },
    {
      question: 'What should we consider after booking?',
      answer:
        'As per Dubai Coast Guard regulations, all guests must present a copy of their passport or Emirates ID. Yacht trips require official approval, which we obtain based on weather conditions. The departure location is at Dubai Marina Walk (near Spinneys) or Dubai Harbour. Please arrive 15–20 minutes before your scheduled trip. Late arrivals will result in reduced cruise time without compensation.',
    },
    {
      question: 'What are the cancellation, refund, and rescheduling policies?',
      answer:
        'Cancellations or rescheduling made 72 hours before the booking are free of charge (excluding bank fees). Cancellations made less than 48 hours before will incur a 50% charge. No-shows or cancellations within 24 hours are non-refundable.',
    },
  ];

  return (
    <div className="bg-white w-full h-full nav-space">
      <div>
        <img src="/FAQ.jpg" className="w-full" />
      </div>
      <div className="container m-auto flex flex-col items-center justify-center py-10">
        <h1 className=" text-primary-blue text-center font-bold text-xl sm:text:2xl md:text-3xl lg:text-4xl">
          {' '}
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className=" text-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl py-3 px-3 md:px-10">
          {' '}
          Everything you need to know about yacht charter
        </p>
        <p className=" text-primary-grey text-center  text-base ">
          A luxury yacht rental is the perfect choice for anyone looking to
          enjoy a day on the water in Dubai. From stunning skyline views to
          Instagram-worthy photo spots, there’s no better way to explore the
          coast. Got a question? We’ve answered the most frequently asked
          questions about yacht chartering and bookings in Dubai below. If you
          still don’t find what you’re looking for, feel free to{' '}
          <Link href="/contact">
            <span className="text-blue-600">contact us</span>
          </Link>{' '}
          and let us know your requirements.
        </p>
      </div>

      <FAQAccordion faqs={faqs} />

      <ExclusiveOffers />

      <TailorYachtExperience />
    </div>
  );
};

export default page;
