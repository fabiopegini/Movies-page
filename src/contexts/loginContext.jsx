import { createContext, useState } from "react";


export const LoginContext = createContext()

export const LoginContextProvider = ({children}) => {
    const [loginModal, setLoginModal] = useState(false)

    return (
        <LoginContext.Provider value={{loginModal, setLoginModal}}>
            {children}
        </LoginContext.Provider>
    )
}