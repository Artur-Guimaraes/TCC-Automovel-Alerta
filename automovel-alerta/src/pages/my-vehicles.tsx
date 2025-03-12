import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react"

interface Vehicle {
  id: number;
  name: string;
  model: string;
  plate: string;
  mileage: string;
}

export function MyVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [deletingVehicle, setDeletingVehicle] = useState<Vehicle | null>(null);
  const [addingVehicle, setAddingVehicle] = useState<Vehicle | null>(null);

  useEffect(() => {
    setVehicles([
      { id: 1, name: "Meu Peugeot", model: "Peugeot 208 Style 2024", plate: "ABC-1234", mileage: "32.500 km" },
      { id: 2, name: "SUV Família", model: "Jeep Compass 2023", plate: "XYZ-9876", mileage: "45.200 km" },
    ]);
  }, []);

  const handleEditVehicle = (vehicle: Vehicle) => {
    setEditingVehicle(vehicle);
  };

  const handleDeleteVehicle = (vehicle: Vehicle) => {
      setDeletingVehicle(vehicle);
  };

  const confirmDeleteVehicle = () => {
    if (deletingVehicle) {
      setVehicles((prev) => {
        const updatedVehicles = prev.filter((vehicle) => vehicle.id !== deletingVehicle.id);
        return updatedVehicles.map((vehicle, index) => ({ ...vehicle, id: index + 1 }));
      });
      setDeletingVehicle(null);
    }
  };

  const handleAddVehicle = () => {
    setAddingVehicle({ id: vehicles.length + 1, name: "", model: "", plate: "", mileage: "" });
  };

  const handleSaveChanges = () => {
    if (editingVehicle) {
      setVehicles((prev) =>
        prev.map((vehicle) => (vehicle.id === editingVehicle.id ? editingVehicle : vehicle))
      );
      setEditingVehicle(null);
    } else if (addingVehicle) {
      setVehicles((prev) => [...prev, addingVehicle]);
      setAddingVehicle(null);
    }
  };

  useEffect(() => {}, [vehicles]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Meus Veículos</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"default"} onClick={() => handleAddVehicle()}>
              Cadastrar Veículo <Plus />
            </Button>
          </AlertDialogTrigger>
          {addingVehicle && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex justify-between">
                  Adicionar Veículo
                  <AlertDialogCancel onClick={() => setAddingVehicle(null)}>X</AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="space-y-2">
                  <div>
                    <label className="text-gray-600">Nome do carro:</label>
                    <Input
                      className="mt-1"
                      type="text"
                      value={addingVehicle.name}
                      onChange={(e) => setAddingVehicle({ ...addingVehicle, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Marca e Modelo:</label>
                    <Input
                      className="mt-1"
                      type="text"
                      value={addingVehicle.model}
                      onChange={(e) => setAddingVehicle({ ...addingVehicle, model: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Placa:</label>
                    <Input
                      className="mt-1"
                      type="text"
                      value={addingVehicle.plate}
                      onChange={(e) => setAddingVehicle({ ...addingVehicle, plate: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Quilometragem:</label>
                    <Input
                      className="mt-1"
                      type="text"
                      value={addingVehicle.mileage}
                      onChange={(e) => setAddingVehicle({ ...addingVehicle, mileage: e.target.value })}
                    />
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setAddingVehicle(null)}>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={handleSaveChanges}>Salvar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
        </AlertDialog>
      </div>

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
                  <p className="text-sm text-gray-500">
                    Modelo: <span className="font-medium">{vehicle.model}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Placa: <span className="font-medium">{vehicle.plate}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Quilometragem: <span className="font-medium">{vehicle.mileage}</span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => handleEditVehicle(vehicle)}>
                        Editar
                      </Button>
                    </AlertDialogTrigger>
                    {editingVehicle && (
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex justify-between">
                            Editar Veículo
                            <AlertDialogCancel onClick={() => setEditingVehicle(null)}>X</AlertDialogCancel>
                          </AlertDialogTitle>
                          <AlertDialogDescription className="space-y-2">
                            <div>
                              <label className="text-gray-600">Nome do carro:</label>
                              <Input
                                className="mt-1"
                                type="text"
                                value={editingVehicle.name}
                                onChange={(e) => setEditingVehicle({ ...editingVehicle, name: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-gray-600">Marca e Modelo:</label>
                              <Input
                                className="mt-1"
                                type="text"
                                value={editingVehicle.model}
                                onChange={(e) => setEditingVehicle({ ...editingVehicle, model: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-gray-600">Placa:</label>
                              <Input
                                className="mt-1"
                                type="text"
                                value={editingVehicle.plate}
                                onChange={(e) => setEditingVehicle({ ...editingVehicle, plate: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="text-gray-600">Quilometragem:</label>
                              <Input
                                className="mt-1"
                                type="text"
                                value={editingVehicle.mileage}
                                onChange={(e) => setEditingVehicle({ ...editingVehicle, mileage: e.target.value })}
                              />
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setEditingVehicle(null)}>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={handleSaveChanges}>Salvar</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    )}
                  </AlertDialog>
                  <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteVehicle(vehicle)}>Excluir</Button>
                      </AlertDialogTrigger>
                    {deletingVehicle && (
                      <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="flex justify-between pb-7">
                              Tem certeza que deseja excluir o veículo?
                            </AlertDialogTitle>
                            <AlertDialogFooter>
                              <AlertDialogCancel onClick={() => setDeletingVehicle(null)}>Cancelar</AlertDialogCancel>
                              <AlertDialogAction onClick={confirmDeleteVehicle}>Excluir</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    )}
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );

};
