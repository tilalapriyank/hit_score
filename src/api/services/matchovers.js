import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getMatchOvers = async (id) => {
  try {
    const data = await apiFetch(ENDPOINTS.matchOvers(id));
    return data;
  } catch (error) {
    console.error("Error fetching Overs:", error);
  }
};
