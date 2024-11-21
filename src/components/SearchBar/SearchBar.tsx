import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  reset: () => void;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ reset, setQuery }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const query = (
      form.elements.namedItem("search") as HTMLInputElement
    ).value.trim();

    if (!query) {
      toast.error("Enter the query text", {
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
    } else {
      reset();
      setQuery(query);
      form.reset();
    }
  };

  return (
    <>
      <Toaster />

      <header className={styles.header}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.btn} type="submit">
            Search &nbsp; <CiSearch />
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
