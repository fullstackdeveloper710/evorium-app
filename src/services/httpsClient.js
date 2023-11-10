import axiosInstance from "./axiosInstance";
const httpsClient = async (config, authToken) => {
  const configration = {
    ...config,
    baseURL: "http://api.evorium.xyz/",
    timeout: 1000 * 60 * 10,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
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
