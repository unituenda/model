import CreateModels from '../Services/ServiceCrateModels';
import IndexMods from '../Services/ServiceModelsNews';
class ControllerModels {
  async store(request, response){
    const dados = request.body;
    const [file1, file2, file3] = request.files;

    try {
      const createModels = new CreateModels();
      await createModels.execute({ 
        ...dados, 
        photo : `${[file1.filename, file2.filename, file3.filename]
        }`})
      
      request.flash('error', { type : 'success' , message : 'Cadastrado com sucesso !'});
      return response.redirect('/admin/models/add');
    } catch(err){
      request.flash('error', { type : 'error' , message : 'Usário não cadastrado !'});
      return response.redirect('/admin/models/add');
    }
    
    
  }
  async index(request, response){
    const { page, limit } = request.query;
    let indexMods = new IndexMods();

    indexMods = await indexMods.execute({ page, limit, sexy : 'F' })    
     
     return response.json(indexMods);
  }
}

export default ControllerModels;