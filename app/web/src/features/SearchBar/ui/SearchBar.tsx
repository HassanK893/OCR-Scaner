import { Icon28SearchOutline } from "@vkontakte/icons";
import styles from "./SearchBar.module.css";
import { useContext, useEffect, useState } from "react";
import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";
import { useDebounce } from "../../../shared/lib/useDebounce";
function SearchBar() {
  const { currentFilters, setCurrentFilters } = useContext(HistoryContext);
  const [currentString, setCurrentString] = useState("");
  const debouncingValue = useDebounce(currentString, 300);
  
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCurrentString(value);
  }

  useEffect(() => {
    if (debouncingValue === currentFilters.matchedTextFilter) return;
    setCurrentFilters((prev) => ({
      ...prev,
      matchedTextFilter: debouncingValue as string,
    }));
  }, [debouncingValue]);

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <Icon28SearchOutline className={styles.searchIcon} />
        <input
          type="text"
          value={currentString}
          placeholder="Поиск документов..."
          className={styles.searchInput}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
export default SearchBar;
