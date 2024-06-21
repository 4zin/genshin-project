import axios from "axios";

const API_URL = "http://localhost:3000/elements";

export const getElements = async () => {
    try {
        const response = axios.get(API_URL);
        return response;
    } catch (error: any) {
        throw new error
    }
}
