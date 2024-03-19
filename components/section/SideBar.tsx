import Image from "next/image";
import { useState } from "react";
import LogOutModal from "./logOutModal";

export type User = {
  firstname: string;
  username: string;
  token: string;
};

type SideBarProps = {
  user: User;
};

export default function SideBar({ user }: SideBarProps) {
  const [logOutModalIsOpen, setLogOutModalIsOpen] = useState(false);
  const openLogOutModal = () => {
    setLogOutModalIsOpen(true);
  };
  const closeLogOutModal = () => {
    setLogOutModalIsOpen(false);
  };
  return (
    <div className="w-2/6 border-r border-slate-700 flex flex-col justify-between py-10 items-center">
      <Image
        src="/images/twitterWhite.png"
        width={64}
        height={64}
        alt="X logo"
        className="rotate-180 cursor-pointer"
      />
      <LogOutModal
        modalIsOpen={logOutModalIsOpen}
        user={user}
        closeModal={closeLogOutModal}
      />
      <div className="pl-20">
        <div
          className="flex gap-5 items-center px-10 rounded-full py-2 hover:bg-customDark transition-colors duration-300 cursor-pointer"
          onClick={openLogOutModal}
        >
          <Image
            src="/images/egg.jpeg"
            width={48}
            height={48}
            alt="X egg"
            className="rounded-full"
          />
          <div>
            <div className="font-semibold">{user.firstname}</div>
            <div className="text-slate-400">@{user.username}</div>
          </div>
          <div className="font-bold">...</div>
        </div>
      </div>
    </div>
  );
}
