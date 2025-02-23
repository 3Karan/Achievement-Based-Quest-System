import axios from "axios";

const API_URL = "http://localhost:8000/api/quests";

export const getQuests = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quests");
  }
};

export const getQuestById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch quest details");
  }
};

export const completeQuest = async (questId: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/${questId}/complete`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to complete quest");
  }
};

// ✅ **Add the missing `addQuest` function**
export const addQuest = async (title: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      API_URL,
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to add quest");
  }
};
