import News from '../models/news';

class CreateNews {
  async execute({ title, content, photo_path, user_id, category }){
    const news = await News.create({ 
      title, 
      content, 
      photo_path, 
      user_id, 
      category
    });

    return news;
  }
}

export default CreateNews;