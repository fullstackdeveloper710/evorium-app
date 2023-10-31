import axiosInstance from "./axiosInstance";
const httpsClient = async (config) => {
  return await axiosInstance(config);
};

export default httpsClient;
