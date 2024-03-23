import { UserState } from "@/reducers/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tweet from "@/components/tweets/Tweet";
import { fetchTweetsByTag, fetchTrends } from "@/utils/apiServices";
import SideBar from "@/components/section/SideBar";
import LastTweets from "@/components/tweets/LastTweets";
import Trends from "@/components/section/Trends";

export default function Tag() {
  const router = useRouter();
  const { tag } = router.query;

  const user = useSelector((state: { user: UserState }) => state.user.value);

  const [tweetData, setTweetData] = useState<any[]>([]);
  const [trendsData, setTrendsData] = useState<any[]>([]);
  const [refreshTweets, setRefreshTweets] = useState<boolean>(false);

  const addNewTweet = () => {
    setRefreshTweets(true); //
  };

  useEffect(() => {
    fetchTweetsByTag(user.token, tag).then((data) => setTweetData(data));
    fetchTrends().then((data) => setTrendsData(data));
  }, [tag]);

  useEffect(() => {
    if (refreshTweets) {
      fetchTweetsByTag(user.token, tag).then((data) => setTweetData(data));
      fetchTrends().then((data) => setTrendsData(data));
      setRefreshTweets(false);
    }
  }, [refreshTweets]);

  console.log("tweetData tag is ", tweetData);

  return (
    <div className="bg-xBlue text-white h-lvh flex">
      <SideBar user={user} />
      <div
        className="w-8/12 flex flex-col p-10 gap-16 overflow-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="px-6">
          <div className="text-2xl font-semibold">{tag}</div>
        </div>
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
