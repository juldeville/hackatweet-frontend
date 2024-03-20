import Modal from "react-modal";
import { User } from "./SideBar";
import { useDispatch } from "react-redux";
import { removeUserFromStore } from "@/reducers/user";

type LogOutModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  user: User;
};

export default function LogOutModal({
  modalIsOpen,
  closeModal,
  user,
}: LogOutModalProps) {
  const dispatch = useDispatch();
  const customStyles: Modal.Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent",
    },
    content: {
      top: "85%",
      left: "15%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1b222d",
      color: "white",
      width: "15%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
      border: "none",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  };
  const handleLogout = () => {
    dispatch(removeUserFromStore());
    closeModal();
  };
  return (
    <div className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div
          className="font-semibold cursor-pointer hover:bg-slate-800 w-full text-center  transition-colors duration-300 py-2"
          onClick={handleLogout}
        >
          Log out @{user.username}
        </div>
      </Modal>
    </div>
  );
}
