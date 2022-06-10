import SingleNews from "../services/ServiceSingleNews";
import ListNews from "../services/ServiceListNews";

class ControllersAuthRender {
  getAddNews(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/news/add.ejs', {
      modeMenu: 'news/add',
      error,
      user : request.session.data.user_logger
    });
  }

  async getListNews(request, response) {
    const listNews = new ListNews();
    const allNews = await listNews.execute();

    const error = request.flash('error');
  
    return response.render('dashboard/news/list.ejs', {
      modeMenu: 'news/list',
      error,
      allNews,
      user : request.session.data.user_logger
    });
  }

  async getEdit(request, response) {
    const { id } = request.params;
    let news = new SingleNews();
    news = await news.execute({ id });
    const error = request.flash('error');


    return response.render('dashboard/news/edit.ejs', {
      modeMenu: 'news/add',
      error,
      news,
      user : request.session.data.user_logger
    });
  }
  
}

export default ControllersAuthRender;