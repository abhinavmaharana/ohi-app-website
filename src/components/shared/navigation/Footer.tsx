import LogoIcon from "@/assets/logo.png";
export default function Footer() {
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
            <div className="mt-4">About Us</div>
            <div className="mt-4">Contact Us</div>
            {/* <div className="mt-4">Privacy Policy</div>
            <div className="mt-4">Terms & Condition</div> */}
            {/* <div className="mt-4">Career</div> */}
          </div>
          <div className="flex flex-col self-start">
            <div className="font-medium text-white leading-[150%]">
              Legal Stuff
            </div>
            <div className="mt-4">Terms & Condition</div>
            <div className="mt-4">Privacy Policy</div>
            <div className="mt-4">FAQs</div>
          </div>
        </div>
        <div className="hidden md:flex flex-col mt-1">
          <div className="text-base font-medium leading-6 text-center text-white">
            Reachout for any Questions
          </div>
          <div className="justify-center items-start px-8 py-3 mt-4 text-lg rounded-[14px] border border-black border-solid bg-zinc-100 text-zinc-500 max-md:px-5">
            Any question ?
          </div>
          <div className="justify-center self-start px-4 py-2.5 mt-4 text-sm leading-7 text-center text-white rounded-2xl border border-white border-solid">
            Contact Now
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-28 w-full max-w-[1248px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="text-base text-center text-zinc-400 max-md:max-w-full">
          All Right Reserved.Copyright © 2022, All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb4500130dc70e29214a98bbeca0e7b59fb48b499735e32b952073d07e64cae?"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1edc6080d9b69b0bc0c76df1a3c919db5f6ad96ad6a2c1d2629cd9c7bc5a5089?"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/92ad9f985b5e2c73e2b6105cdba9898ce65b18ddbcc260ab18acfb11b5f1fac8?"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/394f58384255a16867e35cb281b5b61ce2a9a1a7fa79d40405d46f24bd422e09?"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  )
}
