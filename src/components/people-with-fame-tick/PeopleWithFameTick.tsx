import UserCard from "../shared/card/UserCard";

export default function PeopleWithFameTick() {
  return (
    <div className="py-20 w-full">
        <h1 className="text-white font-bold text-4xl md:text-5xl text-center">
            People who have Fame Tick
        </h1>
        <div className="grid grid-cols-1 mt-20 gap-y-[24px] lg:gap-y-0  md:grid-cols-4 lg:grid-cols-5 items-center justify-center md:justify-between md:gap-x-[20px]">
            <UserCard username="Rohit" />
            <UserCard username="Rohit" />
            <UserCard username="Rohit" />
            <UserCard username="Rohit" />
            <UserCard username="Rohit" />
        </div>
    </div>
  )
}
