import axiosClient from "../middleware/axiosClient";

export const get = ({ path }) => {
  return axiosClient
    .get(path)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const post = ({ path, body }) => {
  return axiosClient
    .post(path, body)
    .then(res => res.data)
    .catch(err => err);
};
