import React, {createContext, useReducer} from 'react';
import './App.css';
import {Action, initialState, reducer, State} from "./State";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./Main";
import {HomePage} from "./HomePage";
import {Dettaglio} from "./Dettaglio";
import {DettaglioCard} from "./DettaglioCard";
import {BarGraph} from "./BarGraph";

type AppContext = {
    state:State,
    dispatch: (_:Action)=>void
}
export const StateContext = createContext<AppContext>(
    {
        state: initialState,
        dispatch: ()=>{}
    }
)

function App() {
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route path="" index element={<HomePage/>}/>
                        <Route path="dettaglio" element={<Dettaglio/>}>
                            <Route path=":id" index element={<DettaglioCard/>}/>
                        </Route>
                        <Route path="statistiche" index element={<BarGraph/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </StateContext.Provider>
    );
}

export default App;
