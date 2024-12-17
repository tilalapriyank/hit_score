import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getMatchScorecard = async (id) => {
  try {
    const data = await apiFetch(ENDPOINTS.matchScorecard(id));
    return data;
  } catch (error) {
    console.error("Error fetching Scorecard:", error);
  }
};
