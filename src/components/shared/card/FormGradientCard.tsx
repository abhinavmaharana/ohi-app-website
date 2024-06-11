import { Card } from "@/components/ui/card";
import HeroImg from '@/assets/IMG_4834.jpg';
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
import { Button } from "@/components/ui/button";

export default function FormGradientCard() {
    const formSchema = z.object({
        instagramlink: z.string().nonempty("Instagram link is required"),
        email: z.string().nonempty("Email is required"),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            instagramlink: "",
            email: ""
        }
    })

    const onSubmit = () => {

    }
  return (
    <Card className="bg-[#016241] p-5 border-none rounded-[20px] xl:rounded-[58px] mt-[75px]">
            <div className="flex flex-col md:flex-row items-center md:items-center p-4 md:p-8">
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        src={HeroImg}
                        alt="Hero Image"
                        className="w-[500px] h-auto bounce rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/2 mb-4 md:mb-0 space-y-[46px]">
                    <h1 className="text-3xl md:text-[45px] font-bold mb-2 text-white mt-5 md:mt-0">Interested in making your content viral?</h1>
                    <p className="text-white">Write to us a mail at contact@ohiapp.com <br/> After verifying your identity we'll give you the access.</p>
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
                                        render={({}) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#FFFFFF]">
                                                    Instagram Post Link
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                                        placeholder="Enter Instragram Post Link"
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
                                        name="email"
                                        render={({}) => (
                                            <FormItem className="form-area-4">
                                                <FormLabel className="font-avenirRegular text-[16px] font-medium text-[#FFFFFF]">
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="cursor-pointer border-none bg-[#F4F4F4] outline-none"
                                                        placeholder="Enter Email"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                 </div>
                                 <div>
                        <Button
                          type="submit"
                          className="w-full font-medium bg-[#0F051D]"
                        >
                          Get Approval Now
                        </Button>
                      </div>
                            </form>
                        </Form>
                    </div>           
                </div>
            </div>
        </Card>
  )
}
