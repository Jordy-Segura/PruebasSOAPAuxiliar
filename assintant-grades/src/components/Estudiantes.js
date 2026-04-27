import React from "react";
import { useApp } from "../context/AppContext";

export default function Estudiantes() {
  const { state } = useApp();

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Estudiantes"),

    ...state.students.map((s) =>
      React.createElement(
        "div",
        { key: s.id },
        s.apellidos + " " + s.nombres
      )
    )
  );
}