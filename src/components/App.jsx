import styles from "./App.module.css";
import { fetchImages } from "../services/api";
import { useEffect, useState } from "react";

import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchImagesHandler() {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        const results = data.results;
        console.log(data.results);
        setLoadMore(page >= data.total_pages);
        setImages((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    if (query) {
      fetchImagesHandler();
    }
  }, [query, page]);

  const onSubmitReset = () => {
    setQuery("");
    setImages([]);
  };

  const pagePlus = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar setQuery={setQuery} reset={onSubmitReset} />

      {error ? (
        <ErrorMessage />
      ) : (
        images.length > 0 && (
          <>
            <ImageGallery images={images} openModal={openModal} />
            {!loadMore && <LoadMoreBtn loadMoreImages={pagePlus} />}
          </>
        )
      )}

      {loading && <Loader />}

      <ImageModal isOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;
