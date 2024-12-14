import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getUpcomingMatches = async () => {
  try {
    const data = await apiFetch(ENDPOINTS.upcomingMatches);
    return data;
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
  }
};
