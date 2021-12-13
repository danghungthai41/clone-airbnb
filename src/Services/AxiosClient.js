import axios from "axios";
import qs from "query-string";
const axiosClient = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api/",
  paramsSerializer: (params) => {
    return qs.stringify(params, { skipEmptyString: true, skipNull: true });
  },
});

export default axiosClient;
