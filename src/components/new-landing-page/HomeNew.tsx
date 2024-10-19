import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HomeNew() {
    const videos = [
        "/videos/cafe.mp4",
        "/videos/ready.mp4",
        "/videos/cafe.mp4",
        "/videos/ready.mp4",
    ];

    const [currentVideo, setCurrentVideo] = useState(0);
    const [isSliding, setIsSliding] = useState(false); // Track sliding animation
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]); // Define type for video refs

    const handleVideoEnd = () => {
        handleNext(); // Move to the next video when the current one ends
    };

    const handlePrev = () => {
        setIsSliding(true); // Start sliding animation
        setTimeout(() => {
            const prevVideo = (currentVideo - 1 + videos.length) % videos.length; // Get previous video
            setCurrentVideo(prevVideo); // Switch to previous video
            setIsSliding(false); // Reset sliding animation

            // Play the previous video if it's not null
            const prevVideoElement = videoRefs.current[prevVideo];
            if (prevVideoElement) {
                prevVideoElement.play();
            }
        }, 500); // Adjust duration for sliding animation
    };

    const handleNext = () => {
        setIsSliding(true); // Start sliding animation
        setTimeout(() => {
            const nextVideo = (currentVideo + 1) % videos.length; // Get next video
            setCurrentVideo(nextVideo); // Switch to next video
            setIsSliding(false); // Reset sliding animation

            // Play the next video if it's not null
            const nextVideoElement = videoRefs.current[nextVideo];
            if (nextVideoElement) {
                nextVideoElement.play();
            }
        }, 500); // Adjust duration for sliding animation
    };

    useEffect(() => {
        // Play the current video when it becomes the main video
        const currentVideoElement = videoRefs.current[currentVideo];
        if (currentVideoElement) {
            currentVideoElement.play();
        }

        // Ensure the next video is paused
        const nextVideo = (currentVideo + 1) % videos.length;
        const nextVideoElement = videoRefs.current[nextVideo];
        if (nextVideoElement) {
            nextVideoElement.pause();
        }
    }, [currentVideo]);

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12 lg:py-12">
            {/* Text Section */}
            <div className="px-[20px] lg:px-[50px] text-center lg:text-left mt-[20px] space-y-6 lg:w-[900px]">
                <p className="text-3xl lg:text-5xl text-white leading-normal lg:leading-normal poppins-bold">
                    Build your network, gain real-life fame, and go viral at every{" "}
                    <span className="bg-[#EECA07] rounded-full px-12 shadow-xl">social hotspot</span>
                </p>
                <p className="text-white poppins-medium leading-normal">
                    A social network with Authentic Connects, Fame, Stardom in <br />
                    Cafes, Lounges, Airports.
                </p>
                <Button className="bg-white rounded-full text-[#3BA0FF] poppins-bold lg:w-[206.28px]">JOIN O HI</Button>
            </div>

            {/* Video Carousel Section */}
            <div className="relative w-full lg:w-1/2 h-[503px] flex justify-center items-center overflow-hidden lg:pr-36">
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-10 z-30 p-4 bg-white text-[#3BA0FF] rounded-full shadow-lg"
                >
                    &#8249; {/* Left arrow symbol */}
                </button>

                {/* Current Video */}
                <div
                    className={`absolute w-[304px] h-[503px] rounded-[8px] transition-transform duration-500 z-20 ${
                        isSliding ? "-translate-x-full" : "translate-x-0"
                    }`}
                >
                    <video
                        ref={(el) => (videoRefs.current[currentVideo] = el)} // Assign ref to current video
                        key={videos[currentVideo]} // Re-render when currentVideo changes
                        src={videos[currentVideo]}
                        autoPlay
                        controls
                        onEnded={handleVideoEnd} // Trigger when video ends
                        className="w-full h-full rounded-[8px] object-cover"
                    />
                </div>

                {/* Next Video (Visible in the background) */}
                <div
                    className={`absolute w-[304px] h-[503px] rounded-[8px] transition-transform duration-500 z-10 opacity-60 ${
                        isSliding ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{ transform: 'translateX(50%)' }} // Positioning next video slightly visible
                >
                    <video
                        ref={(el) => (videoRefs.current[(currentVideo + 1) % videos.length] = el)} // Assign ref to next video
                        key={videos[(currentVideo + 1) % videos.length]} // Re-render when currentVideo changes
                        src={videos[(currentVideo + 1) % videos.length]}
                        controls
                        className="w-full h-full rounded-[8px] object-cover"
                    />
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-12 z-30 p-3 bg-white text-[#3BA0FF] rounded-full shadow-lg"
                >
                    &#8250; {/* Right arrow symbol */}
                </button>
            </div>
        </div>
    );
}
