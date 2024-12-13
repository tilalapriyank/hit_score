import { ENDPOINTS } from "../endpoints";
import { apiFetch } from "../utils/apiFetch";

export const getImage = async (imageId) => {
  try {
    const data = await apiFetch(ENDPOINTS.image(imageId));
    return data.url || null;
  } catch (error) {
    return null;
  }
};
