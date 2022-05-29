import CreateNews from '../services/ServiceCreateNews';
import UpdateNews from '../services/ServiceUpdateNews';

class ControllersNews {
  async store(request, response){
    const { filename: photo_path } = request.file;
    const {title, content, category} = request.body;
    console.log(request.session.data.user_id, {title, content, category});
    const createNews = new CreateNews();
    await createNews.execute({
      content,
      photo_path,
      title,
      category,
      user_id: request.session.data.user_id
    });

    response.redirect('/admin/news/add');
  }

  async update(request, response) {
    const { id, title, content, category } = request.body;
    const news = new UpdateNews();
    await news.execute({
      id,
      title,
      content,
      category
    });

    response.redirect('/admin/news/edit/' + id);
  }
}

export default ControllersNews;