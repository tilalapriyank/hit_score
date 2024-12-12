import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getRecentMatches = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.recentMatches);
    return data;
  } catch (error) {
    console.error("Error fetching recent matches:", error);
  }
};
