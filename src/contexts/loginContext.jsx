import { createContext, useState } from "react";


export const LoginContext = createContext()

export const LoginContextProvider = ({children}) => {
    const [loginModal, setLoginModal] = useState(false)
    const [popupInfo, setPopupInfo] = useState({
        open: false,
        title: null,
        description: null,
        releaseYear: null,
        imgUrl: null
    })

    return (
        <LoginContext.Provider value={{loginModal, setLoginModal, popupInfo, setPopupInfo}}>
            {children}
        </LoginContext.Provider>
    )
}