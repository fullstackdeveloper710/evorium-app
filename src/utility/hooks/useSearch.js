import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useSearch = ({ action, getDataAction, currentPage, itemsPerPage }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search === "") {
      const data = {
        adminAuthtoken,
        values: {
          pageNo: currentPage,
          pageSize: itemsPerPage,
        },
      };
      dispatch(getDataAction(data));
    }
  }, [search]);

  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  //Methods
  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onSearchHandler = () => {
    const data = {
      adminAuthtoken,
      query: {
        search,
      },
    };
    dispatch(action(data));
  };

  return {
    search,
    onSearchChange,
    onSearchHandler,
  };
};

export default useSearch;
