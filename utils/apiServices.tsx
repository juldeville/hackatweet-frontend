const fetchTweets = (token: string): Promise<any[]> => {
  return fetch(
    `https://hackatweet-backend-liard.vercel.app/tweets/getTweets/${token}`
  )
    .then((response) => response.json())
    .then((data) => data.tweets);
};

const fetchTrends = (): Promise<any[]> => {
  return fetch("https://hackatweet-backend-liard.vercel.app/tags/getTags")
    .then((response) => response.json())
    .then((data) => data.result);
};

const fetchTweetsByTag = (token: string, tag: any): Promise<any[]> => {
  console.log("token is", token);

  return fetch(
    `https://hackatweet-backend-liard.vercel.app/tweets/getTweetsByTag/${token}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tagName: tag,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data fucking is", data);
      return data.modifiedTweets;
    });
};

export { fetchTweets, fetchTrends, fetchTweetsByTag };
