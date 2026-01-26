import axiosInstance from "./axios";

const BASE = "/api/foods";

export async function getFoods(params = {}) {
  const res = await axiosInstance.get(BASE, { params });
  return res.data;
}

export async function getFood(id) {
  const res = await axiosInstance.get(`${BASE}/${id}`);
  return res.data;
}

export async function createFood(payload) {
  const res = await axiosInstance.post(BASE, payload);
  return res.data;
}

export async function updateFood(id, payload) {
  const res = await axiosInstance.put(`${BASE}/${id}`, payload);
  return res.data;
}

export async function deleteFood(id) {
  const res = await axiosInstance.delete(`${BASE}/${id}`);
  return res.data;
}
