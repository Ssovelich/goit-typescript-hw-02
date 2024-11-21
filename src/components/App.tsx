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

import { Api, Image, ModalProps } from "../services/types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");
  const [modalLikes, setModalLikes] = useState<number>(0);
  const [modalName, setModalName] = useState<string>("");

  useEffect(() => {
    async function fetchImagesHandler() {
      try {
        setLoading(true);
        const data: Api = await fetchImages(query, page);
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
        setLoadMore(page >= data.total_pages);
        setImages((prevState) => [...prevState, ...results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        //Приховуємо лоадер
        setLoading(false);
      }
    }
    if (query) {
      fetchImagesHandler();
    }
  }, [query, page]);
  //прокрутка вниз на висоту сторінки після натискання loadMore
  useEffect(() => {
    if (images?.length > 16) {
      window.scrollBy({
        //innerHeight висота области просмотра окна браузера
        top: window.innerHeight,
        //smooth плавна прокрутка
        behavior: "smooth",
      });
    }
  }, [images]);

  const onSubmitReset = () => {
    setQuery("");
    setImages([]);
  };
  //при натисканні loadMore додаємо в стан page до попереднього значеня(prevState) +1
  const pagePlus = () => {
    setPage((prevState) => prevState + 1);
  };

  const openModal = ({
    urls: { regular: url },
    alt_description: alt,
    likes,
    user: { name },
  }: Image) => {
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
