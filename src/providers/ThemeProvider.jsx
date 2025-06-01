"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext);
    const [mounted,setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    },[mounted])

    if(!mounted){
        return
    }

    return <div className={theme}>{children}</div>
}

export default ThemeProvider;