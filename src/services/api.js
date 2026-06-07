import axios from "axios";
const url = process.env.REACT_APP_API_URL || "https://whatsapp-clone-backend-production-042c.up.railway.app";
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/getUsers`);
    return response.data;
  } catch (err) {
    console.log(err.message);
    return [];
  }
};
//
export const setConversation = async (obj) => {
  try {
    await axios.post(`${url}/conversation/add`, obj);
  } catch (err) {
    console.log("hello world", err.message);
  }
};
export const getConversation = async (obj) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, obj);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getMessage = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const UploadFile = async (data) => {
  try {
    await axios.post(`${url}/file/upload`, data);
    console.log("uploaded successfully");
  } catch (error) {
    console.log("api .js Upload File error", error);
  }
};
