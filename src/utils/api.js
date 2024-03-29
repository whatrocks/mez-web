import axiosClient from "../middleware/axiosClient";

export const get = ({ path }) => {
  return axiosClient
    .get(path)
    .then(res => res.data)
    .catch(err => {
      return Promise.reject(err.resopnse);
    });
};

export const post = ({ path, body }) => {
  const json = JSON.stringify(body);
  return axiosClient
    .post(path, json)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return Promise.reject(err.response);
    });
};
