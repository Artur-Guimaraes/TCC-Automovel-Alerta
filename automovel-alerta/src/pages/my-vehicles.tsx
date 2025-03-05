import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Vehicle {
  id: number;
  name: string;
  model: string;
  plate: string;
  mileage: string;
}

export function MyVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    setVehicles([
      { id: 1, name: "Meu Peugeot", model: "Peugeot 208 Style 2024", plate: "ABC-1234", mileage: "32.500 km" },
      { id: 2, name: "SUV Família", model: "Jeep Compass 2023", plate: "XYZ-9876", mileage: "45.200 km" },
      { id: 3, name: "Compacto da Cidade", model: "Fiat Argo 2022", plate: "DEF-4567", mileage: "28.900 km" },
      { id: 4, name: "Esportivo do Fim de Semana", model: "Ford Mustang GT 2021", plate: "MUS-5000", mileage: "15.800 km" },
      { id: 5, name: "Hatch do Dia a Dia", model: "Volkswagen Polo Highline 2023", plate: "POLO-888", mileage: "19.700 km" },
      { id: 6, name: "Clássico de Coleção", model: "Chevrolet Opala 1978", plate: "OPA-1978", mileage: "105.300 km" },
      { id: 7, name: "Utilitário para Viagens", model: "Toyota Hilux SRX 2022", plate: "HIL-9999", mileage: "78.500 km" },
      { id: 8, name: "Carro de Trabalho", model: "Renault Kangoo 2020", plate: "KAN-1234", mileage: "85.600 km" },
      { id: 9, name: "Conversível de Verão", model: "BMW Z4 2023", plate: "BMW-2323", mileage: "12.100 km" },
      { id: 10, name: "Sedan Executivo", model: "Mercedes-Benz C300 2023", plate: "MB-2023", mileage: "33.000 km" },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Meus Veículos</h1>

      {vehicles.length === 0 ? (
        <p className="text-gray-500">Nenhum veículo cadastrado.</p>
      ) : (
        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id}>
              <CardHeader>
                <CardTitle>{vehicle.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Modelo: <span className="font-medium">{vehicle.model}</span></p>
                  <p className="text-sm text-gray-500">Placa: <span className="font-medium">{vehicle.plate}</span></p>
                  <p className="text-sm text-gray-500">Quilometragem: <span className="font-medium">{vehicle.mileage}</span></p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};