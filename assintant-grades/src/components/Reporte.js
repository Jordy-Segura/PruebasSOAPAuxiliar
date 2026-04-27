import React from "react";
import { useApp } from "../context/AppContext";

export default function Reporte() {
  const { state, studentTotal } = useApp();

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Reporte"),

    ...state.students.map((s) =>
      React.createElement(
        "div",
        { key: s.id },
        s.apellidos + " → TOTAL: " + studentTotal(s.id)
      )
    )
  );
}