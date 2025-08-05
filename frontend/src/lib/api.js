const BASE_URL = "http://localhost:3001";

export async function fetchIncidentes({ estado, equipo_id }) {
  const params = new URLSearchParams();
  if (estado && estado !== "") params.append("estado", estado);
  if (equipo_id) params.append("equipo_id", equipo_id);

  const res = await fetch(`${BASE_URL}/incidentes?${params.toString()}`);
  if (!res.ok) throw new Error("Error al obtener incidentes");
  return res.json();
}

export async function crearIncidente(data) {
  const res = await fetch(`${BASE_URL}/incidentes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Error al crear incidente");
  }
  return res.json();
}

