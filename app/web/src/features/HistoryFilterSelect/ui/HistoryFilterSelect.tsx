import { useContext } from "react";
import styles from "./HistoryFilterSelect.module.css";
import CustomSelect from "../../../shared/CustomSelect/ui/CustomSelect";
import type { Option } from "../../../shared/CustomSelect/model/types";
import { useIsOpen } from "../model/useIsOpen";

import HistoryContext from "../../../app/provider/HistoryProvider/ui/HistoryContext";
import { documentCategories } from "../model/constants";

interface IHistoryFilterSelectProps {
  options: Option[];
}
const HistoryFilterSelect = ({ options }: IHistoryFilterSelectProps) => {
  const { isOpen, wrapperRef, setIsOpen } = useIsOpen();
  const {
    isOpen: subIsOpen,
    wrapperRef: subWraperRef,
    setIsOpen: subSetIsOpen,
  } = useIsOpen();
  const { setCurrentFilters, currentFilters } = useContext(HistoryContext);

  const subOptions =
    currentFilters.mainFilter === "all"
      ? []
      : (documentCategories.get(currentFilters.mainFilter) ?? []);

  const selectedMainOption =
    options.find((o) => o.value === currentFilters.mainFilter) ?? options[0];
  const selectedSubOption =
    subOptions.find((o) => o.value === currentFilters.subFilter) ??
    subOptions[0];

  const handleMainClick = (option: Option) => {
    setIsOpen(false);
    setCurrentFilters((prev) => ({
      ...prev,
      mainFilter: option.value,
      subFilter: "all",
    }));
  };

  const handleSubClick = (option: Option) => {
    subSetIsOpen(false);
    setCurrentFilters((prev) => ({ ...prev, subFilter: option.value }));
  };

  return (
    <div className={styles.filterRow}>
      <CustomSelect
        ref={wrapperRef}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        options={options}
        clickAction={handleMainClick}
        selectedOption={selectedMainOption}
      />
      {currentFilters.mainFilter !== "all" && (
        <CustomSelect
          ref={subWraperRef}
          setIsOpen={subSetIsOpen}
          isOpen={subIsOpen}
          options={subOptions}
          clickAction={handleSubClick}
          selectedOption={selectedSubOption}
        />
      )}
    </div>
  );
};

export default HistoryFilterSelect;
