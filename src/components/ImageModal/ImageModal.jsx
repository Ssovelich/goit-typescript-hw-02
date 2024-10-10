import Modal from "react-modal";
import styles from "./ImageModal.module.css";

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

const ImageModal = ({ modalImage, modalAlt, modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <img className={styles.image} src={modalImage} alt={modalAlt}></img>
        <p className={styles.text}>Tegs: {modalAlt}</p>
      </Modal>
    </div>
  );
};

export default ImageModal;
