import { z } from "zod";

export const vehicleSchema = z.object({
  name: z.string().min(3, "O nome do veículo deve ter pelo menos 3 caracteres."),
  model: z.string().min(3, "O modelo do veículo deve ter pelo menos 3 caracteres."),
  plate: z.string()
    .regex(/^[A-Z]{3}-\d{4}$/, "A placa deve seguir o formato ABC-1234."),
  mileage: z.string()
    .regex(/^\d+(\.\d{1,2})?\s?km$/, "A quilometragem deve estar no formato correto, ex: 32000 km"),
});
