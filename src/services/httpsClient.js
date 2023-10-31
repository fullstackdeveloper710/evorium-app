import { hideLoader, showLoader } from "../redux/reducers/common/appSlice";
import store from "../redux/store";
import axiosInstance from "./axiosInstance";

async function httpsClient(loader, Authorization, config, path, data) {
  const configration = {
    ...config,
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 5000,
  };
  try {
    if (loader) {
      store.dispatch(showLoader());
    }
    store.dispatch(hideLoader());
    const response = axiosInstance(configration);
    store.dispatch(hideLoader());
    return response;
  } catch (error) {
    return new Error(error);
  }
}

export default httpsClient;
