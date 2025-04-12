import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter, usePathname, Link } from "@/app/i18n/routing";
const page = () => {
  return (
    <>
      <div className="nav-space">
        <div>
          <Image
            src="/terms.jpg"
            alt="termsheader"
            layout="responsive"
            width={1920} // Set the original width
            height={1080} // Set the original height
            className="w-full" // Full width on the container
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center pt-10">
          <h1 className=" text-primary-blue text-center">
            {" "}
            TERMS AND CONDITIONS
          </h1>
        </div>

        <div className="flex flex-col items-start justify-center py-10">
          <p>
            This voucher includes the use of our yachts and equipment according
            to the value, bed linen, auxiliary rowboat, gas, autopilot, GPS,
            usual services provided by Centaurus Charter Services at the time of
            check-in and check-out. In the event of the guest cancellation of
            the booked accommodation onboard due to any reason whatsoever,
            he/she shall be obliged to notify Centaurus Charter thereof in
            writing, and in respect, the voucher shall be forfeited unless with
            a medically valid reason whereupon the company will reconsider
            timings. We request guests to arrive 15 minutes before the trip;
            late arrivals will not be amended. We also request guests to inform
            us 24 hours in advance for any cancellation. All staff and a
            qualified and trained Captain will accommodate the yacht at the
            period of the trip. Guests, staff, and yachts are fully insured.
          </p>
          <h2 className="  text-left py-5">DEPOSIT AND INSURANCE</h2>
          <p>
            Our yachts are covered with an insurance amount according to the
            Price List for the current year. The insurance policy covers
            Compulsory Passenger Insurance and Compulsory Third-Party Insurance.
            Personal property of passengers is not covered with insurance and
            any damage incurred due to gross negligence, or with the plain
            intention by the guests, shall not be the subject to insurance
            compensation. DEPOSIT *- Before the delivery of the yacht, the
            Guests are expected to pay the security deposit in cash or by credit
            card (Visa, Master). After completing the accommodation of guests
            onboard, the security deposit shall be reimbursed in full, unless
            any damage to the vessel or damage or loss of any item of the vessel
            equipment has been found. Otherwise, the deposit shall be kept in
            the equivalent value of the repair or the purchase value of the
            damaged and/or lost equipment.
          </p>
          <h2 className="  text-left py-5  ">PROMO CODE</h2>
          <p className="  text-left     ">
            These terms and conditions apply to those promotions where you must
            redeem a promo code as part of the offer.
          </p>
          <ul className="list-disc pl-12   text-left     ">
            <li>The promo code is valid for a limited time only.</li>

            <li>
              Centaurus Charter reserves the right to modify or cancel the offer
              at any time. If you received the promo code (directly or
              indirectly) from a third party, that third party also reserves the
              right to modify or cancel the offer at any time.
            </li>
            <li>
              The promo code must be entered into the Promo Code field when
              checking out through www.centauruscharter.com and applied for the
              discount to be deducted from the booking price.
            </li>
            <li>
              If the promo code has a minimum purchase/booking requirement,
              taxes and additional package charges do not apply when determining
              the minimum purchase/booking amount.
            </li>
            <li>
              Each promo code applies only to qualifying services. Details are
              specified in the promotion.
            </li>
            <li>
              Yachts already reduced in price, displaying a 'Was' and 'Now'
              price are also excluded from promo code offers.
            </li>
            <li>
              The promotion is subject to all restrictions set forth in the
              offer.
            </li>
            <li>The promo code can be transferable.</li>
            <li>
              Only one promo code can be used each time and therefore cannot be
              combined with any other offers using a promo code.
            </li>
            <li>
              Centaurus Charter reserves the right to void the transactions
              where prohibited.
            </li>
          </ul>
          <p>
            If you violate any of the Terms and Conditions, the promotion will
            be invalid, and the promo code discount will not apply.
          </p>
          <p>
            Centaurus Charter reserves the right to update these terms and
            conditions without prior notice.
          </p>

          <h2 className="  text-left py-5  ">CANCELLATION</h2>
          <ul className="list-disc pl-12   text-left     ">
            <li>
              Cancellation or reschedule 72 hours prior to the booking free of
              charge (standard bank fees will be charged).
            </li>

            <li>
              Upon cancellation less than 48 hours prior the booking 50% from
              the total will be charged.
            </li>
            <li>
              No-show or cancellation less than 24 hours prior the booking will
              be NO REFUNDABLE.
            </li>
          </ul>
          <h2 className="  text-left py-5 ">
            POSEIDON 118FT CANCELLATION POLICY
          </h2>
          <ul className="list-disc pl-12   text-left     ">
            <li>
              Centaurus requires a 50% booking payment as a security deposit.
            </li>

            <li>100% refund applicable up to 14 days prior to the trip.</li>
            <li>
              Cancellations or changes that are made less than 14 days will have
              50% of the total booking charge.
            </li>
            <li>
              Cancellations made less than 3 days prior to the trip will have
              100% of the total booking charge.
            </li>
          </ul>
          <h2>YACHT DELIVERY PROCEDURE (CHECK -IN)</h2>
          <p>
            The yacht boarding takes place upon bookings which will be Sunday –
            Saturday 9 am – 2 am. All guests shall deliver a verified original
            voucher including original identification documents (emirates id or
            passport). During the boarding procedure, the guests will be
            required to attain a safety check with the representative of the
            Centaurus Charter and confirm the condition of the vessel with
            his/her signature. The same procedure shall be referred to as the
            equipment and onboard facilities. Any subsequent complaints will not
            be accepted, provided that the good working order and the full
            equipment of the vessel have been established and signed during the
            delivery procedure. If the guests wish to extend the stay onboard
            he/she must notify Centaurus Charter to check out the further
            availability of the vessel whereupon added charges for additional
            timings will be made once approved by us.
          </p>

          <h2>LIABILITY OF GUESTS</h2>
          <p>
            All guests undertake not to accept more passengers onboard of the
            Yacht than it is specified in the Centaurus Charter. The guests
            shall immediately inform representatives of Centaurus Charter when
            following their instructions in the event of sea damage or major
            breakdown. Guests shall follow the compulsory control intervals of
            the propulsion engine during the accommodation service. To take all
            the preventive measures to keep the Yacht and/or other add ons in
            the same condition as first delivered to avoid any towing
            situations. Guests shall not engage in fishing and submarine
            activities without valid licenses. Guests shall not embark any pets
            (dogs, cats, birds, etc.) without the prior written consent by
            Centaurus Charter.
          </p>
          <h2>LIABILITY OF CENTAURUS CHARTER</h2>
          <p>
            Centaurus Charter shall be obliged to deliver the vessel in good
            working order, cleaned and with full fuel and water tanks. In case
            of inability to deliver the booked Yacht at the arranged time, the
            guests shall be entitled to rescheduling the trip. Centaurus Charter
            shall not be liable for any delay incurred due to rough weather
            conditions.
          </p>
          <h2>COMPLAINTS</h2>
          <p>
            Guests shall be entitled to file complaints only in writing, signed
            personally and by a representative of Centaurus Charter on the
            completion date of the service
          </p>
          <h2>CRUISE ROUTE</h2>
          <p>
            Depending on the time the route shall include the Marina Canal,
            Lagoon, Burj Al Arab and Atlantis the Palm.
          </p>
          <h2>FOOD AND BEVERAGES</h2>
          <p>
            Refrigerator, AC, GPS, Cutlery, drinkware, plates etc. No food or
            refreshments will be sold to guests; however, guests can bring their
            own food onboard. Drinks can be ordered from www.centaurusint.net
          </p>
          <h2>Centaurus Charter Services </h2>
          <h2>YACHT OFFERS AND DEALS IN DUBAI</h2>
          <p>
            Yacht offers blackout dates: 1-3 December (National Day) and 20
            December 2024 -01 January. All offers cannot be combined with other
            promotions.
          </p>
          <h2>UAE RESIDENTS OFFERS</h2>
          <ul className="list-disc pl-12   text-left  ">
            <li>
              Discounted rates are valid for bookings falling between 6 am-2 pm
              (morning trips) & 8 pm onwards (night trips)
            </li>
            <li>The Offer is valid until 28 February 2025.</li>
            <li>A minimum booking duration of 2 hours is required.</li>
            <li>
              The offer is exclusive to UAE residents (proof of residency may be
              required).
            </li>
            <li>Terms are subject to change without prior notice.</li>
          </ul>
          <h2>FAZAA</h2>
          <ul className="list-disc pl-12   text-left  ">
            <li>A minimum booking duration of 2 hours is required.</li>
            <li>
              Valid for Fazaa public card or front liner card holder only.
            </li>
            <li>The Offer is valid until 28 February 2025.</li>
          </ul>
          <h2>EMIRATES STAFF DISCOUNT</h2>
          <ul className="list-disc pl-12   text-left  ">
            <li>Minimum Booking Rental time 4 hours.</li>
            <li>Inclusions: Water , Tea , Coffee and soft drinks</li>
            <li>
              This discount cannot be used in conjunction with any other
              discount or promotional offer.
            </li>
            <li>Bookings must be done via WhatsApp on +971 56 727 7387</li>
            <li>
              Valid for all Emirates platinum card holders, Flydubai employees
              and Dnata crew.
            </li>
            <li>Centaurus Charter Cancellation policy:</li>
            <li>Cancellations 72 hours prior the booking free of charge</li>
            <li>Cancellations 48 hours prior will get 50% refund</li>
            <li>Cancellations 24 hours prior will be No refundable</li>
            <li>
              50% of the total amount must be paid to secure your booking.
            </li>
            <li>
              The offer is not valid on public holidays and festive seasons
            </li>
          </ul>

          <h2>BUSINESS COUNCIL MEMBERS OFFER</h2>

          <ul className="list-disc pl-12   text-left  ">
            <li>A minimum booking duration of 2 hours is required.</li>
            <li>Valid for all our business council partners.</li>
          </ul>

          <h2>FORMULA 1-2025</h2>
          <p>Booking and Cancellation Policy for Formula 1 Abu Dhabi</p>
          <ul className="list-disc pl-12   text-left  ">
            <li>
              First 50% deposit shall be paid to the company by the Client upon
              booking (not refundable).
            </li>
            <li>
              Last booking must be done by 30 September 2025 in case of no
              second deposit, Centaurus Charter reserves the right to cancel the
              booking and offer the vessel to other customers.
            </li>
            <li>
              Bookings done after 30 September 2025, will require 100% of the
              total booking amount as a deposit and will be non-refundable.
            </li>
            <li>Terms are subject to change without prior notice.</li>
          </ul>

          <h2>NEW YEAR’S EVE</h2>
          <p>Centaurus Charter Cancellation policy:</p>
          <ul className="list-disc pl-12   text-left  ">
            <li>
              Booking Deposit: A non-refundable deposit of 50% of the total
              booking amount is required upon reservation. This initial payment
              confirms the booking with Centaurus Charter.
            </li>
            <li>
              Final Payment Deadline: The remaining balance must be paid by 15
              December 2025. If this second payment is not received by the
              deadline, Centaurus Charter reserves the right to cancel the
              reservation and make the vessel available to other clients.
            </li>
            <li>
              Late Bookings: Reservations made after 15 December 2025 will
              require a 100% non-refundable payment of the total booking amount
              at the time of booking.
            </li>
          </ul>
          <p>Terms are subject to change without prior notice.</p>
        </div>
      </div>
    </>
  );
};

export default page;
