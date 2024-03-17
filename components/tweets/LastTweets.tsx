import Tweet from "./Tweet";

type LastTweetsProps = {
  tweetData: any[];
  date: string;
  token?: string;
};

export default function LastTweets({
  tweetData,
  date,
  token,
}: LastTweetsProps) {
  console.log("tweetData is", tweetData);

  const tweets = tweetData.map((data, index) => {
    return (
      <Tweet
        key={index}
        firstname={data.user.firstname}
        username={data.user.username}
        tweetContent={data.tweetContent}
        date={date}
        tag={data.tag}
        tweetId={data._id}
        token={token}
        likeCount={data.likeCount}
        likes={data.likes}
      />
    );
  });

  return <div>{tweets}</div>;
}
