import News from "../models/news";

class UpdateNews{
  async execute({ id, title, content, category, views }) {
    const news = News.findOne({
      where: { id }
    });
    (await news).update({ title, content, category, views});
    return news;
  }
}

export default UpdateNews;