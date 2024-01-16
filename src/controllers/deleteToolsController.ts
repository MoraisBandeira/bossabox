import { Request,Response } from "express";
import removeTool from "../use-cases/removeTool";

const removeToolController = async (req:Request,res:Response)=>{
   const deleted = await removeTool(parseInt(req.params.id))
  return res.status(200).send('deletado')
} 

export default removeToolController;