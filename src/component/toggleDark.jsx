import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import LocalicationContext from '../context/localizationContext';
import "./toggleDark.css";

export default function ToggleDark() {
  const theme = useContext(ThemeContext);
  const { t, i18n } = useContext(LocalicationContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      i18n.changeLanguage('en');
      theme.dispatch({ type: "LIGHT" });
    } else {
      i18n.changeLanguage('th');
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
