import React, {useReducer} from "react";
import { initialState, themeReducer , ThemeContext } from './themeContext';


function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return <ThemeContext.Provider value={{state, dispatch}}>
        {props.children}
        </ThemeContext.Provider>
}

export default ThemeProvider;