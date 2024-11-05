import HandImg from '@/assets/hand1.png'
import Badge1 from '@/assets/badge1.png'
import Badge2 from '@/assets/cafestar.png'
import Badge3 from '@/assets/badge3.png'
import Badge4 from '@/assets/badge4.png'
import Badge5 from '@/assets/badge5.png'
import Badge6 from '@/assets/badge6.png'
import Badge7 from '@/assets/badge7.png'


export default function Renowned() {
  return (
    <div id="earn-new" className='background-renowned'>
                <div className='mt-[50px] lg:mt-0'>
                <div className="px-[20px] lg:px-[50px] text-center pt-[20px] lg:pt-[30px]">
                    <h1 className="items-center text-[32px]  lg:text-[48px] text-[#3BA0FF]  lg:mt-[250px] lg:mb-[20px] leading-normal  poppins-bold">Saga of FAME: Feel the thrill of being recognized wherever you go!</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='px-[20px] lg:px-[50px]'>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 items-center lg:mt-[50px] lg:gap-x-48 xl:gap-4'>
                            <li>
                                <div className='flex items-center lg:w-[300px] xl:w-auto'>
                                    <img src={Badge1} className='w-[140px] h-[140px]' alt="" />
                                    {/* <BadgeIcon fill="#EECA07" strokeWidth={0} className='w-[120px] h-[120px]'/> */}
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Globe Trotter: Café and airport lovers who travel across the globe. </h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge2} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Cafe star: Love hanging out at your favourite café? You've earned your Café Star Badge!</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge3} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>VIP: If you've made your mark in the real world, you're a VIP in our eyes!</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge4} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Real life hero(Army)</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge5} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Real life hero (Dr.)</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge6} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Luxury Guru: Premium cafés are their go-to spots for a taste of luxury in every sip!</h1>
                                </div>
                            </li>
                            <li>
                                <div className='flex items-center space-x-4 lg:w-[300px] xl:w-auto'>
                                <img src={Badge7} className='w-[140px] h-[140px]' alt="" />
                                    <h1 className='text-[16px] 2xl:text-[20px] text-[#3BA0FF] poppins-medium'>Influencer: Whether you’re a lifestyle, tech, or comedy influencer, you deserve this badge!</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=' lg:flex flex-col'>
                        {/* Image */}
                        <div>
                            <img src={HandImg} className='lg:h-[500px] lg:ml-56'/>
                        </div>
                        <div className='lg:w-[634px] ml-[34px] lg:mb-[50px]  rounded-l-[29.87px] bg-[#EECA07] text-white'>
                            <p className=' lg:text-[20px] pl-6 pr-20 py-6 poppins-medium'>
                            Make your presence count at every 'Social Hotspot' you visit. Let the people get notified about your Influential Presence at every Café/Airport you visit with the 'Real Life Fame Tick'!
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
  )
}
