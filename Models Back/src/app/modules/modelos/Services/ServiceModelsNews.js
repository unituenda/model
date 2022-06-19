import Mods from '../model/Models';

class IndexMods {
  async execute({ page, limit = 3, sexy }){
    const mods = await Mods.findAll({
      where: { sexy },
      order: ['created_at'],
      limit,
      offset: (page - 1) * limit,
    });
    return mods;
  }
}

export default IndexMods;