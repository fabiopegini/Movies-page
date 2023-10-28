import { createContext, useState } from "react";

export const PagesContext = createContext()

export function PagesContextProvider({children}) {
    const [page, setPage] = useState('Titles')

    return (
        <PagesContext.Provider value={{page, setPage}}>
            {children}
        </PagesContext.Provider>
    )
}