import axios from "axios";

const api = axios.create({
  baseURL: "https://shaw-backend-test.herokuapp.com/api/",
  timeout: 60000
});

export default api;
