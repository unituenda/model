import CreateModels from '../Services/ServiceCrateModels';

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
}

export default ControllerModels;