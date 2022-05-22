
class ControllersAuthRender {
  async getAddNews(request, response) {
    return response.render('dashboard/addNews.ejs');
  }
  
}

export default ControllersAuthRender;