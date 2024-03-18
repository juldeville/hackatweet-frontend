import Image from "next/image";

type User = {
  firstname: string;
  username: string;
  token: string;
};

type SideBarProps = {
  user: User;
};

export default function SideBar({ user }: SideBarProps) {
  return (
    <div className="w-2/6 border-r border-slate-700 flex flex-col justify-between p-10">
      <Image
        src="/images/twitterWhite.png"
        width={64}
        height={64}
        alt="X logo"
        className="rotate-180"
      />
      <div className="flex gap-4">
        <Image
          src="/images/egg.jpeg"
          width={48}
          height={48}
          alt="X egg"
          className="rounded-full"
        />
        <div>
          <div>{user.firstname}</div>
          <div>@{user.username}</div>
        </div>
      </div>
    </div>
  );
}
