import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getMatchCommentary = async (id) => {
  try {
    const data = await apiFetch(ENDPOINTS.matchCommemtary(id));
    return data;
  } catch (error) {
    console.error("Error fetching commentary:", error);
  }
};
