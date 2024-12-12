import axios from "axios";
import { postApiConfig } from "../APIEndPoints/postApiConfig";
import getHeaders from "../Headers/getHeader";

const postApi = async(endpoint, payload, params="", setStateData) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  try {
    const config = {
      method: postApiConfig[endpoint].method,
      headers: await getHeaders(["access-token", "typeApplication"]),
      url: `${BASE_URL}${postApiConfig[endpoint].url}`,
      data: payload,
      params: params,
    };
    const response = await axios(config);
    setStateData(response.data);
    return response.data;
  } catch (error) {
    console.error("API call failed:", error);
    setStateData(error);
    return error;
  }
}

export default postApi;