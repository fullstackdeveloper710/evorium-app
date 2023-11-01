import axiosInstance from "./axiosInstance";
const httpsClient = async (config) => {
  console.log(config, "config here");
  const configration = {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your_token_here", // Add your custom headers here
      // Add more headers if needed
    },
  };
  return await axiosInstance(configration);
};

export default httpsClient;
