import Button from "../commons/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import { extractAndSendHashtags } from "@/utils/extractAndSendHashtags";
import { apiUrl } from "@/utils/apiServices";
type NewTweetProps = {
  addNewTweet: () => void;
};

export default function NewTweet({ addNewTweet }: NewTweetProps) {
  const user = useSelector((state: { user: UserState }) => state.user.value);
  const [tweetContent, setTweetContent] = useState("");

  let tag: any = extractAndSendHashtags(tweetContent)[0];
  const handleTweet = () => {
    let requestBody: any = {
      firstname: user.firstname,
      username: user.username,
      tweetContent: tweetContent,
      token: user.token,
    };
    if (tag.length > 0) {
      requestBody.tag = tag;
    }

    fetch(`${apiUrl}tweets/newTweet`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then(() => {
        addNewTweet();
        setTweetContent("");
      });
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="px-6">
        <div className="text-2xl font-semibold">Home</div>
      </div>
      <div className="flex justify-center ">
        <div className="w-3/4">
          <input
            type="text"
            placeholder="What's Up?"
            className="bg-inherit border-b w-full py-4 focus:outline-none "
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
          />
        </div>
      </div>
      <div className="flex bg-slate justify-center ">
        <div className="w-3/4 flex justify-end items-center gap-6">
          <div>{tweetContent.length}/280</div>
          <Button label="Tweet" onClick={handleTweet} type={4} />
        </div>
      </div>
    </div>
  );
}
