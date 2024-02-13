import Tweet from "./Tweet";
import { useEffect, useState } from "react";

export default function LastTweets() {
  const [tweetData, setTweetData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/3001/tweets/n");
  }, []);

  return (
    <div>
      <Tweet />
      <Tweet />
    </div>
  );
}
