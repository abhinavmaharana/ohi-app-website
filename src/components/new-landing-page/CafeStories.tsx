import MobileImg from '@/assets/ohiapp2.gif'

export default function CafeStories() {
  return (
    <div id="atcafe-new" className='mt-[50px] px-[20px] lg:px-[50px]'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className="space-y-20">
                <div className="-rotate-[8deg]">
                    <span className="bg-[#EECA07] rounded-full px-12 shadow-xl text-[32px] lg:text-[52px]  text-white poppins-bold">Cafe Stories</span>
                </div>
                <div className='lg:w-[627px]'>
                    <h1 className="text-[32px] lg:text-[52px]  text-white poppins-bold">Time to flaunt your HAPPENING Life</h1>
                    <p className="text-[18px] lg:text-[24px] text-white poppins-medium ">Snap those pics and share the fun on the O hi app with your friends!</p>
                </div>
            </div>
            <div className=''>
                <img src={MobileImg} className='h-[612.9px]'/>
            </div>
        </div>
    </div>
  )
}
