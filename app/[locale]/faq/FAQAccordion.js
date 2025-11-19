'use client';
import { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5 mx-auto">
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-colors duration-200 ${
              activeIndex === index
                ? 'text-primary-blue-2 bg-white'
                : 'border-b-[0.5px] border-gray-300'
            }`}
          >
            <h2
              onClick={() => toggleAnswer(index)}
              className={`font-secondary w-full text-left text-lg md:text-lg font-normal py-3 px-3 block flex justify-between items-center focus:outline-none hover:cursor-pointer ${
                activeIndex === index ? 'text-primary-blue-2' : 'text-grey-600'
              }`}
            >
              {faq.question}
              <span className="text-2xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </h2>
            <div
              className={`overflow-hidden transition-[max-height] w-full duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="bg-white px-4 py-3 text-primary-grey text-sm md:text-base mt-3 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
