import { createContext, useContext, useState } from "react";


export const ThememContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => { },
        lightTheme: () => { },
        
    }
);

export const ThememContextProvider = ThememContext.Provider;


export default function useTheme() {
    return useContext(ThememContext);
}