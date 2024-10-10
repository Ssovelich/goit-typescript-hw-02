import styles from "./ImageCard.module.css";

const ImageCard = ({ urls: { small, regular }, altDescription, openModal }) => {
  return (
    <>
      <li className={styles.imageItem}>
        <img
          className={styles.image}
          src={small}
          alt={altDescription}
          onClick={() => openModal(altDescription, regular)}
        ></img>
      </li>
    </>
  );
};

export default ImageCard;