import { Card } from "@/components/ui/card";
import HeroImg from '@/assets/cafe.png';
import { motion } from "framer-motion";

type Props = {
    title: string,
    subTitle: string,
    description: string,
}

export default function GradientCard({ title, subTitle, description }: Props) {
    console.log(title, subTitle, description);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
        >
            <Card className="bg-[#016241] p-5 border-none rounded-[20px] xl:rounded-[58px] mt-[75px]">
                <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                        variants={imageVariants}
                    >
                        <img
                            src={HeroImg}
                            alt="Hero Image"
                            className="w-[500px] h-auto"
                        />
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 mb-4 md:mb-0 space-y-5 lg:space-y-[46px] mt-5 md:mt-0"
                        variants={contentVariants}
                    >
                        <h1 className="text-3xl md:text-[48px] font-bold mb-2 text-white">{title}</h1>
                        <h2 className="text-xl md:text-3xl mb-2 text-white">{subTitle}</h2>
                        <p className="text-lg md:text-xl text-[#FFFFFF]">{description}</p>
                        <div className="flex items-center space-x-[29px]">
                            <h1 className="text-[34px] md:text-[64px] font-bold mb-2 text-white">50k+</h1>
                            <p className="text-white md:text-[24px] w-[200px]">Locations People Checked in</p>
                        </div>
                    </motion.div>
                </div>
            </Card>
        </motion.div>
    )
}
