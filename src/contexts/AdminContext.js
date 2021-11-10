import React, { useReducer } from 'react';

export const adminContext = React.createContext()
const INIT_STATE = {}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}
const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    return (
        <adminContext.Provider>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;