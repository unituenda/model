import ListNews from "../services/ServiceListNews";

class ControllersAuthRender {
  getAddNews(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/news/add.ejs', {
      modeMenu: 'news/add',
      error
    });
  }

  async getListNews(request, response) {
    const listNews = new ListNews();
    const allNews = await listNews.execute();
 
    console.log(allNews);
    const error = request.flash('error');
  
    return response.render('dashboard/news/list.ejs', {
      modeMenu: 'news/list',
      error,
      allNews
    });
  }
  
}

export default ControllersAuthRender;