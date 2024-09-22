// cardService.js
import { apiClient } from "../ApiClient";

// 생성된 카드 이미지를 가져오는 get method
export const fetchCardImage = async () => {
  try {
    const response = await apiClient.get(`/url`); // 임시 url
    return response.data;
  } catch (error) {
    console.error("Error fetching card image from Firebase:", error);
    throw error;
  }
};
