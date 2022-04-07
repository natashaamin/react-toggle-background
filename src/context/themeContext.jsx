import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    darkMode: false
}

const themeReducer = (state, action) => {
    switch(action.type) {
        case "LIGHT":
            return { darkMode: false };
        case "DARK":
            return { darkMode: true };
        default:
            return state;
    }
}

export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{state, dispatch}}>
        {props.children}
    </ThemeContext.Provider>
}