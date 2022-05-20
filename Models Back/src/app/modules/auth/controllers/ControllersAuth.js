import CreateUSer from '../../users/services/CreateUserServices';

class ControllersAuth {
  async store(request, response) {
    const { name, email, password } = request.body;
    const createUSer = new CreateUSer({ 
      name, 
      email, 
      password 
    });
    await createUSer.execute();
    response.redirect('/');
  }
}

export default ControllersAuth;