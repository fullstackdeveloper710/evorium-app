import moment from "moment/moment";

export const totalItems = 12;
export const itemsPerPage = 4;

export const dateFormater = (value) => {
  const dateFormat = "DD/MM/YYYY";
  return moment(value).format(dateFormat);
};

export const getMinutes = (milliSeconds) => {
  let minutes = Math.floor(+milliSeconds / 60000);
  let seconds = ((milliSeconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
