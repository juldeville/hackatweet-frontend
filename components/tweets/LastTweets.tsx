import Tweet from "./Tweet";

type LastTweetsProps = {
  tweetData: any[];
  token?: string;
  refreshTweets: () => void;
};

export default function LastTweets({
  tweetData,
  token,
  refreshTweets,
}: LastTweetsProps) {
  const tweets = [...tweetData].reverse().map((data, index) => {
    console.log("data name is", data);
    return (
      <Tweet
        key={index}
        firstname={data.user.firstname}
        username={data.user.username}
        tweetContent={data.tweetContent}
        date={data.date}
        tweetId={data._id}
        token={token}
        likeCount={data.likeCount}
        likes={data.likes}
        liked={data.liked}
        tweetByUser={data.tweetByUser}
        refreshTweets={refreshTweets}
      />
    );
  });

  return <div>{tweets}</div>;
}
