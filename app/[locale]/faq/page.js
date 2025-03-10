
"use client";
import { useState } from "react";
import ExclusiveOffers from "@/app/components/ExclusiveOffers";
import TailorYachtExperience from "@/app/components/TailorYachtExperience";
const page = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
      {
        question: "HOW MUCH TO RENT A YACHT",
        answer:
          "Centaurus yacht rental in Dubai provides a crewed private yacht starting from 805 AED per hour. The price depends on the size of yacht.",
      },
      {
        question: "HOW TO BOOK A YACHT IN DUBAI",
        answer:
          "You can book a yacht online, by calling or sending email to Centaurus Charter. One of our sales staff will attend and facilitate you for all of your questions. You can secure the booking by placing a 50% deposit against the allotted charter. You’ll receive a confirmation of your booking via Email and or WhatsApp. Multiple payment options like pay online, pay through the bank account, pay in cash are available. A location Map, Contact details, Coordinator and Captain of the Yacht will also be provided. If you wish to book online - choose the perfect yacht, availability, date and time. Enter your details and you can pay online.If you wish to contact us - call us +971 50 248 4678 or +971 4 352 1833 and speak to yacht charter team.If you wish to email us - send your email to info@centauruscharter.com",
      },
      {
        question: "DO YOU HAVE ANY SPECIAL OFFERS ON YACHT",
        answer:
          "Yes, we do have special deals on yacht bookings. We have summer offers, birthday yacht offers and Emirates staff, YPO, Fazaa card membership discounts. Check all our yacht offers.",
      },
      {
        question: "DO YOU HAVE FEMALE CREW ONBOARD",
        answer:
          "Yes, we do have female crew on our yachts. So cruise with us safely.",
      },
      {
        question: "WHAT ARE THE MODES OF THE PAYMENT",
        answer:
          "We do offer various payment options - Visa card, Mastercard credit card or debit card or cash on arrival.",
      },
      {
        question: "ARE WE ALLOWED TO PHOTOGRAPH?",
        answer:
          "Make sure to charge your electronic devices in advance to ensure cameras/mobile devices can capture numerous sights. Avoid photographing Arab women and girls unless you request and get permission. Picturing government buildings or military installations is illegal.",
      },
      {
        question: "WHAT SHOULD WE WEAR?",
        answer:
          "Swim wear or casual clothes as per your comfort. You can also have upper/jacket specially for winter days.",
      },
      {
        question: "ARE WE ALLOWED SWIMMING ON TOUR?",
        answer:
          "Yes, you can enjoy swimming while on your sightseeing tour. Our captain can guide for safe areas and swimming is available for tours more than 3 hours.",
      },
      {
        question: "IS FOOD & BEVERAGE INCLUDED ON TRIP?",
        answer:
          "The complimentary drinks like soft drinks, coffee & water are included. The food is not yet included on trip. If you order in advance, we can arrange catering for you. You are also welcome to bring your own food or beverages aboard",
      },
      {
        question: "WHERE DOES THE BOAT DEPARTURE FROM?",
        answer:
          "Our boats departure from Marina Walk, Dubai Marina and Dubai Harbour near Barasti Beach",
      },
      {
        question: "WHAT ENTERTAINMENT OPTIONS ARE AVAILABLE ON THE BOAT?",
        answer:
          "Our boats have hifi music system and TV screens so you can enjoy your trip. We can arrange DJ system and water activities on request",
      },
      {
        question: "IS SMOKING ALLOWED ON YACHT CRUISE?",
        answer: "No, smoking is not allowed on yacht cruise.",
      },
      {
        question: "DO YOU OFFER TRANSFERS",
        answer: "Yes, we do offer transfer on request and at an extra cost.",
      },
      {
        question: "DO YOU OFFER WATER SPORTS ACTIVITIES?",
        answer:
          "Yes, we do provide water sports along with your yacht tour at an additional cost. Add more fun to your yacht ride by including water activities like Swimming, Jet Ski, FlyBoard, Parasailing, Fishing Trips, Banana Boats. Check our all watersports add ons",
      },
      {
        question: "DO YACHT HAVE BBQ EQUIPMENT?",
        answer:
          "Yes, do we have electric BBQ equipment aboard. Our crew can help you to grill your meal.",
      },
      {
        question: "WHAT WE NEED TO CONSIDER AFTER WE BOOKED?",
        answer:
          "As advised by the Dubai Coast Guard, guests would be requested to present a passport or Emirates Id copy. Yacht trips always need Dubai Coast Guard approval (company takes this approval) based on weather conditions. Arrival location point is at Dubai Marina Walk near Spinneys Market or Dubai Marina Harbour. We request guests to arrive 15-20 minutes before the trip time. In case, guests arrive late; the time cannot be compensated.",
      },
      {
        question: "WHAT ARE THE CANCELATION,REFUND & RESCHEDULE POLICIES?",
        answer:
          "Cancellation or reschedule 72 hours prior the booking free of charge (standard bank fees will be charged). Upon cancellation less than 48 hours prior the booking 50% from the total will be charged. No-show or cancellation less than 24 hours prior the booking will be NO REFUNDABLE.",
      },
    ];
  
    return (
      <div className="bg-white w-full h-full mt-14 md:mt-0">
        <div>
          <img src="./FAQ.jpg" className="w-full" />
        </div>
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className=" text-primary-blue text-center font-bold text-4xl">
            {" "}
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className=" text-black text-center font-bold text-3xl py-3 px-10">
            {" "}
            Everything you need to know about yacht charter
          </p>
          <p className=" text-[#848484] text-center  text-base  px-3 lg:px-12 xl:px-56">
            A luxury yacht rental is the best choice for anyone who wants to enjoy
            a day on the water. There are a lot of Insta-worthy spots that can be
            seen from the water. Got a question? Find the answers below to most
            Frequently asked questions about yacht chartering and bookings in
            Dubai. If you still don't find an answer for your inquiry, just{" "}
            <span className="text-blue-600">Contact us</span> and tell about your
            requirements. HOW MUCH TO RENT A YACHT?
          </p>
        </div>
        <div
          className={`w-full max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-1 `}
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`  transition-colors duration-200  shadow-md py-3 px-3 ${
                  activeIndex === index
                    ? "bg-primary-yellow rounded-t-lg"
                    : "bg-primary-blue rounded-lg"
                }`}
              >
                <button
                  onClick={() => toggleAnswer(index)}
                  className={`w-full text-left text-lg md:text-lg font-bold   flex justify-between items-center focus:outline-none ${
                    activeIndex === index ? "text-primary-blue" : "text-primary-yellow"
                  }`}
                >
                  {faq.question}
                  <span className="text-2xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] w-full duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="bg-white px-4 py-3 text-gray-600   text-xs md:text-xs mt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <ExclusiveOffers />
  
          <TailorYachtExperience />
      </div>
    );
  }
  

export default page