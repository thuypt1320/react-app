import {useEffect, useState} from "react";

export const useTheme = () => {
  const themes = window.localStorage.getItem("all-themes");
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    setTheme(currentTheme);
  },[]);

  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  return {theme, setMode};
};