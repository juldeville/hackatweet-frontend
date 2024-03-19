import Modal from "react-modal";
import { User } from "./SideBar";

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
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="font-bold">Log out @{user.username}</div>
      </Modal>
    </div>
  );
}
