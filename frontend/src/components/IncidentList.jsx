import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchIncidentes } from "../lib/api";

export default function IncidentList() {
  const [incidentes, setIncidentes] = useState([]);
  const [estado, setEstado] = useState("");
  const [equipo_id, setEquipoId] = useState("");

  const loadIncidentes = async () => {
    try {
      const data = await fetchIncidentes({ estado, equipo_id });
      setIncidentes(data);
    } catch (error) {
      console.error("Error al cargar incidentes", error);
    }
  };

  useEffect(() => {
    loadIncidentes();
  }, [estado, equipo_id]);

  const limpiarFiltros = () => {
    setEstado("");
    setEquipoId("");
  };

  return (
    <Card className="max-w-4xl mx-auto space-y-4 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Listado de incidentes</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Filtros */}
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Filtrar por equipo"
            value={equipo_id}
            onChange={(e) => setEquipoId(e.target.value)}
          />
          <Select onValueChange={(value) => setEstado(value)} value={estado}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="abierto">Abierto</SelectItem>
              <SelectItem value="en_progreso">En Progreso</SelectItem>
              <SelectItem value="cerrado">Cerrado</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={limpiarFiltros}>
            Ver todos
          </Button>
        </div>

        {/* Resultados */}
        <ul className="divide-y rounded-md border text-sm bg-white overflow-hidden shadow-sm">
          {incidentes.map((i) => (
            <li key={i.id} className="p-4 space-y-1 hover:bg-gray-50">
              <div className="font-medium">{i.descripcion}</div>
              <div className="text-muted-foreground">
                {i.fecha} · {i.equipo_id} · Estado: {i.estado}
              </div>
            </li>
          ))}
          {incidentes.length === 0 && (
            <li className="p-4 text-muted-foreground">
              No hay incidentes para mostrar.
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
