import CreateNews from '../services/ServiceCreateNews';

class ControllersNews {
  store(request, response){
    const { filename: photo_path } = request.file;
    const {title, content} = request.body;

    const createNews = new CreateNews();
    createNews.execute({
      content,
      photo_path,
      title,
      user_id: request.session.data.user_id
    })
  }
}

export default ControllersNews;