import { Card } from "@/components/ui/card";
import HeroImg from '@/assets/IMG_4834.jpg';
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Asterisk } from "lucide-react";

export default function FormGradientCard() {
    const formSchema = z.object({
        instagramlink: z.string().nonempty("Instagram link is required"),
        // email: z.string().nonempty("Email is required"),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            instagramlink: "",
            // email: ""
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);  // Handle form submission here if needed
    };

    const handleContactClick = () => {
        const values = form.getValues();
        const instagramLink = encodeURIComponent(values.instagramlink);
        // const email = encodeURIComponent(values.email);

        const subject = encodeURIComponent("Contact Request: Viral Content");
        const body = encodeURIComponent(`Instagram Post Link: ${instagramLink}`);
        
        window.location.href = `mailto:contact@ohiapp.com?subject=${subject}&body=${body}`;
    };

    return (
        <Card id="content" className="bg-[#016241] p-5 border-none rounded-[20px] xl:rounded-[58px] mt-[75px]">
            <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={HeroImg}
                        alt="Hero Image"
                        className="w-[500px] h-auto rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
                    <h1 className="text-3xl md:text-[45px] font-bold mb-2 text-white mt-5 md:mt-0">Interested in making your content viral?</h1>
                    <p className="text-white">Write to us a mail at contact@ohiapp.com share your Instagram post link After verifying your identity we’ll contact you.</p>
                    <div>
                        <Form {...form}>
                            <form
                                className="space-y-6"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="instagramlink"
                                        render={({ field }) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#FFFFFF]">
                                                    <div className="flex">
                                                        <h1>Instagram Post Link</h1>
                                                        <Asterisk className="text-red-500 w-4 -mt-2"/>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                                        placeholder="Enter Instagram Post Link"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* <div>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#FFFFFF]">
                                                    <div className="flex">
                                                        <h1>Email</h1>
                                                        <Asterisk className="text-red-500 w-4 -mt-2"/>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                                        placeholder="Enter Email"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div> */}
                                <div>
                                    <Button
                                        className="w-full font-medium bg-[#0F051D] cursor-pointer"
                                        onClick={handleContactClick}
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>           
                </div>
            </div>
        </Card>
    );
}
