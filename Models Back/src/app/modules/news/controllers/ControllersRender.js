
class ControllersAuthRender {
  async getAddNews(request, response) {
    return response.render('dashboard/addNews.ejs', {
      modeMenu: 'news/add'
    });
  }
  
}

export default ControllersAuthRender;