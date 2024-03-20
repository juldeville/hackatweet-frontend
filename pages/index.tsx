import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import LastTweets from "@/components/tweets/LastTweets";
import NewTweet from "@/components/tweets/NewTweet";
import { useState } from "react";
import Trends from "@/components/section/Trends";
import SideBar from "@/components/section/SideBar";
import { fetchTweets, fetchTrends } from "@/utils/apiServices";
export default function Home() {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const router = useRouter();

  const [tweetData, setTweetData] = useState<any[]>([]);
  const [trendsData, setTrendsData] = useState<any[]>([]);
  const [refreshTweets, setRefreshTweets] = useState<boolean>(false);

  useEffect(() => {
    if (!user.token) {
      router.push("/login");
    }
  }, [user.token]);

  useEffect(() => {
    fetchTweets(user.token).then((data) => setTweetData(data));
    fetchTrends().then((data) => setTrendsData(data));
  }, []);

  useEffect(() => {
    if (refreshTweets) {
      fetchTweets(user.token).then((data) => setTweetData(data));
      fetchTrends().then((data) => setTrendsData(data));
      setRefreshTweets(false);
    }
  }, [refreshTweets]);

  const addNewTweet = () => {
    setRefreshTweets(true); //
  };

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
        <LastTweets
          tweetData={tweetData}
          token={user.token}
          refreshTweets={addNewTweet}
        />
      </div>
      <div className="w-2/6 border-l border-slate-700">
        <Trends trends={trendsData} />
      </div>
    </div>
  );
}
