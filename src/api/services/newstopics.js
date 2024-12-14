import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getNewsTopics = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.news.topics);
    return data;
  } catch (error) {
    console.error("Error fetching news tabs:", error);
  }
};
