import LogoIcon from "@/assets/logo.png";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setQuestion(e.target.value);
  };

  const mailtoLink = `mailto:contact@ohiapp.com?subject=Question&body=${encodeURIComponent(question)}`;

  return (
    <div className="flex flex-col items-center p-20 bg-zinc-950 max-md:px-5">
      <div className="flex gap-5 justify-between items-start mt-6 w-full max-w-[1248px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={LogoIcon}
          className="shrink-0 aspect-[1.69] w-[91px]"
        />
        <div className="flex gap-[57px] justify-between self-stretch text-base text-start text-zinc-400 lg:-ml-[250px]">
          <div className="flex flex-col">
            <div className="font-medium text-white leading-[150%]">
              Quick Link
            </div>
            <div className="mt-4"><a href="#about">About Us</a></div>
            <div className="mt-4"><a href="mailto:contact@ohiapp.com">Contact Us</a></div>
          </div>
          <div className="flex flex-col self-start">
            <div className="font-medium text-white leading-[150%]">
              Legal Stuff
            </div>
            <div className="mt-4"><Link to="/termcondition">Terms & Condition</Link></div>
            <div className="mt-4"><Link to="/privacy">Privacy Policy</Link></div>
            <div className="mt-4"><a href="#faq">FAQs</a></div>
          </div>
        </div>
        <div className="hidden md:flex flex-col mt-1">
          <div className="text-base font-medium leading-6 text-center text-white">
            Reachout for any Questions
          </div>
          <textarea
            value={question}
            onChange={handleQuestionChange}
            placeholder="any questions ..."
            className="mt-4 p-2 w-full h-12 text-lg rounded-[14px] border border-black border-solid bg-zinc-100 text-zinc-500 max-md:px-5"
          />
          <a href={mailtoLink}>
            <div className="justify-center self-start px-4 py-2.5 mt-4 text-sm leading-7 text-center text-white rounded-2xl border border-white border-solid cursor-pointer">
              Contact Now
            </div>
          </a>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-28 w-full max-w-[1248px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="text-base text-center text-zinc-400 max-md:max-w-full">
          All Right Reserved.Copyright © 2022, All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://twitter.com/SocialOhi">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb4500130dc70e29214a98bbeca0e7b59fb48b499735e32b952073d07e64cae?"
              className="shrink-0 w-6 aspect-square"
            />
          </a>
          <a href="https://www.linkedin.com/company/o-hi-social-network/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1edc6080d9b69b0bc0c76df1a3c919db5f6ad96ad6a2c1d2629cd9c7bc5a5089?"
            className="shrink-0 w-6 aspect-square"
          />
          </a>
          <a href="https://www.instagram.com/ohi_app?igsh=M2htNjJ3NWMyYnBt">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92ad9f985b5e2c73e2b6105cdba9898ce65b18ddbcc260ab18acfb11b5f1fac8?"
              className="shrink-0 w-6 aspect-square"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
