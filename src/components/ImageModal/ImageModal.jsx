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
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

Modal.setAppElement("#root");

const ImageModal = (regular, altDescription, modalIsOpen, closeModal) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <img className={styles.image} src={regular} alt={altDescription}></img>
      </Modal>
    </div>
  );
};

export default ImageModal;
