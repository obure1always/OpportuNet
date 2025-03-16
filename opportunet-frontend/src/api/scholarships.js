const API_URL = "http://localhost:5000"; // Backend URL

export const getScholarships = async () => {
  try {
    const response = await fetch(`${API_URL}/scholarships`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching scholarships:", error);
    return [];
  }
};
