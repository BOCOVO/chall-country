import React, { useState } from "react";
import ChevronDownOutline from "react-ionicons/lib/ChevronDownOutline";

interface OptionProps {
  option: string;
  active: boolean;
  onClick: () => void;
}

interface SelectProps {
  options: string[];
  active: string | null;
  onChange: (option: string) => void;
}

const Option = ({ option, active, onClick }: OptionProps) => {
  return (
    <li
      onClick={onClick}
      aria-selected={active}
      role="option"
      className=" hover:bg-very-light-gray dark:hover:bg-very-dark-blue-dark px-7 cursor-pointer p-2"
    >
      {option}
    </li>
  );
};

const Select = ({ onChange, options, active }: SelectProps) => {
  const [expended, setExpended] = useState(false);

  const openDropdown = () => {
    if (!expended) setExpended(true);
  };

  const closeDropdown = () => {
    if (expended) setExpended(false);
  };

  return (
    <div
      onMouseLeave={closeDropdown}
      onMouseEnter={openDropdown}
      className=" relative select w-52 max-w-full"
    >
      <button
        onClick={openDropdown}
        className="rounded-md shadow-lg py-3 px-7 w-full text-left bg-white dark:bg-dark-blue flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={expended}
        aria-label="Filter by region"
      >
        <span>{active || "Filter by Region"}</span>
        <span className="arrow">
          <ChevronDownOutline />
        </span>
      </button>
      <span aria-hidden className=" mt-2 block "></span>
      <ul
        className="select-list py-1 rounded-md hidden overflow-hidden shadow-lg bg-white dark:bg-dark-blue absolute top-full w-full"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-label="Choose a region"
      >
        {options.map((option, key) => (
          <Option
            key={key}
            onClick={() => onChange(option)}
            active={option === active}
            option={option}
          />
        ))}
      </ul>
    </div>
  );
};

export default Select;
