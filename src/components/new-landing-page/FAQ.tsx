import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

// Define the props for the Modal component
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
  }
  
  // Modal component with TypeScript typing
  function Modal({ isOpen, onClose, title, description }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-[658px]">
          <button
            className="absolute top-2 right-4 text-[#EECA07]"
            onClick={onClose}
          >
            <X />
          </button>
          <h2 className="text-[#3BA0FF] text-[22px] mb-4 poppins-bold">{title}</h2>
          <p className="text-[#3BA0FF] text-[22px] poppins-medium">{description}</p>
        </div>
      </div>
    );
}
  
export default function FAQ() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>("");
    const [modalDescription, setModalDescription] = useState<string>("");

    // Function to handle the click and show the modal
  const handleAccordionClick = (title: string, description: string) => {
    setModalTitle(title);
    setModalDescription(description);
    setModalOpen(true);
  };
  return (
    <div className="">
        {/* Modal is displayed when isModalOpen is true */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        description={modalDescription}
      />
        {/* <div className="bg-[#EECA07] text-[#3BA0FF] text-[48px] flex items-center justify-evenly poppins-bold">
            <p>FAQ</p>
            <p>FAQ</p>
            <p>FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
            <p className="hidden lg:block">FAQ</p>
        </div> */}

        <div className="bg-[#EECA07] text-[#3BA0FF] text-[48px] flex items-center justify-evenly poppins-bold">
        <Marquee speed={100} direction="right">
          <div className="mr-12 flex items-center space-x-12">
            {["FAQ", "FAQ", "FAQ"].map((x) => {
              return (
                <div key={`1${x}`} className="flex items-center space-x-10">
                  
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["FAQ", "FAQ", "FAQ"].map((x) => {
              return (
                <div key={`2${x}`} className="flex items-center space-x-10">
                 
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["FAQ", "FAQ", "FAQ"].map((x) => {
              return (
                <div key={`3${x}`} className="flex items-center space-x-10">
                  
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
          </div>
        </Marquee>
        </div>
        
        <div className="px-[20px] lg:px-[50px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <Accordion type="single" collapsible className="lg:w-[690px] lg:mb-[50px] lg:mt-[50px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How can I find Caferoom?","To join the Café Room while at a café, just tap on the cafe name to check in. If you're elsewhere, you can request access to enter and connect with your friends.")}>How can I find Caferoom?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How can I invite someone to Caferoom?", "Inviting friends to the Café Chatroom is now easier than ever! Simply tap 'Invite Requests' in the chatroom, choose which friends to invite, or approve requests from those asking to join the Café Room.")}>How can I invite someone to Caferoom?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("Is my number accessible to others in the network?","O Hi ensures your phone number and personal information are never shared publicly. Your details are always kept private and secure with us.")}>Is my number accessible to others in the network?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("Do I have to pay for using O hi or it is free?","O Hi is free—forever! There are absolutely no fees or hidden charges to use our app, now or in the future.")}>Do I have to pay for using O hi or it is free?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How do I get my content viral?", "Share your content on O Hi and watch it get reshared by real people at cafes and airports, helping you reach a wider audience and go viral !")}>How do I get my content viral?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How to make money on O Hi?", "Unlock earning potential on O Hi by resharing posts, checking in at cafes, and inviting your friends and followers to join the fun !")} >How to make money on Ohi?</AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion type="single" collapsible className="lg:w-[690px] lg:mb-[50px] lg:mt-[50px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("How do i get featured on the leaderboard?","Team up with your friends! The group with the most check-ins will claim the top spot on the leaderboard.")}>How do i get featured on the leaderboard?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("Can people see my location when i'm not using the app?", "Your location remains private when you're not using the app, unless you've granted O Hi permission to always access it.")}>Can people see my location when i'm not using the app?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How do i redeem the coupons?", "Simply tap the coins icon in the top-right corner, select 'Redeem Now,' and unlock rewards from popular brands like Myntra, Blinkit, Tata Cliq, and many more!")} >How do i redeem the coupons?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("How do i post stories on O hi?","Check in at any café or airport, tap the 'Wall' icon in the bottom left, and start sharing your fun stories and pictures!")}>How do i post stories on O hi?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("What is the fame tick?", "The Fame Tick is your badge of fame. Simply nominate yourself within the app, and you'll gain instant recognition in cafés and airports. You'll also be featured on the fame wall of every cafe and airport you visit, leaving a lasting impression wherever you go!")}>What is the fame tick?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How do i network with people through O hi?", "When you check in at a café, others can see you're there, making it easy to connect with like-minded people and expand your network. It's a great way to build connections and grow your social circle effortlessly!")} >How do i network with people through O hi?</AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}
