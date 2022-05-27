import News from '../models/news';

class ControllersAuthRender {
  getAddNews(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/news/add.ejs', {
      modeMenu: 'news/add',
      error
    });
  }

  async getListNews(request, response) {
    const allNews = await News.findAll();
    const error = request.flash('error');

    return response.render('dashboard/news/list.ejs', {
      modeMenu: 'news/list',
      error,
      allNews
    });
  }
  
}

export default ControllersAuthRender;