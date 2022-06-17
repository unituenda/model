import News from "../models/news";
import User from '../../users/models/users';
class SingleNews {
  async execute({ id }){
    const news = await News.findAll({
      where: { id },
      include: [
        {
          model: User,
          foreignKey: 'user_id',
          attributes: ['id', 'name']
        },
      ],
    });
    return news[0];
  }
}

export default SingleNews;