import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getScheduleMatches = async (type) => {
  try {
    const data = await apiFetch(ENDPOINTS.schedule(type));
    return data;
  } catch (error) {
    console.error("Error fetching recent matches:", error);
  }
};
