    import { ENDPOINTS } from "../endpoints";
    import { apiFetch } from "../utils/apiFetch";

    export const getLiveMatches = async () => {
    try {
        const data = await apiFetch(ENDPOINTS.liveMatches);
        return data;
    } catch (error) {
        console.error("Error fetching live matches:", error);
    }
    };
