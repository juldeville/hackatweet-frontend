export function extractAndSendHashtags(tweetText: string) {
  const hashtagRegex = /#(\w+)/g;

  let hashtags: any = tweetText.match(hashtagRegex);

  if (hashtags) {
    return hashtags;
  } else {
    return [""];
  }
}
