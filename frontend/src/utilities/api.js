import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresidencies", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
}

export const createUser = async (email) => {
  try {
    await api.post("/user/register", { email: email });
  } catch (error) {
    toast.error("Something went wrong.Please try again");
    throw error;
  }
}

export const bookVisit = async (date, propertyID, email) => {
  try {
    await api.post(`/user/bookVisit/${propertyID}`, {
      email: email,
      id: propertyID,
      date: dayjs(date).format("DD/MM/YYYY")
    });
  } catch (error) {
    toast.error("Something went wrong.Please try again");
    throw error;
  }
}

export const cancelBooking = async (id, email) => {
  try {
    await api.post(`/user/removebookings/${id}`, {
      email,
    });
  } catch (error) {
    toast.error("Something went wrong.Please try again");
    throw error;
  }
}