import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "./toggleDark.css";

export default function ToggleDark() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHT" });
    } else {
      theme.dispatch({ type: "DARK" });
    }
  };

  return (
    <div className="checkbox">
      <label className="switch">
        <input type="checkbox" id="checkbox-toggle" />
        <span
          className="wrapper"
          onClick={onClick}
        >
          <span className="knob" />
        </span>
      </label>
    </div>
  );
}
