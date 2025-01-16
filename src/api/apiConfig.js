import dotenv from "dotenv";

dotenv.config();

export const API_KEY = process.env.API_KEY;
export const API_HOST = process.env.API_HOST;
export const BASE_URL = process.env.BASE_URL;

console.log("API_KEY:", API_KEY);
console.log("BASE_URL:", BASE_URL);
