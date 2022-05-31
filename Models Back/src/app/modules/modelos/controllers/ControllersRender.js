
class ControllersAuthRender {

  async getListMods(request, response) {
    const error = request.flash('error');
  
    return response.render('dashboard/mods/femeninos.ejs', {
      modeMenu: 'models/f',
      error
    });
  }

  getAddMods(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/mods/add.ejs', {
      modeMenu: 'models/add',
      error
    });
  }
  
}

export default ControllersAuthRender;