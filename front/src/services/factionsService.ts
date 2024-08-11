import axios from "axios";

const API_URL = "http://localhost:3000/factions";

export const getFactions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    throw new error();
  }
};
