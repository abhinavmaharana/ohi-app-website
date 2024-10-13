/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentViralImg from '@/assets/contentviral.png'
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
import { Button } from "@/components/ui/button";

export default function ContentViral() {
    const formSchema = z.object({
        name: z.string().nonempty("Name is required"),
        instagramlink: z.string().nonempty("Instagram link is required"),
        // email: z.string().nonempty("Email is required"),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            instagramlink: "",
            // email: ""
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);  // Handle form submission here if needed
    };

    const handleContactClick = () => {
        const values = form.getValues();
        const name = values.name.trim();
        const instagramLink = values.instagramlink.trim();

        if (!name || !instagramLink) {
            // Optionally, you can set error messages in the form
            if (!name) {
                form.setError("name", {
                    type: "manual",
                    message: "Name is required",
                });
            }
            if (!instagramLink) {
                form.setError("instagramlink", {
                    type: "manual",
                    message: "Instagram link is required",
                });
            }
            return;
        }

        const subject = encodeURIComponent("Contact Request: Viral Content");
        const body = encodeURIComponent(`Hello Team,\n\nMy name is ${name}.\nHere is my Instagram post link: ${instagramLink}\n\nBest regards,\n${name}`);
        
        window.location.href = `mailto:contact@ohiapp.com?subject=${subject}&body=${body}`;
    };
  return (
    <div className='background-content'>
                <div className='flex flex-col lg:flex-row justify-between items-center px-[20px] lg:px-[80px]'>
                    <div className='mt-[50px] lg:mt-[100px] space-y-4 lg:ml-0'>
                        <h1 className='text-[32px] lg:text-[52px] text-[#3BA0FF] leading-normal  poppins-bold lg:w-[455px]'>How about boosting your content through famous people and effective content ideas!?</h1>
                        <p className='text-[18px] lg:text-[24px] text-[#3BA0FF] poppins-medium lg:w-[490.29px]'>
                            Reach out to us at &apos;contact@ohiapp.com&apos; & share the link to your Instagram post.
                        </p>
                    </div>
                    <div className='mt-[100px]'>
                        <img src={ContentViralImg} className=''/>
                    </div>
                </div>
                <div className='mt-[50px]'>
                    {/* Form */}
                    <div className='px-[20px] lg:px-[80px]'>
                        <Form {...form}>
                            <form
                                className="space-y-6"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="text-[24px] text-[#3BA0FF] poppins-medium">
                                                    <div className="flex">
                                                        <h1>Name</h1>
                                                        <Asterisk className="text-red-500 w-4 -mt-2"/>
                                                    </div>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                                        placeholder="Enter your name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="instagramlink"
                                        render={({ field }) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="text-[24px] text-[#3BA0FF] poppins-medium">
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
                                <div className='flex items-center justify-center'>
                                    <Button
                                        type="button"
                                        className="font-medium bg-[#3BA0FF] cursor-pointer rounded-full mb-[30px]"
                                        onClick={handleContactClick}
                                    >
                                        Know More
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>   
                </div>
            </div>
  )
}
