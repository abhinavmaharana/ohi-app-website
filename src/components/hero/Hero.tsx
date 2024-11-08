import HeroImg from '@/assets/heroimg.png'
// import { Button } from "../ui/button";
import PlatformDialog from '../shared/platform-dialog/PlatformDialog';

export default function Hero() {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#1C1C1C] leading-10">Network of Fame,Connection & Money in the Real World</h1>
        <p className="text-lg md:text-xl text-[#989898]"> A social network with Authentic Connects, Fame, Stardom in Cafes, lounges, airports.</p>
        
       {/* <Button className="bg-[#006241] hover:bg-[#006241] px-[35px] py-[28px] rounded-[14px] mt-4 md:mt-0">
       <a href="https://chat.ohiapp.com/chatroom">Join O hi </a>
        </Button> */}
      <PlatformDialog />
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end ">
        <img 
          src={HeroImg} 
          alt="Hero Image" 
          className="w-[500px] h-auto"
        />
      </div>
    </div>
  );
}
