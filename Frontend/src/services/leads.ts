import { api } from "@/lib/api";

export const fetchLeads = async () => {
  const res = await api.get("/api/leads");
  return res.data;
};
