import Tweet from "./Tweet";

type LastTweetsProps = {
  tweetData: any[];
  date: string;
  token?: string;
};

export default function LastTweets({ tweetData, token }: LastTweetsProps) {
  const tweets = tweetData.toReversed().map((data, index) => {
    return (
      <Tweet
        key={index}
        firstname={data.user.firstname}
        username={data.user.username}
        tweetContent={data.tweetContent}
        date={data.date}
        tag={data.tag}
        tweetId={data._id}
        token={token}
        likeCount={data.likeCount}
        likes={data.likes}
        liked={data.liked}
      />
    );
  });

  return <div>{tweets}</div>;
}
