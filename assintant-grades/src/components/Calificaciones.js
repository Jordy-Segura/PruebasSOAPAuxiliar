import React from "react";
import { useApp } from "../context/AppContext";

export default function Calificaciones() {
  const { state, setGrade } = useApp();

  function handleChange(sid, aid, e) {
    setGrade(sid, aid, Number(e.target.value));
  }

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Calificaciones"),

    ...state.students.map((s) =>
      React.createElement(
        "div",
        { key: s.id },

        React.createElement("h3", null, s.apellidos),

        ...state.activities.map((a) =>
          React.createElement("input", {
            key: a.id,
            type: "number",
            placeholder: a.name,
            onChange: (e) => handleChange(s.id, a.id, e),
          })
        )
      )
    )
  );
}