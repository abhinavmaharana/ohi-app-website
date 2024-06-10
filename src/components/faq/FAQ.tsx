import { useState } from 'react';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      question: 'How can I find Caferoom?',
      answer: 'If you are in a cafe checkin to the caferoom by tapping on the card. if not in a cafe you can request to enter the caferoom where your friends are.'
    },
    {
      question: 'How can I invite someone to Caferoom?',
      answer: 'Now inviting your friends to Cafe chatroom is super cool. Tap on invite requests in chatroom & chose your friends to caferoom or let someone in who has asked for an invite in caferoom.'
    },
    {
      question: 'How can i ask for Caferoom invites?',
      answer: 'If you are not in a Cafe you can ask for caferoom invites from your friends who have posted a pic/video in feeds and to add on You can access as many caferooms as you want from our popular live caferooms.'
    },
    {
      question: 'Is my number accessible to others in the network?',
      answer: 'O hi never shares anyone’s phone number or personal details publicly. Your personal details are safe & sound with us.'
    },
    {
      question: 'How do I start a conversation with someone?',
      answer: 'You can start chatting once you are connected.'
    },
    {
      question: 'Do I have to pay for using O hi or it is free?',
      answer: 'O hi is Free! Free! Free! and will always be. There is no fee or amount we charge to use our app.'
    },
    {
      question: 'Do I have to pay for using O hi or it is free?',
      answer: 'O hi is Free! Free! Free! and will always be. There is no fee or amount we charge to use our app.'
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-[#1C1C1C] leading-[3.25rem]">
            FAQ
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {accordions.map((accordion, index) => (
            <div
              key={index}
              className={`accordion bg-white border-2 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                openAccordion === index ? 'bg-[#016241]/15 border-[#016241] border-dashed' : 'border-[#D4D2E3]'
              }`}
              id={`heading-${index}`}
            >
              <button
                className={`accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 ${
                  openAccordion === index ? 'font-medium text-indigo-600' : ''
                }`}
                aria-controls={`collapse-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                <h5 className="text-[#1C1C1C]">{accordion.question}</h5>
                <svg
                  className={`w-6 h-6 text-[#1C1C1C] transition duration-500 ${
                    openAccordion === index ? 'hidden' : 'block'
                  } group-hover:text-[#1C1C1C] origin-center`}
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
                  className={`w-6 h-6 text-[#1C1C1C] transition duration-500 ${
                    openAccordion === index ? 'block' : 'hidden'
                  } group-hover:text-[#1C1C1C]`}
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
                className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                  openAccordion === index ? 'max-h-96' : 'max-h-0'
                }`}
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
