import { Request, Response } from "express";
export const getCurrentUser = (req:Request,res:Response)=>{

    try {
        return res.status(200).json({success:true,message:"Current User",user:req.user})
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}