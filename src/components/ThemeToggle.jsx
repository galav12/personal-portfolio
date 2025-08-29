import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark" || !storedTheme) {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
        window.dispatchEvent(new Event("themeChange"));
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed max-sm:right-1/3 top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden hover:bg-foreground hover:text-background"
            )}>
            {isDarkMode ? (
                <Sun className="h-6 w-6" />
            ) : (
                <Moon className="h-6 w-6" />
            )}
        </button>
    );
};
