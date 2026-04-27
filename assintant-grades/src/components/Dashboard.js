import React from "react";
import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { state, studentTotal } = useApp();

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Dashboard"),

    ...state.students.map((s) =>
      React.createElement(
        "div",
        { key: s.id },
        s.apellidos + " " + s.nombres + " → " + studentTotal(s.id)
      )
    )
  );
}