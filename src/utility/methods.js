import moment from "moment/moment";

export const dateFormater = (value) => {
  const dateFormat = "DD/MM/YYYY";
  return moment(value).format(dateFormat);
};
