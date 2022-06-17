import News from '../models/news';
import User from '../../users/models/users';

class IndexNews {
  async execute({ page, limit = 3 }){
    const news = await News.findAll({
      order: ['created_at'],
      attributes: ['id', 'title', 'content', 'photo_path', 'views', 'category'],
      limit,
      offset: (page - 1) * limit,
      include: [
        {
          model: User,
          foreignKey: 'user_id',
          attributes: ['id', 'name']
        },
      ],
    });
    return news;
  }
}

export default IndexNews;