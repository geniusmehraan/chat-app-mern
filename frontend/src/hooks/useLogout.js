import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setauthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://chat-app-ayaan.onrender.com/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            // Check if the response is JSON
            const contentType = res.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                localStorage.removeItem("chat-user");
                console.log("Logged out successfully");
                setauthUser(null);
            } else {
                // Handle unexpected content type
                const text = await res.text();
                throw new Error(`Unexpected response: ${text}`);
            }
        } catch (error) {
            console.error("Logout error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};

export default useLogout;
