import React from "react";
import styles from "./CustomSelect.module.css";
import type { ICustomSelect } from "../model/types";

const CustomSelect = React.forwardRef<HTMLDivElement, ICustomSelect>(
  ({ options, clickAction, isOpen, setIsOpen, selectedOption }, ref) => {
    return (
      <div
        className={`${styles.customSelectWrapper} ${isOpen ? styles.active : ""}`}
        ref={ref}
      >
        <div className={styles.customSelect} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.selectedValue}>{selectedOption.label}</span>
          <span className={styles.arrow}></span>
        </div>
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li
              key={index + 1}
              className={`${styles.option} ${
                selectedOption.value === option.value ? styles.activeOption : ""
              }`}
              onClick={() => clickAction(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    );
  },
);

export default CustomSelect;
