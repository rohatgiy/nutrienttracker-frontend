import React from "react"

const LoginContext = React.createContext({
    loggedIn: false,
    toggleLogin: () => {}
});

export { LoginContext }