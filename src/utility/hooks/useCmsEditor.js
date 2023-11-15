import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCmsEditor = ({ action,values }) => {
  const [content, setContent] = useState(values.value);
  const dispatch = useDispatch();
  const { adminAuthtoken } = useSelector((state) => state.adAuth);

  const handleChange = (value) => {
    setContent(value);
  };

  return {
    content,
    handleChange,
  };
};

export default useCmsEditor;
