import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import Button from "@/components/commons/Button";
import LastTweets from "@/components/tweets/LastTweets";
import NewTweet from "@/components/tweets/NewTweet";

export default function Home() {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const router = useRouter();

  useEffect(() => {
    if (!user.token) {
      router.push("/login");
    }
  }, [user.token]);

  return (
    <div className="bg-xBlue text-white h-lvh flex">
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
            <div>John</div>
            <div>@JohnCena</div>
          </div>
        </div>
      </div>
      <div className="w-8/12 flex flex-col p-10 gap-16">
        <NewTweet />
        <LastTweets />
      </div>
      <div className="w-2/6 border-l border-slate-700"></div>
    </div>
  );
}
