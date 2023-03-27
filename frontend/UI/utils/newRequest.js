import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});

// newReqest.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error.response.data.err)
// );

export default newRequest;
