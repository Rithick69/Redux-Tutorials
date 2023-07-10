import React, { useContext } from "react";

// context (warehouse)
// Provider (delivery agent)
// Consumer / useContext hook (you the consumer)


// Creating a context

const AppContext = React.createContext();

// we need to create a provider.

const AppProvider = ({ children }) => {
    return <AppContext.Provider
    value='root'
    >{children}</AppContext.Provider>;
};

// global custom hook for context

const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider, useGlobalContext};
