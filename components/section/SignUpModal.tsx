import Modal from "react-modal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToStore, UserState } from "@/reducers/user";
import { useRouter } from "next/router";
import Button from "../commons/Button";
import { apiUrl } from "@/utils/apiServices";

type SignUpModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
};

export default function SignUpModal({
  modalIsOpen,
  closeModal,
}: SignUpModalProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.value);

  useEffect(() => {
    if (user.token) {
      router.push("/");
    }
  }, [router]);

  const customStyles: Modal.Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#151d26",
      color: "white",
      width: "33.3%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      border: "none",
      paddingTop: "30px",
      paddingBottom: "30px",
    },
  };

  const [firstname, setFirstname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const resetFields = () => {
    setFirstname("");
    setUsername("");
    setPassword("");
  };

  const handleSubmitSignUp = () => {
    fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: firstname,
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          console.log("user token is:", data.token);
          console.log("user info is:", data.user);
          dispatch(
            addUserToStore({
              firstname: firstname,
              username: username,
              token: data.token,
            })
          );
          resetFields();
          closeModal();
        } else if (data.result === false) {
          console.log("error is:", data.error);
        } else {
          console.log("unkown error");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="flex justify-end  w-full">
          <FontAwesomeIcon
            icon={faX}
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <Image
          src="/images/twitterWhite.png"
          width={64}
          height={64}
          alt="twtiterLogo"
          className="rotate-180"
        />
        <div className="text-xl font-extrabold	mt-3">
          Create your Hackatweet account
        </div>
        <div className="flex flex-col gap-3 w-2/6">
          <input
            type="text"
            placeholder="Firstname"
            className="py-2 border border-slate-300 bg-xBlue px-2 text-sm font-thin"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-slate-300 bg-xBlue px-2 text-sm font-thin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-slate-300 bg-xBlue px-2 text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3 w-2/6">
          <Button onClick={handleSubmitSignUp} type={3} label="Sign up" />
        </div>
      </Modal>
    </div>
  );
}
