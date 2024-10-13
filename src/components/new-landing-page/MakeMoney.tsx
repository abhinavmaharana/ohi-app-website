import MobileImg from '@/assets/mobile2.png'
import { Button } from '../ui/button'

export default function MakeMoney() {
  return (
    <div className="background-money mt-[50px] px-[20px] lg:px-[50px]">
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='mt-[10px] mb-[20px]'>
                <img src={MobileImg} className='h-[612.9px]' />
            </div>
            <div className="space-y-5 mt-[10px] mb-[20px] text-center lg:text-left">
                <div className="">
                    <span className="bg-[#EECA07] rounded-full px-12 shadow-xl text-[32px] lg:text-[52px]  text-white poppins-bold">Make Money</span>
                </div>
                <div className='lg:w-[880px] space-y-4'>
                    <h1 className="lg:text-[52px] text-[#3BA0FF] poppins-bold">Daily coffee doses can fuel passive income, boost networking make every 
                        second count!
                    </h1>
                    <Button className="bg-[#3BA0FF] rounded-full text-white poppins-bold lg:w-[279px] lg:h-[64px]">Learn More</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
