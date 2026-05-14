import axios from "axios";

const API = axios.create({
baseURL: "http://Future-bank-bachend-env.eba-3cnmzday.ap-south-1.elasticbeanstalk.com",
});

export default API;
