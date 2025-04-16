import { ChangeEvent, memo, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const Search = memo(() => {
  const [search, setSearch] = useState<string>('');

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search IBDb..."
        onChange={onChangeHandler}
        value={search}
        name={'search'}
        className="w-full rounded-l-lg border border-r-0 border-solid border-gray-300 p-2 outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-r-lg border border-l-0 border-solid border-gray-300 bg-white px-3 py-3 pl-4"
      >
        <FaSearch className="h-[1.6rem] w-[3.2rem] fill-blue-700 active:translate-y-0.5" />
      </button>
    </div>
  );
});
