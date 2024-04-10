import { createContext } from 'react';
import { useState } from 'react';

export const ContextToDo = createContext();

export function ContextProvider({children}){

    const [qntToDo, setQntToDo] = useState([])

    return (
        <ContextToDo.Provider value={{qntToDo, setQntToDo}}>
            {children}
        </ContextToDo.Provider>
    )
}