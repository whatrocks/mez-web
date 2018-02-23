import axiosClient from "../middleware/axiosClient";

export const get = (path) => {
  axiosClient
    .get(path)
    .then(res => console.log("res: ", res))
    .catch(err => console.log("err: ", err));
}
