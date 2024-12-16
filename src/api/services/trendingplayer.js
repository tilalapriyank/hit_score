import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getTrendingPlayers = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.playerStats.trending);
    return data;
  } catch (error) {
    console.error("Error fetching trending players:", error);
  }
};
