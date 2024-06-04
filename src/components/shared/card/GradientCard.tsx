import { Card } from "@/components/ui/card";
import HeroImg from '@/assets/cafe.png';

type Props = {
    title: string,
    subTitle: string,
    description: string,
}

export default function GradientCard({ title, subTitle, description }: Props) {
    console.log(title, subTitle, description);
    return (
        <Card className="bg-[#016241] p-5 border-none rounded-[58px] mt-[75px]">
            <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={HeroImg}
                        alt="Hero Image"
                        className="w-[500px] h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
                    <h1 className="text-3xl md:text-[48px] font-bold mb-2 text-white">{title}</h1>
                    <h2 className="text-xl md:text-3xl mb-2 text-white">{subTitle}</h2>
                    <p className="text-lg md:text-xl text-[#FFFFFF]">{description}</p>
                    <div className="flex items-center space-x-[29px]">
                        <h1 className="text-[34px] md:text-[64px] font-bold mb-2 text-white">50k +</h1>
                        <p className="text-white md:text-[24px] w-[200px]">Locations People Checked in</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
