import HeroImg from '@/assets/dummy.png'

type Props = {}

export default function EarnMoney({}: Props) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">Enjoy Fame & Stardom in Cafes, Airports by Earning Real Life Fame Tick</h1>
        <p className="text-lg md:text-xl text-[#B6B4BA]"> Be on the fame wall of Cafes, Airports when you check-in to these places and everyone knows someone influential has walked-in!</p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={HeroImg} 
          alt="Hero Image" 
          className="w-[500px] h-auto"
        />
      </div>
    </div>
  )
}