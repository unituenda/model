
class ControllersAuthRender {
  async getAddNews(request, response) {
    return response.render('dashboard/addNews.ejs', {
      modeMenu: 'new/add'
    });
  }
  
}

export default ControllersAuthRender;