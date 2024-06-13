import Image from "next/image";
import { TilesIcon, HomeIcon, LockIcon, ProfileIcon } from "./SVGs/svgs";

export default function NavBar() {
  return (
    <nav className="sticky w-72 h-screen top-0 left-0 flex flex-col gap-6 items-center pt-10">
      <Image
        src="/uc_pritzker_logo.svg"
        alt="UChicago Pritzker School Logo"
        width={165}
        height={63}
      />
      <div className="flex flex-col gap-4 text-slate-400 font-medium">
        <div className="grid grid-cols-3 place-items-start">
          <HomeIcon />
          <p className="col-span-2">Dashboard</p>
        </div>
        <div className="grid grid-cols-3 place-items-start">
          <TilesIcon />
          <p className="col-span-2">Past Cases</p>
        </div>
        <div className="grid grid-cols-3 place-items-start">
          <ProfileIcon />
          <p className="col-span-2">Profile</p>
        </div>
        <div className="grid grid-cols-3 place-items-start">
          <LockIcon />
          <p className="col-span-2">Sign Out</p>
        </div>
      </div>
    </nav>

  )
}
