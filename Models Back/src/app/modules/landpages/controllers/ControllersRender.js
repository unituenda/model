
class ControllersRender {

  async getWelcome(request, response) {
    return response.render('page/welcome.ejs');
  }

  async getIndex(request, response) {
    return response.render('page/index.ejs', {
      path: 'index'
    })
  }
  
  async getAbout(request, response) {
    return response.render('page/about.ejs', {
      path: 'about'
    })
  }

  async getService(request, response) {
    return response.render('page/services.ejs', {
      path: 'service'
    })
  }
  
}

export default ControllersRender;