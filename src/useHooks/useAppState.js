import React from "react";

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [appState, setAppState] = React.useState({
        user: "user",
        friends: [],
        gryffindor: [],
        slytherin: [],
        hufflepuff: [],
        ravenclaw: [],
        potionInventory: [],
        gryffindorLoading: false,
        slytherinLoading: false,
        hufflepuffLoading: false,
        ravenclawLoading: false,
    });

    function updateAppState(newStateValues) {
        setAppState({
            ...appState,
            ...newStateValues,
        });
    }

    const providerValue = {
        ...appState,
        lastLoad: Date.now(),
        updateAppState,
    };

    return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    );
}

export default function useAppState() {
    return React.useContext(AppContext);
}
