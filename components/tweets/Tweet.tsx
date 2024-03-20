import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { timeAgo } from "@/utils/timeAgo";

export type TweetProps = {
  firstname: string;
  username: string;
  date: string;
  tweetContent: string;
  tag?: string;
  tweetId: string;
  token?: string;
  likeCount?: number;
  likes?: [string];
  liked: boolean;
  tweetByUser: boolean;
  refreshTweets: () => void;
};

export default function Tweet({
  firstname,
  username,
  date,
  tweetContent,
  tag,
  tweetId,
  token,
  likeCount,
  liked,
  tweetByUser,
  refreshTweets,
}: TweetProps) {
  const [likeCounter, setLikeCounter] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (likeCount) {
      setLikeCounter(likeCount);
      setIsLiked(liked);
    }
  }, []);

  const handleLike = () => {
    fetch("http://localhost:3000/tweets/handleLike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweetId: tweetId,
        token: token,
      }),
    })
      .then((response) => response.json())
      .then((data: any) => {
        setLikeCounter(data.likeCount);
        setIsLiked(!isLiked);
      });
  };

  const handleDelete = () => {
    console.log("tweet id is", tweetId);

    fetch("http://localhost:3000/tweets/deleteTweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweetId: tweetId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          refreshTweets();
        } else if (!data.result) {
          console.error(data.error);
        } else {
          console.log("im here");
        }
      });
  };

  let color = isLiked ? "#f91880" : "white";

  return (
    <div className="flex flex-col p-6 gap-6 border-t border-slate-700">
      <div className="flex  gap-4 items-center">
        <Image
          src="/images/egg.jpeg"
          width={48}
          height={48}
          alt="X egg"
          className="rounded-full"
        />
        <div className=" text-slate-400">
          <span className="font-bold text-white">{firstname}</span> @{username}
        </div>
        <div className=" text-slate-400"> {timeAgo(date)}</div>
      </div>
      <div className="flex gap-2">
        <div>{tweetContent}</div>
        <div className="font-bold text-xBlue-200">{tag}</div>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer"
          onClick={handleLike}
          color={color}
        />
        <div style={{ color: color }}>{likeCounter}</div>
        {tweetByUser && (
          <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer"
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
