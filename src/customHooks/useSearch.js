import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  //Methods
  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return {
    search,
    onSearchChange,
  };
};

export default useSearch;
