import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LaptopImg from '@/assets/laptop.png';

export default function Leaderboard() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='mt-[50px] lg:mt-0'>
      <div className=''>
        <div className='px-[20px] lg:mt-[50px]'>
          <div className='flex flex-col lg:flex-row items-center text-center lg:text-left'>
            <div className='mb-[50px]'>
              <img src={LaptopImg} alt="Laptop" />
            </div>
            <div className='space-y-5 mb-[32px] lg:mb-0'>
              <h1 className='text-[32px] lg:text-[52px] text-white leading-normal poppins-bold'>
                Leaderboard
              </h1>
              <p className='text-white lg:text-[24px] poppins-medium lg:w-[490.29px]'>
                Ready to find out whose life is really the most happening? No, seriously—this is your chance to prove it.
              </p>
              <Button className="bg-white rounded-full text-[#3BA0FF] poppins-bold" onClick={handlePopup}>
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg text-center">
            <p className="mb-6 poppins-medium">Build your squad and chase one goal—earning rewards with your check-in score! Compete for the top spot as teams with the highest scores secure a place on our leaderboard and win exciting prizes.</p>
            <Button className="bg-[#3BA0FF] rounded-full text-white" onClick={handlePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
