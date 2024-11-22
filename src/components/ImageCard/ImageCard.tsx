import { Image } from "../../services/types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  data: Image;
  openModal: (imageData: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ data, openModal }) => {
  const {
    urls: { small },
    alt_description: altDescription,
  } = data;
  return (
    <>
      <li className={styles.imageItem}>
        <img
          className={styles.image}
          src={small}
          alt={altDescription}
          onClick={() => openModal(data)}
        ></img>
      </li>
    </>
  );
};

export default ImageCard;
