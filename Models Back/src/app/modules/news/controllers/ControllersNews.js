import CreateNews from '../services/ServiceCreateNews';
import DeleteNews from '../services/ServiceDeleteNews';
import UpdateNews from '../services/ServiceUpdateNews';
import IndexNews from '../services/ServiceIndexNews';
class ControllersNews {
  async store(request, response){
    const { filename: photo_path } = request.file;
    const {title, content, category} = request.body;
   
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
    request.flash('error', { type : 'success' , message : 'Actualizado com sucesso !'});
    const news = new UpdateNews();
    await news.execute({
      id,
      title,
      content,
      category
    });

    response.redirect('/admin/news/edit/' + id);
  }
  async delete(request, response) {
    const { id } = request.params;
    
    const deleteNews = new DeleteNews();
    await deleteNews.execute({ id });

    return response.redirect('/admin/news/list' );
  }
  async index(request, response){
    const { page, limit } = request.query;
    console.log(page, limit)
    let indexNews = new IndexNews();

    indexNews = await indexNews.execute({ page, limit })    
     
     return response.json(indexNews);
  }
}

export default ControllersNews;