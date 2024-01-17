
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

class ToolRepository {
  async getAllTools() {
    return await prisma.tool.findMany({
      include:{
        tags:true
      }
    });
  }

  async createTool(toolData:any) {
    const {title,link,description,tags} = toolData;
    const createdTool = await prisma.tool.create({data:{
      title,
      link,
      description,
      tags: {
        create: tags.map((tagName:string) => ({ name: tagName })),
      },
    },
    include: {
      tags: true,
    },
  })
      return createdTool;
  }

  async removeTool(toolId:any) {
    return await prisma.tool.delete({where:{
      id:parseInt(toolId)
    }})
  }

  async getToolsByTags( tagName:string){
    const toolsWithTags = await prisma.tool.findMany({
      where: {
        tags: {
          some: {
            name: tagName,
          },
        },
      },
    })
    return toolsWithTags;
  }

}

export default ToolRepository;