import ToolRepository from '../repositories/toolRepository';

const toolRepository = new ToolRepository();

const getTools = async () => {
  return toolRepository.getAllTools();
};

export default getTools;