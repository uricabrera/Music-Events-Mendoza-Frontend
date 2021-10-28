import {createContext,useState,useEffect} from "react";
import {useRouter} from "next/router";
import {API_URL} from "@/config/index";

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
        console.log(identifier,password)
    }


    // Logout user


    const Logout = async() => {
        console.log("Logout")
    }



    // Check if user is logged in

    const checkUserLoggedIn = async(user) => {
        console.log("Check")
    }

}