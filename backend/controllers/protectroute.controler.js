import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

export const protectRoute = async (req,res,next)=>{
try {
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).send("no token provided")
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)    

  

    if(!decoded){
        return res.status(401).send("invalid token")
    }

    const user = await User.findById(decoded.userID).select("-password");

    if(!user){
        return res.status(401).send("user not found")
    }
 
    req.user = user

    next();

} catch (error) {
    console.log("internal server error:",error.message);
    res.send("internal server error").status(500);
}
}