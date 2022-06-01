import CreateModels from '../Services/ServiceCrateModels';

class ControllerModels {
  async store(request, response){
    const dados = request.body;
    const file = request.files;

    const createModels = new CreateModels();
    await createModels.execute({ ...dados, photo : `${file}`})
    
    
    response.redirect('/admin/models/add');
    
  }
}

export default ControllerModels;