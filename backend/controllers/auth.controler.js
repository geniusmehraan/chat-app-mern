import User from "../models/users.model.js"
import bcrypt from "bcryptjs"
import generatejwtandsetcokie from "../utils/generatejwt.js";

export const signup = async (req,res)=>{
    
try{
        
        const {fullname,username,password,confirmPassword,gender} = req.body;
    
        if(password !== confirmPassword){
            return res.status(200).json({"result":"true","message":"password don't match"})
        }
    
        const user = await User.findOne({username})
    
        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        
        //https://avatar.iran.liara.run/public/boy?username=${username}
        

       
    const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    
    const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const saltRounds = 10;
 const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
        fullname,
        username,
        password:hashedPassword,
        gender,
        profilepic: gender==="male" ? boypic : girlpic
    });

   if(newUser){
    generatejwtandsetcokie(newUser._id,res)
    await newUser.save()

    newUser.password = undefined

    return res.status(201).json({result:"true",message:"user created", data:newUser});
     
   }else{
    return res.status(200).json({result:"false",message:"user not created"});

   }
}catch(err){
console.log("error is ---> ",err.message)


return res.status(201).json({result:"false",message:err.message});

}
    

}

export const login = async (req,res,next)=>{
   try {
    const {username,password} = req.body;

  
    
    const user = await User.findOne({username});




    if(!user ){
        return res.status(400).json({error:"invalid username "})
    }


    const ispassworcorrect = await bcrypt.compare(password,user?.password || "")

    if( !ispassworcorrect){
        return res.status(400).json({error:"invalid password"})
    }
    
generatejwtandsetcokie(user._id,res)

user.password = undefined

return res.status(201).json({result:"true",message:"user logged in", data:user});


   } catch (error) {
    console.log("error is",error.message)
   }
    
}

export const logout = (req,res)=>{
   try {
    res.cookie("jwt", "", { expires: new Date(0) });
    res.json({message:"logged out succesfully"})
   } catch (error) {
    console.log("error is",error.message)
   }
}