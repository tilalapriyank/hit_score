import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getArchives = async (type, year) => {
  try {
    const data = await apiFetch(ENDPOINTS.archives(type, year));
    return data;
  } catch (error) {
    console.error("Error fetching archives:", error);
  }
};
