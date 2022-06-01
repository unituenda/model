import Models from '../model/Models';

class ListModels {
  async execute({ sexy }){
    
    const mods = await Models.findAll({
      where: { sexy }
    });

    return mods;

  }
}

export default ListModels;