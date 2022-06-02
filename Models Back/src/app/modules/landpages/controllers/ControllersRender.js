
class ControllersRender {

  async getWelcome(request, response) {
    return response.render('page/welcome.ejs');
  }
  
}

export default ControllersRender;