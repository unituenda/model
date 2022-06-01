import Models from '../model/Models';

class CreateModels {
  async execute({ name,
    age,
    sexy,
    height,
    chest,
    waist,
    hip,
    shoe,
    eyes,
    hair,
    skin,
    experience,
    photo
  }){
    const mods = await Models.create({ name,
      age,
      sexy,
      height,
      chest,
      waist,
      hip,
      shoe,
      eyes,
      hair,
      skin,
      experience,
      photo
    });

    return mods;

  }
}

export default CreateModels;