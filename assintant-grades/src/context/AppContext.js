import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const DEFAULT_STATE = {
  courseConfig: {
    asignatura: "",
    pao: "",
  },
  students: [
    { id: "s1", apellidos: "ALCIVAR", nombres: "JOHN" },
    { id: "s2", apellidos: "PEREZ", nombres: "ANA" },
  ],
  activities: [
    { id: "a1", name: "Tarea 1" },
    { id: "a2", name: "Examen" },
  ],
  grades: [],
};

export function AppProvider(props) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem("state");
    return stored ? JSON.parse(stored) : DEFAULT_STATE;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  function setGrade(sid, aid, score) {
    setState((prev) => {
      const existing = prev.grades.find(
        (g) => g.studentId === sid && g.activityId === aid
      );

      let newGrades;

      if (existing) {
        newGrades = prev.grades.map((g) =>
          g.studentId === sid && g.activityId === aid
            ? { ...g, score }
            : g
        );
      } else {
        newGrades = [...prev.grades, { studentId: sid, activityId: aid, score }];
      }

      return { ...prev, grades: newGrades };
    });
  }

  function studentTotal(sid) {
    return state.activities.reduce((sum, act) => {
      const g = state.grades.find(
        (g) => g.studentId === sid && g.activityId === act.id
      );
      return sum + (g ? g.score : 0);
    }, 0);
  }

  return React.createElement(
    AppContext.Provider,
    { value: { state, setState, setGrade, studentTotal } },
    props.children
  );
}

export function useApp() {
  return useContext(AppContext);
}