import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/fir-dbd47/us-central1/api",
  baseURL: "https://us-central1-fir-dbd47.cloudfunctions.net/api",
});

export default instance;
