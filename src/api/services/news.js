import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getNewsByCategory = async (categoryId) => {
  try {
    const data = await apiFetch(ENDPOINTS.news.categoryDetails(categoryId));
    return data;
  } catch (error) {
    console.error("Error fetching news content:", error);
    return [];
  }
};
