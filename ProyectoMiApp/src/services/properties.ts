//Servicios(funciones) que consume la api para mostrarlo en el front
import { propertyProps } from "@/dto/properties";
import axios from "axios";

const API_URL = "/api/properties";

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

// PUT (actualizar)
export const updateProperty = async (propertyData: propertyProps) => {
  const response = await axios.put(`/api/properties`, propertyData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};


// DELETE (eliminar)
export const deleteProperty = async (_id: string) => {
  const response = await axios.delete(`/api/properties`, {
    data: { _id },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
