import axios from "axios";

export const axiosNodeServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NODE_SERVER_URL,
  withCredentials: true,
});
