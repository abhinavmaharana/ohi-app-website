import { useState } from 'react';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      question: 'How can I reset my password?',
      answer: 'To reset your password, click the "Forgot Password" link on the login page, enter your email address, and follow the instructions sent to your email to reset your password.'
    },
    {
      question: 'How do I create an account?',
      answer: 'To create an account, find the "Sign up" or "Create account" button, fill out the registration form with your personal information, and click "Create account" or "Sign up." Verify your email address if needed, and then log in to start using the platform.'
    },
    {
      question: 'Where can I find my order history?',
      answer: 'You can find your order history by logging into your account and navigating to the "Order History" section under your profile. There, you will see a list of all your past orders and their statuses.'
    },
    {
        question: 'Where can I find my order history?',
        answer: 'You can find your order history by logging into your account and navigating to the "Order History" section under your profile. There, you will see a list of all your past orders and their statuses.'
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-[#1C1C1C] leading-[3.25rem]">
            Common Queries answered here
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {accordions.map((accordion, index) => (
            <div
              key={index}
              className={`accordion bg-white border-2 border-[#D4D2E3] p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${openAccordion === index ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600' : ''}`}
              id={`heading-${index}`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 ${openAccordion === index ? 'accordion-active:font-medium accordion-active:text-indigo-600' : ''}`}
                aria-controls={`collapse-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <h5 className="text-[#1C1C1C]">{accordion.question}</h5>
                <svg
                  className={`w-6 h-6 text-[#1C1C1C] transition duration-500 ${openAccordion === index ? 'hidden' : 'block'} group-hover:text-[#1C1C1C] origin-center`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 text-[#1C1C1C] transition duration-500 ${openAccordion === index ? 'block' : 'hidden'} group-hover:text-[#1C1C1C]`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`collapse-${index}`}
                className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${openAccordion === index ? 'max-h-96' : 'max-h-0'}`}
                aria-labelledby={`heading-${index}`}
                style={{ maxHeight: openAccordion === index ? '250px' : '0' }}
              >
                <p className="text-base text-[#1C1C1C] font-normal leading-6 mt-6">
                  {accordion.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
