import Image from "next/image";
import SignUpModal from "@/components/section/SignUpModal";
import SignInModal from "@/components/section/SignInModal";
import Button from "@/components/commons/Button";
import { useState } from "react";

export default function Login() {
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState<boolean>(false);
  const [signInModalIsOpen, setSignInModalIsOpen] = useState<boolean>(false);

  const openSignUpModal = () => {
    setSignUpModalIsOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalIsOpen(false);
  };

  const openSignInModal = () => {
    setSignInModalIsOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalIsOpen(false);
  };

  return (
    <div
      style={{ backgroundImage: 'url("/images/hackatweet.png")' }}
      className="h-lvh flex justify-end"
    >
      <div className="bg-slate-900 w-2/3 flex flex-col justify-start items p-10 ">
        <div className=" w-2/6">
          <Image
            src="/images/twitterWhite.png"
            width={64}
            height={64}
            alt="X logo"
            className="rotate-180"
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <div className="text-white text-6xl font-extrabold leading-normal my-14 w-2/6">
            See what's happening
          </div>
          <div className="text-white text-3xl font-extrabold">
            Join Hackatweet today.
          </div>
          <div>
            <Button label="Sign up" type={1} onClick={openSignUpModal} />
          </div>
          <div className="text-white font-bold">Already have an account?</div>
          <div>
            <Button label="Sign in" type={2} onClick={openSignInModal} />
          </div>
        </div>
        <SignUpModal
          modalIsOpen={signUpModalIsOpen}
          closeModal={closeSignUpModal}
        />
        <SignInModal
          modalIsOpen={signInModalIsOpen}
          closeModal={closeSignInModal}
        />
      </div>
    </div>
  );
}
