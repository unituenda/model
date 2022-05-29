import News from "../models/news";

class SingleNews {
  async execute({ id }){
    const news = await News.findByPk(id);
    return news;
  }
}

export default SingleNews;