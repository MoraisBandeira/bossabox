
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

class ToolRepository {
  async getAllTools() {
    return await prisma.tool.findMany();
  }

  async createTool(toolData:any) {
    const createdTool = await prisma.tool.create({data:toolData})
    if(createdTool){
      return createdTool;
    }
  }

  async removeTool(toolId:any) {
    return await prisma.tool.delete({where:{
      id:parseInt(toolId)
    }})
  }
}

export default ToolRepository;