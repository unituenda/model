import News from "../models/news";

class DeleteNews {
  async execute({ id }){
    const news = await News.findByPk(id);
    news.destroy();
  }
}

export default DeleteNews;