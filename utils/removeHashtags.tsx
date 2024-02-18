export function removeHashtags(tweetText: string) {
  const hashtagRegex = /#\w+/g;
  return tweetText.replace(hashtagRegex, "").trim();
}
