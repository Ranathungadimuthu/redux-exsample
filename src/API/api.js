import axios from "axios";

export const studentDetaislGet = () => {
  return axios.get("http://localhost:3000/student", {
    headers: {
      Accept: "application/json",
    },
  });
};
