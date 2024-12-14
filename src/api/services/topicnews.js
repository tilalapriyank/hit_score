import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getNewsByTopic = async (topicId) => {
  try {
    const data = await apiFetch(ENDPOINTS.news.topicDetails(topicId));
    return data;
  } catch (error) {
    console.error("Error fetching news content:", error);
    return [];
  }
};
