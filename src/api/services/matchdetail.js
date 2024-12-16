import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getMatchDetail = async (id) => {
  try {
    const data = await apiFetch(ENDPOINTS.matchCenter(id));
    return data;
  } catch (error) {
    console.error("Error fetching info:", error);
  }
};
