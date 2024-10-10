import styles from "./App.module.css";
import { fetchImages } from "../services/api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [modalAlt, setModalAlt] = useState(null);
  const [modalLikes, setModalLikes] = useState(null);
  const [modalName, setModalName] = useState(null);

  useEffect(() => {
    async function fetchImagesHandler() {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        const results = data.results;
        if (results.length === 0) {
          toast.error("Sorry there is no results with this query", {
            position: "top-right",
            style: {
              border: "1px solid #f52121",
              padding: "16px",
              color: "#f52121",
              height: "20px",
              fontWeight: "500",
              backgroundColor: "#fc9c9c",
            },
          });
          return;
        }
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

  const openModal = (url, alt, likes, name) => {
    setModalIsOpen(true);
    setModalImage(url);
    setModalAlt(alt);
    setModalLikes(likes);
    setModalName(name);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <SearchBar setQuery={setQuery} reset={onSubmitReset} />

      {error ? (
        <ErrorMessage />
      ) : (
        images?.length > 0 && (
          <>
            <ImageGallery images={images} openModal={openModal} />
            {!loadMore && <LoadMoreBtn loadMoreImages={pagePlus} />}
          </>
        )
      )}

      {loading && <Loader />}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        modalImage={modalImage}
        modalAlt={modalAlt}
        modalLikes={modalLikes}
        modalName={modalName}
      />
    </div>
  );
};

export default App;
