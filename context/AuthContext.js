import {createContext,useState,useEffect} from "react";
import {useRouter} from "next/router";
import {API_URL,NEXT_URL} from "@/config/index";

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [error,setError] = useState(null);

    // Register User

    const Register = async(user) => {
        console.log(user)
    }


    // Login User

    const Login = async({email:identifier,password}) => {
        const res = await fetch(`${NEXT_URL}/api/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })
        
        const data = await res.json();

        console.log(data)


        if(res.ok){
            setUser(data.user)
        }else{
            setError(data.message)
            setError(null)
        }
    }


    // Logout user


    const Logout = async() => {
        console.log("Logout")
    }



    // Check if user is logged in

    const checkUserLoggedIn = async(user) => {
        console.log("Check")
    }


    return(
        <AuthContext.Provider value={{user,error,Register,Login,Logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;