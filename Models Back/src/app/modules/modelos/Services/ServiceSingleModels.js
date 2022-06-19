import Mods from "../model/Models";

class SingleModels {
  async execute({ id }){
    const models = await Mods.findAll({
      where: { id },
    });
    return models[0];
  }
}

export default SingleModels;