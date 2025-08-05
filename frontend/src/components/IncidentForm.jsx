import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { crearIncidente } from "../lib/api";

export default function IncidentForm() {
  const [formData, setFormData] = useState({
    fecha: "",
    descripcion: "",
    equipo_id: "",
    estado: "",
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEstado = (value) => setFormData({ ...formData, estado: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje(null);
    try {
      await crearIncidente(formData);
      setMensaje("Incidente registrado exitosamente.");
      setFormData({ fecha: "", descripcion: "", equipo_id: "", estado: "" });
    } catch (err) {
      setMensaje("Error al registrar incidente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md w-full mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Registrar incidente</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label>Fecha</Label>
            <Input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Descripción</Label>
            <Input
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Equipo ID</Label>
            <Input
              name="equipo_id"
              value={formData.equipo_id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label>Estado</Label>
            <Select
              onValueChange={handleEstado}
              value={formData.estado}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="abierto">Abierto</SelectItem>
                <SelectItem value="en_progreso">En Progreso</SelectItem>
                <SelectItem value="cerrado">Cerrado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2 py-4">
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Registrando..." : "Registrar"}
          </Button>
          {mensaje && (
            <p className="text-sm text-muted-foreground">{mensaje}</p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
