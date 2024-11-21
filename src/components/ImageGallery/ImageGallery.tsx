import { Image, ModalProps } from "../../services/types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  openModal: (imageData: ModalProps) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={styles.imageList}>
      {images !== null &&
        images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              urls={image.urls}
              altDescription={image.alt_description}
              likes={image.likes}
              user={image.user}
              openModal={openModal}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
