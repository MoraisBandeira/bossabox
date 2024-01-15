import ToolRepository from '../repositories/toolRepository';

const toolRepository = new ToolRepository();

const removeTool = async (toolId:number) => {
  return toolRepository.removeTool(toolId);
};

export default removeTool;