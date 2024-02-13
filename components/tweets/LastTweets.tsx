import Tweet from "./Tweet";
import { useState } from "react";

export default function LastTweets() {
  const [tweetData, setTweetData] = useState([]);

  return (
    <div>
      <Tweet />
      <Tweet />
    </div>
  );
}
