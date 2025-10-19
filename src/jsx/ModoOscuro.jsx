import { useState, useEffect } from "react";
import SunnyIcon from '@mui/icons-material/Sunny';
import Brightness3Icon from '@mui/icons-material/Brightness3'; import "@/css/ModoOscuro.css";

export function ModoOscuro() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") setDark(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light");
        document.body.className = dark ? "dark" : "light"; // aplica clase al body
    }, [dark]);

    return (
        <div className="theme-toggle-container">
            <button
                className="theme-toggle"
                onClick={() => setDark(!dark)}
                aria-label="Cambiar modo"
            >
                <span className="icon iconoMO">
                    {dark ? <SunnyIcon />
                        : <Brightness3Icon />}</span>
            </button>
        </div>
    );
}
