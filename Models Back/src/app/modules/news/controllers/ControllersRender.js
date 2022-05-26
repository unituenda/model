
class ControllersAuthRender {
  async getAddNews(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/news/add.ejs', {
      modeMenu: 'news/add',
      error
    });
  }

  async getListNews(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/news/list.ejs', {
      modeMenu: 'news/list',
      error
    });
  }
  
}

export default ControllersAuthRender;