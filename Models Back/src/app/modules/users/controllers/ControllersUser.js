import UpdateUsers from "../services/UpdateUserServices";
class ControllersUser {
  async update(request, response) {
    const file = request.file;
    try {
      const avatar = file.filename;
      const { name, email } = request.body;
      
      const user = new UpdateUsers();
      let id = request.session.data.user_id;
      
      const newUser = await user.execute({ id, avatar });
     
      request.session.data.user_logger = newUser;
    
      request.flash('error', { type : 'success' , message : 'Sucesso na actualização da foto !'});
      response.redirect('/admin/user');
    } catch(err) {
      request.flash('error', { type : 'error' , message : 'Erro na actualização da foto !'});
      response.redirect('/admin/user');
    }
   
  }
}

export default ControllersUser;