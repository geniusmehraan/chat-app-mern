import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

// Custom Hook: useSignUp
const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setauthUser } = useAuthContext();

    // Input validation function
    const handleInputs = ({ fullname, username, password, confirmPassword, gender }) => {
        if (!fullname || !username || !password || !confirmPassword || !gender) {
            toast.error("Please fill all the fields");
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        return true;
    };

    // Sign up function
    const signup = async ({ fullname, username, password, confirmPassword, gender }) => {
        const isValid = handleInputs({ fullname, username, password, confirmPassword, gender });
        if (!isValid) return;

        setLoading(true);
        try {
            const res = await fetch("https://chat-app-ayaan.onrender.com/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setauthUser(data);

        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignUp;
