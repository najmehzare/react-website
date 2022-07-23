import { SearchIcon } from '@heroicons/react/solid'

import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      
      <input className={styles.input} {...rest} />
      <SearchIcon className="h-5 w-5 text-blue-500"/>
    </div>
  );
};

export default SearchInput;
