import { Request,Response } from "express";
import getTools from "../use-cases/getTools";
import getToolsByTags from "../use-cases/getToolsByTags";

const getToolController = async (req:Request,res:Response)=>{
    if(!req.query.tags){
        const tools = await getTools();
     return res.status(200).json(tools) 
    }
        const { tags } = req.query
      const tools = await getToolsByTags(String(tags))
      if(tools){
        return res.status(200).json(tools)
      }
} 

export default getToolController;