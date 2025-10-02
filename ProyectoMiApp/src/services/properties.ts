//Servicios(funciones) que consume la api para mostrarlo en el front

import axios from 'axios';

export const  getProperties  =  async ()=> {
    const response = await axios.get('http://localhost:3000/api/properties')
    console.log(response.data);
    return response.data;
};

export const createProperty = async () => {
  const response = await axios.post("http://localhost:3000/api/properties",
    {});
  return response.data.miInfo
};