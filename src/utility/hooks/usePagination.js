import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const usePagination = ({ totalItems, itemsPerPage, action }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  //Redux state
  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  //Redux action dispatcher
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    const newPage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(newPage);
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const prevPage = () => {
    goToPage(currentPage - 1);
  };

  const onSelectPage = (selected) => {
    goToPage(selected);
  };

  const setItemsPerPage = (newItemsPerPage) => {
    const newTotalPages = Math.ceil(totalItems / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);
    setCurrentPage(newCurrentPage);
  };

  useEffect(() => {
    const data = {
      adminAuthtoken,
      values: {
        pageNo: currentPage,
        pageSize: 4,
      },
    };
    dispatch(action(data));
  }, [adminAuthtoken, currentPage, dispatch, action]);
  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
    onSelectPage,
  };
};

export default usePagination;
