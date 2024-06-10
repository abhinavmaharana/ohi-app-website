import EarnMoney from "@/components/earn-money/EarnMoney";
import FAQ from "@/components/faq/FAQ";
import Hero from "@/components/hero/Hero";
import MakeMoney from "@/components/make-money/MakeMoney";
// import PeopleWithFameTick from "@/components/people-with-fame-tick/PeopleWithFameTick";
import FormGradientCard from "@/components/shared/card/FormGradientCard";
import GradientCard from "@/components/shared/card/GradientCard";

export default function HomePage() {
  return (
    <div className="space-y-[100px]">
      <Hero />
      {/* <LeftEffect /> */}
      <GradientCard title="When At a Cafe ?" subTitle="Checkin to digital room" description="Check-in to Caferooms of Cafes, Lounges, Airports you visit and enter the world of authentic conversations with people in same Cafe,lounge, airport”" />
      <EarnMoney />
      {/* <LeftEffect /> */}
      <MakeMoney />
      {/* <PeopleWithFameTick /> */}
      <FormGradientCard />
      <FAQ />
    </div>
  )
}