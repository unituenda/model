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
      listModels
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