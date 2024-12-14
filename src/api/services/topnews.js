import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getTopNews = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.news.index);
    return data;
  } catch (error) {
    console.error("Error fetching news tabs:", error);
  }
};
