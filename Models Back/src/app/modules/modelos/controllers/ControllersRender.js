import ListModels from "../Services/ServiceListModelos";
class ControllersAuthRender {

  async getListMods(request, response) {
    let listModels = new ListModels();

    listModels = await listModels.execute({ sexy : 'F'}); 

    console.log(listModels);
    const error = request.flash('error');
  
    return response.render('dashboard/mods/femeninos.ejs', {
      modeMenu: 'models/f',
      error,
      listModels,
      user : request.session.data.user_logger
    });
  }

  async getListMMods (request, response) {
    let listModels = new ListModels();

    listModels = await listModels.execute({ sexy : 'M'}); 

    const error = request.flash('error');
  
    return response.render('dashboard/mods/masculino.ejs', {
      modeMenu: 'models/m',
      error,
      listModels,
      user : request.session.data.user_logger
    });
  }

  getAddMods(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/mods/add.ejs', {
      modeMenu: 'models/add',
      error,
      user : request.session.data.user_logger
    });
  }
  
}

export default ControllersAuthRender;