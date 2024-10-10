import styles from "./ImageCard.module.css";

const ImageCard = ({
  urls: { small, regular },
  likes,
  user: { name },
  altDescription,
  openModal,
}) => {
  return (
    <>
      <li className={styles.imageItem}>
        <img
          className={styles.image}
          src={small}
          alt={altDescription}
          onClick={() => openModal(regular, altDescription, likes, name)}
        ></img>
      </li>
    </>
  );
};

export default ImageCard;
