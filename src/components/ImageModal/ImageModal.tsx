import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    outline: "none",
  },
};

Modal.setAppElement("#root");

interface Props {
  modalImage: string;
  modalAlt: string;
  modalLikes: number;
  modalName: string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const ImageModal = ({
  modalImage,
  modalAlt,
  modalIsOpen,
  closeModal,
  modalLikes,
  modalName,
}: Props) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <button onClick={closeModal} className={styles.btn}>
          <IoMdClose size={25} />
        </button>
        <img className={styles.image} src={modalImage} alt={modalAlt}></img>
        <div className={styles.wrapText}>
          <p className={styles.text}>Tegs: {modalAlt} </p>
          <p className={styles.text}>Likes: {modalLikes}</p>
          <p className={styles.text}>User name: {modalName} </p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
