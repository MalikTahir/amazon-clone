
// To track the basket/ Cart 
import React,{createContext, useContext,useReducer} from 'react'

export const StateContext = createContext();

//Provider to wrap around thte app
export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = ()=>useContext(StateContext);