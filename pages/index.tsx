import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import LastTweets from "@/components/tweets/LastTweets";
import NewTweet from "@/components/tweets/NewTweet";
import { useState } from "react";

export default function Home() {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const router = useRouter();

  useEffect(() => {
    if (!user.token) {
      router.push("/login");
    }
  }, [user.token]);

  const [tweetData, setTweetData] = useState<any[]>([]);

  const addNewTweet = (newTweet: any) => {
    setTweetData([...tweetData, newTweet]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/tweets/getTweets")
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.tweets);
      });
  }, []);

  console.log("tweetData is", tweetData);

  const date = "a few seconds ago";

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
      <div
        className="w-8/12 flex flex-col p-10 gap-16 overflow-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <NewTweet addNewTweet={addNewTweet} date={date} />
        <LastTweets tweetData={tweetData} date={date} />
      </div>
      <div className="w-2/6 border-l border-slate-700"></div>
    </div>
  );
}
