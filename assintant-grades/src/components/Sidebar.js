import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  function item(path, label) {
    return React.createElement(
      Link,
      {
        to: path,
        style: {
          display: "block",
          padding: "10px",
          background: location.pathname === path ? "#ddd" : "transparent",
        },
      },
      label
    );
  }

  return React.createElement(
    "aside",
    { style: { width: "200px", background: "#eee" } },

    React.createElement("h2", null, "ESPOCH"),

    item("/", "Dashboard"),
    item("/configuracion", "Configuración"),
    item("/estudiantes", "Estudiantes"),
    item("/calificaciones", "Calificaciones"),
    item("/reporte", "Reporte")
  );
}