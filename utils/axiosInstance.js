import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.VERCEL_URL}/api`,
});