// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "@/lib/dbconection";
import Properties from "@/database/models/properties";
//Data lo puedo cambiar por mi respuesta, cambiarla para ver la diferencia

interface Property {
  _id: string;
  name: string;
  value: number;
  img?: string;
}

type ApiResponse =
  | { ok: true; data: Property[] }
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
        const { id } = req.query;
        if (id) {
          const property = await Properties.findById(id);
          if (!property) {
            return res.status(404).json({ ok: false, data: [] });
          }
          return res.status(200).json({ ok: true, data: [property] });
        } else {
          const data = await Properties.find();
          return res.status(200).json({ ok: true, data });
        }
      }

      //  POST
      case "POST": {
        const { name, value, img } = req.body;
        const newProperty = new Properties({ name, value, img });
        await newProperty.save();
        return res.status(201).json({ ok: true, message: "property created" });
      }

      case "PUT": {
        const { id, name, value, img } = req.body;

        // Validar que se haya enviado el id
        if (!id) {
          return res.status(400).json({
            ok: false,
            data: [],
          });
        }

        // Intentar actualizar la propiedad
        const updated = await Properties.findByIdAndUpdate(
          id,
          { name, value, img },
          { new: true } // ← Esto hace que devuelva el documento actualizado
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

      // DELETE
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
