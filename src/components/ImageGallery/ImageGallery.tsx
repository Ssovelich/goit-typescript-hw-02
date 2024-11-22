import { Image } from "../../services/types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (imageData: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={styles.imageList}>
      {images !== null &&
        images.map((image) => {
          return (
            <ImageCard key={image.id} data={image} openModal={openModal} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
