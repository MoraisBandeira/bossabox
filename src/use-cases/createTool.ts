import ToolRepository from '../repositories/toolRepository';

const toolRepository = new ToolRepository();

const createTool = async (toolData:any) => {
  return toolRepository.createTool(toolData);
};

export default createTool;