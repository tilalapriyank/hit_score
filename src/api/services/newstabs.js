import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getNewsTabs = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.news.categories);
    return data;
  } catch (error) {
    console.error("Error fetching news tabs:", error);
  }
};
