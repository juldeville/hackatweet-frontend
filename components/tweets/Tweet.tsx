import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Tweet() {
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
          <span className="font-bold text-white">John</span> @JohnCena
        </div>
        <div className=" text-slate-400"> a few seconds</div>
      </div>
      <div className="flex gap-2">
        <div>YOU CAN'T SEE ME ! 😎</div>
        <div className="font-bold text-xBlue-200">#cenation</div>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
        <div>1</div>
      </div>
    </div>
  );
}
