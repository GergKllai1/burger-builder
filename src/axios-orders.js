import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-7d26e.firebaseio.com/"
});

export default instance;
 