// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/dbconection";
import Properties from "@/database/models/properties";
import { propertyProps } from "@/dto/properties";

type ApiResponse =
  | { ok: true; data: propertyProps[] }
  | { ok: true; message: string; updatedId?: string }
  | { ok: false; data: [] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    // 1. Conexión a la DB
    await dbConnection();

    // 2. Control de métodos
    switch (req.method) {
      case "GET": {
        const { id } = req.query as { id?: string };
        if (id) {
          const property = await Properties.findById(id);
          if (!property) {
            return res.status(404).json({ ok: false, data: [] });
          }
          return res.status(200).json({ ok: true, data: [property] });
        }

        const propertyList = await Properties.find();
        return res.status(200).json({ ok: true, data: propertyList });
      }

      //  POST CASE
      case "POST": {
        const { name, value, img } = req.body;

        //Simple Validations
        if (
          typeof name !== "string" ||
          name.trim() === "" ||
          typeof value !== "number" ||
          value <= 0 ||
          (img && typeof img !== "string")
        ) {
          return res.status(400).json({ ok: false, data: [] });
        }

        const newProperty = new Properties({ name, value, img });
        await newProperty.save();
        return res.status(201).json({ ok: true, message: "property created" });
      }

      // PUT CASE
      case "PUT": {
        const { id, name, value, img } = req.body;

        // Validar que se haya enviado el id
        if (!id) {
          return res.status(400).json({
            ok: false,
            data: [],
          });
        }

        //Validaciones básicas
        if (
          (name && (typeof name !== "string" || name.trim() === "")) ||
          (value && (typeof value !== "number" || value <= 0)) ||
          (img && typeof img !== "string")
        ) {
          return res.status(400).json({ ok: false, data: [] });
        }

        // Intentar actualizar la propiedad
        const updated = await Properties.findByIdAndUpdate(
          id,
          { name, value, img },
          { new: true } // Esto hace que devuelva el documento actualizado
        );

        // Si no encontró nada para actualizar
        if (!updated) {
          return res.status(404).json({
            ok: false,
            data: [],
          });
        }

        // Si actualizó correctamente
        return res.status(200).json({
          ok: true,
          message: "property updated",
          updatedId: id,
        });
      }

      // DELETE CASE
      case "DELETE": {
        const { id } = req.body;
        await Properties.findByIdAndDelete(id);
        return res
          .status(200)
          .json({ ok: true, message: "property deleted", updatedId: id });
      }

      // Método no soportado
      default:
        return res.status(405).json({ ok: false, data: [] }); // Method Not Allowed
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: [] });
  }
}
