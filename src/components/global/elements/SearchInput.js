import { SearchIcon } from '@heroicons/react/solid'

import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className="h-5 w-5 text-blue-500"/>
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
