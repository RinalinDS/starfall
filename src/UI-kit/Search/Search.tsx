import {ChangeEvent, FC, useState} from 'react';
import styles from './Search.module.css'
import SVG from './magnifying-glass.svg'

type Props = {
  onClick: (value: string) => void
}
export const Search: FC<Props> = ({onClick}) => {
  const [search, setSearch] = useState<string>('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }
  const handleSearch = () => {
    onClick(search)
  }

  return (
    <div className={styles.searchContainer}>
      <input type="search" className={styles.searchInput} placeholder="Search" onChange={onChangeHandler} value={search}/>
      <button className={styles.searchButton} onClick={handleSearch}>
        <img src={SVG} alt="logo"/>
      </button>
    </div>
  );
};

