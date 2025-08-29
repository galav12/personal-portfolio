import { StarBackground } from "./StarBackground"
import { CloudBackground } from "./CloudBackground"
import { useState, useEffect } from "react";


export const Background = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

    useEffect(() => {
    const onThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("themeChange", onThemeChange);
    
    return () => window.removeEventListener("themeChange", onThemeChange);
  }, []);


    return (
        <>
            {theme === "dark" && <StarBackground />}
            {theme === "light" && <CloudBackground />}
        </>
    );
}
