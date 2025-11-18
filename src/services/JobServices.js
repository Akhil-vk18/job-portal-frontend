import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL; //IMPORTING ENV VARIABLE

export async function getAllJobs() {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { title },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
getAllJobs();
