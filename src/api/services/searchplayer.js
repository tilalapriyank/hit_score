import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getSearchPlayers = async (playerName) => {
  try {
    const data = await apiFetch(ENDPOINTS.playerStats.search(playerName));
    return data;
  } catch (error) {
    console.error("Error fetching search players:", error);
  }
};
