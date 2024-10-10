import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMoreImages }) => {
  return (
    <>
      <button className={styles.btn} onClick={loadMoreImages}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
