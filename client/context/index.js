import { useState, createContext, useEffect} from "react";
import axios from "axios";
import { useRouter } from "next/router";


const UserContext = createContext();

const UserProvider = ({children}) => {
    const [state, setState] = useState({
        user: {},
        token: ""
    })

    const router = useRouter();

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        let res = error.response
        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
            setState(null);
            window.localStorage.removeItem("auth")
            router.push("/login")
        }
    })

    useEffect(() => {
        setState(JSON.parse(window.localStorage.getItem("auth")))
    }, [])

    // Axios configuration
    const token = state && state.token ? state.token : "";
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;


    return (
        <UserContext.Provider value={[state, useState]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext }; 