import { Image, ModalProps } from "../../services/types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  data: Image;
  openModal: (imageData: ModalProps) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
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
