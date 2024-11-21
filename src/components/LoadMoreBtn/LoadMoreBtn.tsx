import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMoreImages }) => {
  return (
    <>
      <button className={styles.btn} onClick={loadMoreImages}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreBtn;
