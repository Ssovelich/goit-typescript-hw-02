import axios from "axios";

const KEY = "u-4kCEKZBHrp0ViPZRQZXN4H3120vJtygRMosP2OGRo";

axios.defaults.baseURL = "https://api.unsplash.com/";

const config = {
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${KEY}`,
  },
  params: {
    orientation: "landscape",
    content_filter: "low",
    per_page: 16,
  },
};

export const fetchImages = async (query, page) => {
  //додається в обєкт params нові параметри (query, page) зі значеннями
  config.params.query = query;
  config.params.page = page;
  const response = await axios.get("search/photos", config);
  return response.data;
};

export default fetchImages;
