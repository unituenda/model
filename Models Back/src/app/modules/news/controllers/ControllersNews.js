import CreateNews from '../services/ServiceCreateNews';

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
}

export default ControllersNews;