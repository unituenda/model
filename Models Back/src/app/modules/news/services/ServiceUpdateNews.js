import News from "../models/news";

class UpdateNews{
  async execute({ id, title, content, category }) {
    const news = News.findOne({
      where: { id }
    });
    await news.update({ title, content, category});
    return news;
  }
}

export default UpdateNews;