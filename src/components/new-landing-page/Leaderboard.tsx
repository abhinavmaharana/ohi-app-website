import { Button } from '@/components/ui/button'
import LaptopImg from '@/assets/Group 102.png'

export default function Leaderboard() {
  return (
    <div className='mt-[50px] lg:mt-0'>
                <div className=''>
                    <div className='px-[20px] lg:px-[50px]'>
                        <div className='flex flex-col lg:flex-row items-center text-center lg:text-left'>
                            <div className='mb-[50px]'>
                                <img src={LaptopImg}/>
                            </div>
                            <div className='space-y-5 mb-[32px] lg:mb-0'>
                                <h1 className='text-[32px] lg:text-[52px] text-white leading-normal  poppins-bold'>Leaderboard</h1>
                                <p className='text-white lg:text-[24px] poppins-medium lg:w-[490.29px]'>Ready to find out whose life is really the most happening? No, seriously—this is your chance to prove it.</p>
                                <Button className="bg-white rounded-full text-[#3BA0FF] poppins-bold">Know More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
