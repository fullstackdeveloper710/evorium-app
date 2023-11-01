import moment from "moment/moment";

export const dateFormater = (value) => {
  const dateFormat = "DD/MM/YYYY";
  return moment(value).format(dateFormat);
};

export const getMinutes = (milliSeconds) => {
  let minutes = Math.floor(+milliSeconds / 60000);
  let seconds = ((milliSeconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
