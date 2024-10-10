import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.imageList}>
      {images !== null &&
        images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              urls={image.urls}
              altDescription={image.alt_description}
              openModal={openModal}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
