const API_BASE_URL = "http://127.0.0.1:8000/api";

/**
 * Health check — verifies backend is alive
 */
export const getHealth = async () => {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error("Backend not reachable");
  }

  return response.json();
};
