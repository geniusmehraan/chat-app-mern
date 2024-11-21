import User from "../models/users.model.js"

export const userForSidebar = async (req,res)=>{
     try {
        const loggedInUser = req.user._id;

        const allusers = await User.find({_id:{$ne:loggedInUser}}).select("-password");

        res.status(200).json(allusers)

     } catch (error) {
        console.log("internal d error:",error.message);
        res.json({message:"internal d error"}).status(500);
     }
}

