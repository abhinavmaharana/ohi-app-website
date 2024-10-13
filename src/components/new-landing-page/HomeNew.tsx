import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomeNew() {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="px-[20px] lg:px-[50px] text-center mt-[50px] space-y-6">
          <p className="items-center text-3xl  lg:text-7xl lg:w-[1015px] text-white leading-normal lg:leading-normal  poppins-bold">
            Build your network, gain real-life fame, and go viral at every <span className="bg-[#EECA07] rounded-full px-12 shadow-xl">social hotspot</span>
          </p>
          <p className="items-center text-white poppins-medium leading-normal">A social network with Authentic Connects, Fame, Stardom in <br/> Cafes, lounges, airports.</p>
          <Button className="bg-white rounded-full text-[#3BA0FF] poppins-bold">JOIN O HI</Button>
        </div>
        <div className="mt-[50px] lg:-mb-[350px]">
            <div className="flex justify-center space-x-6">
                <Card className="w-[304px] h-[543px] rounded-[8px]">
                    <video></video>
                </Card>
                <Card className="hidden lg:block w-[304px] h-[543px] rounded-[8px]">
                    <video></video>
                </Card>
                <Card className="hidden lg:block w-[304px] h-[543px] rounded-[8px]">
                    <video></video>
                </Card>
                <Card className="hidden lg:block w-[304px] h-[543px] rounded-[8px]">
                    <video></video>
                </Card>
            </div>
        </div>
      </div>
    );
  }
  