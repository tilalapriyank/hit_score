import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getMatchSquad = async (matchid, teamid) => {
  try {
    const data = await apiFetch(ENDPOINTS.teamDetails(matchid, teamid));
    return data;
  } catch (error) {
    console.error("Error fetching info:", error);
  }
};
