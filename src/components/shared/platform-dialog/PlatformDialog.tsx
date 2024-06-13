import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import AndroidIcon from '@/assets/5a902dbf7f96951c82922875.png';
import IOSIcon from '@/assets/pngwing.com.png';

export default function PlatformDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#006241] hover:bg-[#006241] px-[35px] py-[28px] rounded-[14px] mt-4 md:mt-0">
          Join O hi
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <div className="flex flex-col lg:flex-row items-center">
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.crowdbook&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                  <img className="h-[130px]" src={AndroidIcon} alt="Android" />
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/in/app/o-hi-app/id1537778945" target="_blank" rel="noopener noreferrer">
                  <img className="h-[120px] w-[350px]" src={IOSIcon} alt="iOS" />
                </a>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
