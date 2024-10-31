import MobileImg from '@/assets/makemoney1.png'
import { Button } from '../ui/button'
import { useState } from 'react';
import GooglePlayButton from '@/assets/Google Play.png'
import AppStoreButton from '@/assets/App Store.png'

export default function MakeMoney() {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
      setShowPopup(!showPopup);
    };
  return (
    <div id="make-new" className="background-money mt-[50px] px-[20px] lg:px-[50px]">
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='mt-[10px] mb-[20px]'>
                <img src={MobileImg} className='h-[612.9px]' />
            </div>
            <div className="space-y-5 mt-[10px] mb-[20px] text-center lg:text-left">
                <div className="">
                    <span className="bg-[#EECA07] rounded-full px-12 shadow-xl text-[32px] lg:text-[52px]  text-white poppins-bold">Make Money</span>
                </div>
                <div className='lg:w-[880px] space-y-4'>
                    <h1 className="lg:text-[52px] text-[#3BA0FF] poppins-bold">Earn effortlessly by sharing content with your friends on Instagram! Simply reshare and start making money in no time
                    </h1>
                    <Button className="bg-[#3BA0FF] rounded-full text-white poppins-bold lg:w-[279px] lg:h-[64px]" onClick={handlePopup}>Learn More</Button>
                </div>
            </div>
        </div>
        {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg text-center">
            <p className="mb-6 poppins-medium">Download the app to know more</p>
            <div className="flex items-center justify-between space-x-5 mt-3 mb-5">
              <img src={GooglePlayButton} />
              <img src={AppStoreButton} />
            </div>
            <Button className="bg-[#3BA0FF] rounded-full text-white" onClick={handlePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
