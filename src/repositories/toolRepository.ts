import ToolEntity from '../entities/toolEntity';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

class ToolRepository {
  async getAllTools() {
    const toolsData = await prisma.tool.findMany();
    return toolsData.map(tool => new ToolEntity(tool));
  }

  async createTool(toolData:any) {
    const newToolData = await prisma.tool.create({ data: toolData });
    return new ToolEntity(newToolData);
  }

  async removeTool(toolId:any) {
    const removedToolData = await prisma.tool.delete({
      where: {
        id: toolId,
      },
    });
    return removedToolData;
  }
}

export default ToolRepository;