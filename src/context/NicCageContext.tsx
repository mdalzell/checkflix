import { createContext, Dispatch, useContext, useState } from "react";

type NicCageMode = {
    active: boolean,
    setActive: Dispatch<boolean>
}

const NicCageContext = createContext<NicCageMode>({ active: false, setActive: () => {} });

const useNicCageMode = () => {
    return useContext(NicCageContext)
}

const NicCageModeProvider = ({ children } : {children: React.ReactNode}) => {
    const [active, setActive] = useState<boolean>(false);

    return <NicCageContext.Provider value={{active, setActive}}>{children}</NicCageContext.Provider>
}

export { NicCageModeProvider, useNicCageMode }