import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { X } from "lucide-react";
import { useState } from "react";

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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
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
        <div className="bg-[#EECA07] text-[#3BA0FF] text-[48px] flex items-center justify-evenly poppins-bold">
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
        </div>
        <div className="px-[20px] lg:px-[50px]">
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <Accordion type="single" collapsible className="lg:w-[690px] lg:mb-[50px] lg:mt-[50px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How can I find Caferoom?","If you are in a cafe checkin to the caferoom by tapping on the card. if not in a cafe you can request to enter the caferoom where your friends are.")}>How can I find Caferoom?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How can I invite someone to Caferoom?", "Now inviting your friends to Cafe chatroom is super cool. Tap on invite requests in chatroom & chose your friends to caferoom or let someone in who has asked for an invite in caferoom.")}>How can I invite someone to Caferoom?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("Is my number accessible to others in the network?","O hi never shares anyone’s phone number or personal details publicly. Your personal details are safe & sound with us.")}>Is my number accessible to others in the network?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("Do I have to pay for using O hi or it is free?","O hi is Free! Free! Free! and will always be. There is no fee or amount we charge to use our app.")}>Do I have to pay for using O hi or it is free?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How get my content viral?", "Share your content on Ohi and get reshared by real people at cafes & airports. This will help you to get viral.")}>How get my content viral?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How make money on Ohi", "You can make money on O Hi by resharing posts, simply checking in to cafes, inviting friends and followers to check in.")} >How make money on Ohi?</AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div>
                    <Accordion type="single" collapsible className="lg:w-[690px] lg:mb-[50px] lg:mt-[50px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("How do i get featured on the leaderboard?","O hi is Free! Free! Free! and will always be. There is no fee or amount we charge to use our app.")}>How do i get featured on the leaderboard?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("Can people see my location when i'm not using the app?", "Share your content on Ohi and get reshared by real people at cafes & airports. This will help you to get viral.")}>Can people see my location when i'm not using the app?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How do i redeem the coupons?", "You can make money on O Hi by resharing posts, simply checking in to cafes, inviting friends and followers to check in.")} >How do i redeem the coupons?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={()=>handleAccordionClick("How do i post stories on O hi?","O hi is Free! Free! Free! and will always be. There is no fee or amount we charge to use our app.")}>How do i post stories on O hi?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("What is the fame tick?", "Share your content on Ohi and get reshared by real people at cafes & airports. This will help you to get viral.")}>What is the fame tick?</AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-[12px] lg:text-[24px]" onClick={() => handleAccordionClick("How do i network with people through O hi?", "You can make money on O Hi by resharing posts, simply checking in to cafes, inviting friends and followers to check in.")} >How do i network with people through O hi?</AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}
