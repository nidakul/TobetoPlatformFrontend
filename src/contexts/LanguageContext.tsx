import React, { createContext, useState } from "react";
import Profile from "../pages/Profile/Profile";
import LanguageEdit from "../components/Profile/ProfileEdit/LanguageEdit";

export const LanguageContext = createContext({})

export const LanguageProvider = (props: any) => {
    const [language, setLanguage] = useState<any>()

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}
