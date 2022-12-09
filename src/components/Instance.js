import axios from "axios";

const Instance = axios.create({
  baseURL: "https://afternoon-dawn-41697.herokuapp.com/api/auth/register",
});

export default Instance;
// process.env.REACT_APP_BASE_URL
