import axiosClient from "../middleware/axiosClient";

export const get = path => {
  return axiosClient
    .get(path)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
