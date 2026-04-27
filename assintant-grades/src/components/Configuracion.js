import React from "react";
import { useApp } from "../context/AppContext";

export default function Configuracion() {
  const { state, setState } = useApp();

  function handleChange(e) {
    setState((prev) => ({
      ...prev,
      courseConfig: {
        ...prev.courseConfig,
        asignatura: e.target.value,
      },
    }));
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Configuración"),

    React.createElement("input", {
      placeholder: "Asignatura",
      value: state.courseConfig.asignatura,
      onChange: handleChange,
    })
  );
}