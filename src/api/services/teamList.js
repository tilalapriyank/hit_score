import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getTeamList = async (type) => {
  try {
    const data = await apiFetch(ENDPOINTS.teamlist(type));
    return data;
  } catch (error) {
    console.error("Error fetching recent matches:", error);
  }
};
