import axiosInstance from "./axiosInstance";
const httpsClient = async (config, authToken) => {
  const configration = {
    ...config,
    baseURL: "http://api.evorium.xyz/",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (authToken) {
    configration.headers = {
      ...configration.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }
  const result = await axiosInstance(configration);
  return result;
};

export default httpsClient;
