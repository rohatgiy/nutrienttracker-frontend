import React from "react"

const LoginContext = React.createContext({
    loggedIn: false,
    // switchLogin: (token) => {},
    // switchLogout: () => {},
    // token: ""
});

export { LoginContext }