import { Request,Response } from "express";
import createTool from "../use-cases/createTool";

const createToolController = async (req:Request,res:Response)=>{
    const createdTool = await createTool(req.body)

    if(createdTool){
      return res.status(201).json(createdTool)
    }else{
      return res.status(500).send('error no server')
    }
} 

export default createToolController;