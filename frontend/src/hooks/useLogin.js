import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext";
const useLogin = ()=>{
    const [loading,setloading] = useState()

    const { setauthUser } = useAuthContext();

    const login = async (username,password)=>{
        setloading(true)
        try {
            
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data = await res.json()
            if(data.error){
            throw new Error(data.error)
              
               
            }
               
            localStorage.setItem("chat-user",JSON.stringify(data))

            setauthUser(data)

        } catch (error) {
            toast.error(error.message)
        }finally{
            setloading(false)
        }
      
    }

    return {loading,login}
}

export default useLogin