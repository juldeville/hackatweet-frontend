import Tweet from "./Tweet";

type LastTweetsProps = {
  tweetData: any[];
  date: string;
};

export default function LastTweets({ tweetData, date }: LastTweetsProps) {
  const tweets = tweetData.map((data, index) => {
    return (
      <Tweet
        key={index}
        firstname={data.user.firstname}
        username={data.user.username}
        tweetContent={data.tweetContent}
        date={date}
        tag={data.tag}
      />
    );
  });

  return <div>{tweets}</div>;
}
