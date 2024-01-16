import { Request,Response } from "express";
import getTools from "../use-cases/getTools";

const getToolController = async (req:Request,res:Response)=>{
    const tools = await getTools();
     return res.status(200).json(tools)   
} 

export default getToolController;