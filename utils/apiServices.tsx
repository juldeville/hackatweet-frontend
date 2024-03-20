// apiServices.ts

const fetchTweets = (token: string): Promise<any[]> => {
  return fetch(`http://localhost:3000/tweets/getTweets/${token}`)
    .then((response) => response.json())
    .then((data) => data.tweets);
};

const fetchTrends = (): Promise<any[]> => {
  return fetch("http://localhost:3000/tags/getTags")
    .then((response) => response.json())
    .then((data) => data.result);
};

export { fetchTweets, fetchTrends };
