import { useState } from 'react';
import { Button } from '@/components/ui/button';
import LaptopImg from '@/assets/laptop.png';
import GooglePlayButton from '@/assets/Google Play.png'
import AppStoreButton from '@/assets/App Store.png'

export default function Leaderboard() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id="" className='mt-[50px] lg:mt-0'>
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
              Build your squad and chase one goal—earning rewards with your friends check-in score! Compete for the top spot as teams with the highest scores secure a place on our leaderboard and win exciting prizes
              </p>
              <Button className="bg-white rounded-full text-[#3BA0FF] poppins-bold" onClick={handlePopup}>
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        //   <div className="bg-white p-6 rounded-lg max-w-lg text-center">
        //     <p className="mb-6 poppins-medium">Build your squad and chase one goal—earning rewards with your check-in score! Compete for the top spot as teams with the highest scores secure a place on our leaderboard and win exciting prizes.</p>
        //     <Button className="bg-[#3BA0FF] rounded-full text-white" onClick={handlePopup}>
        //       Close
        //     </Button>
        //   </div>
        // </div>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg text-center shadow-lg">
            <p className="mb-6 poppins-medium">Download the app to know more</p>
            <div className="flex items-center justify-between space-x-5 mt-3 mb-5">
              <a href="https://play.google.com/store/apps/details?id=com.crowdbook&pcampaignid=web_share" target="_blank">
                <img src={GooglePlayButton} />
              </a>
              <a href="https://apps.apple.com/in/app/o-hi-app/id1537778945" target="_blank" rel="noopener noreferrer">
                <img src={AppStoreButton} />
              </a>
            </div>
            <Button className="bg-[#3BA0FF] rounded-full text-white" onClick={handlePopup}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
