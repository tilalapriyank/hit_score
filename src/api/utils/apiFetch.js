import { API_HOST, API_KEY } from "../apiConfig";

export const apiFetch = async (url) => {
    const response = await fetch(url, {
        headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST,
        },
    });
    
    console.log(response);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  return response.json();
};
