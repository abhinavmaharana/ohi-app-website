import { BadgeIcon } from 'lucide-react'
import HandImg from '@/assets/hand1.png'

export default function Renowned() {
  return (
    <div className='background-renowned'>
                <div className='mt-[50px] lg:mt-0'>
                <div className="px-[20px] lg:px-[50px] text-center pt-[20px] lg:pt-[30px]">
                    <h1 className="items-center text-[32px]  lg:text-[48px] text-[#3BA0FF]  lg:mt-[250px] lg:mb-[20px] leading-normal  poppins-bold">Renowned Celebrities we've partnered with</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='px-[20px] lg:px-[80px]'>
                        <ul className=''>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#EECA07" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#FF8800" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#3BA0FF" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#EECA07" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#FF8800" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4'>
                                    <BadgeIcon fill="#3BA0FF" strokeWidth={0} className='w-[120px] h-[120px]'/>
                                    <h1 className='lg:text-[20px] text-[#3BA0FF] poppins-medium'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=' lg:flex flex-col -mb-[20px]  lg:-mt-[50px]'>
                        {/* Image */}
                        <div>
                            <img src={HandImg}/>
                        </div>
                        <div className='lg:w-[634px] ml-[34px]  rounded-l-[29.87px] bg-[#EECA07] text-white'>
                            <p className='lg:text-[24px] pl-6 pr-20 py-6 poppins-medium'>
                            Make your presence count at every 'Social Hotspot' you visit. Let the people get notified about your Influential Presence at every Café/Airport you visit with the 'Real Life Fame Tick'!
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
  )
}
