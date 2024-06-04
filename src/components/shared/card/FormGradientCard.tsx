import { Card } from "@/components/ui/card";
import HeroImg from '@/assets/makeviral.png';

export default function FormGradientCard() {
  return (
    <Card className="bg-[#016241] p-5 border-none rounded-[58px] mt-[75px]">
            <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={HeroImg}
                        alt="Hero Image"
                        className="w-[500px] h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
                    <h1 className="text-3xl md:text-[45px] font-bold mb-2 text-white">Want to make content viral ?</h1>
                    <div></div>           
                </div>
            </div>
        </Card>
  )
}
