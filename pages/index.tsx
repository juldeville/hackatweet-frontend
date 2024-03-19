import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import LastTweets from "@/components/tweets/LastTweets";
import NewTweet from "@/components/tweets/NewTweet";
import { useState } from "react";
import SideBar from "@/components/section/SideBar";

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
    fetch(`http://localhost:3000/tweets/getTweets/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setTweetData(data.tweets);
      });
  }, []);

  console.log("tweetData is", tweetData);

  return (
    <div className="bg-xBlue text-white h-lvh flex">
      <SideBar user={user} />
      <div
        className="w-8/12 flex flex-col p-10 gap-16 overflow-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <NewTweet addNewTweet={addNewTweet} />
        <LastTweets tweetData={tweetData} token={user.token} />
      </div>
      <div className="w-2/6 border-l border-slate-700"></div>
    </div>
  );
}
