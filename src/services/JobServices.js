import axios from "axios";

const BASE_URL = "http://localhost:8080/api/jobs";

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
