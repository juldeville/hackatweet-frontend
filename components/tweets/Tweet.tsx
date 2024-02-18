import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export type TweetProps = {
  firstname: string;
  username: string;
  date: string;
  tweetContent: string;
  tag?: string;
};

export default function Tweet({
  firstname,
  username,
  date,
  tweetContent,
  tag,
}: TweetProps) {
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
        <div className=" text-slate-400"> {date}</div>
      </div>
      <div className="flex gap-2">
        <div>{tweetContent}</div>
        <div className="font-bold text-xBlue-200">{tag}</div>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
        <div>1</div>
      </div>
    </div>
  );
}
