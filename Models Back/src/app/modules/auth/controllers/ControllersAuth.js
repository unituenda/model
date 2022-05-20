import CreateUSer from '../../users/services/CreateUserServices';

class ControllersAuth {
  async store(request, response) {
    const { name, email, password } = request.body;
    
    const createUSer = new CreateUSer();
    await createUSer.execute({ 
      name, 
      email, 
      password 
    });
    response.redirect('/signup');
  }
}

export default ControllersAuth;