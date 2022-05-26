
class ControllersAuthRender {
  async getAddNews(request, response) {
    return response.render('dashboard/news/addNews.ejs', {
      modeMenu: 'news/add'
    });
  }
  
}

export default ControllersAuthRender;