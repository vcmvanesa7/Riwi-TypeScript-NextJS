//Servicios(funciones) que consume la api para mostrarlo en el front
import { propertyProps } from "@/dto/properties";
import axios from "axios";

const API_URL = "http://localhost:3000/api/properties";

//GET
export const getProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
//POST
export const createProperty = async (
  newProperty: Omit<propertyProps, "_id">
) => {
  const response = await axios.post(API_URL, newProperty, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
//PUT
export const updateProperty = async (propertyData: propertyProps) => {
  const response = await axios.put(API_URL, propertyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
//DELETE
export const deleteProperty = async (id: string) => {
  const response = await axios.delete(API_URL, {
    data: { id },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
