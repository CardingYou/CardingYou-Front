import { apiClient } from "../ApiClient";

// firebase db로 카드 url를 생성하는 post method
export const saveCardToFirebase = async (request) => {
    try {
      const response = await apiClient.post('/url', request);
      return response.data;
    } catch (error) {
      console.error("Error saving card to Firebase:", error);
      throw error;
    }
  };