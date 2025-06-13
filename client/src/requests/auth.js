import api from "../utils/api";

const handleApiRequest = async (endpoint, user, set) => {
  try {
    
    set({ loading: true, error: null });
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const response = await delay(4000).then(() => api.post(endpoint, user));
    const data = response.data;
    set({ userData: data, isAuthenticated: true, loading: false });
    localStorage.setItem('userData', JSON.stringify(data));
    return data;
  } catch (err) {
    set({ loading: false, error: err.response.data.detail });
  }
};

export const loginUser = async (user, set) => {
  return await handleApiRequest('/auth/login', user, set);
};

export const createUser = async (user, set) => {
  return await handleApiRequest('/auth/register', user, set);
};
