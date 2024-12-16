import { apiFetch } from "../utils/apiFetch";
import { ENDPOINTS } from "../endpoints";

export const getRankingData = async (category, format, isWomen = false) => {
  try {
    const data = await apiFetch(ENDPOINTS.rankings(category, format, isWomen));
    return data;
  } catch (error) {
    console.error("Error fetching player rankings:", error);
  }
};
