// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/dbconection";
import Properties from "@/database/models/properties";

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

type Data = {
    properties: string,
    ok: boolean,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>

){
  try {
    //Connect to db

    if (req.method === "GET") {
      dbConnection()
      const data = await Properties.find()
      console.log(data)

      res.status(200).json({
        ok: true,
        data: data as Property[]
      });
    } 
}catch(error){
    res.status(500).json({ name: error });
        
}
}
    
    
        // } else if (req.method === "POST") {
        //   const { name, email, age } = req.body;
        //   if (!name || !email) {
        //     return res.status(400).json({ error: "Nombre y email son requeridos" });
        //   }
        //   const newUser = new User({ name, email, age });
        //   await newUser.save();
        //   return res.status(201).json(newUser);
        // } 
        
        
        // else if (req.method === "PUT") {
        //   const { id, ...updates } = req.body;
    
        //   if (!id) {
        //     return res
        //       .status(400)
        //       .json({ error: "Id es requerido para actualizar" });
        //   }
        //   const updatedUser = await User.findByIdAndUpdate(id, updates, {
        //     new: true,
        //   });
        //   if (!updatedUser) {
        //     return res.status(404).json({ error: "Usuario no encontrado" });
        //   }
        //   return res.status(200).json(updatedUser);
        // } 
        
        
        
        // else if (req.method === "DELETE") {
        //   const { id } = req.body;
    
        //   if (!id) {
        //     return res.status(400).json({ error: "Id es requerido para eliminar" });
        //   }
        //   const deletedUser = await User.findByIdAndDelete(id);
    
        //   if (!deletedUser) {
        //     return res.status(404).json({ error: "Usuario no encontrado" });
        //   }
        //   return res.status(200).json({ message: "Usuario eliminado correctamente" });
        // }
