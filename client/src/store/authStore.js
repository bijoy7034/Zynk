import { create } from "zustand";
import { createUser, loginUser } from "../requests/auth";

const useAuthStore = create((set) => ({
  loading: false,
  isAuthenticated: false,
  userData: null,
  error: null,
  login: async (user) => await loginUser(user, set),
  createUser : async (user) => await createUser(user, set),
  clearError: () => set({ error: null }),
  logout: () => {
    set({ isAuthenticated: false, userData: null });
    localStorage.removeItem("userData");
  },

}));

export default useAuthStore;
