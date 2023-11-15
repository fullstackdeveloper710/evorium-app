import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCmsEditor = ({ action }) => {
  const [content, setContent] = useState("");
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
