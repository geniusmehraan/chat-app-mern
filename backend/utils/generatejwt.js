import jwt from "jsonwebtoken"

const generatejwtandsetcokie = (userID,res)=>{
const token =jwt.sign({userID},process.env.JWT_SECRET,{
    expiresIn:'30d'
})
 res.cookie("jwt",token,{
    maxAge: 30*24*60*60*1000,
    httpOnly:true, // prevent xxs atack,
    sameSite:"strict",
    
 })
}

export default generatejwtandsetcokie