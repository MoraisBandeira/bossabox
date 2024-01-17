import ToolRepository from '../repositories/toolRepository';

const toolRepository = new ToolRepository();

const getToolsByTags = async (tag:string) => {
  return toolRepository.getToolsByTags(tag);
};

export default getToolsByTags;