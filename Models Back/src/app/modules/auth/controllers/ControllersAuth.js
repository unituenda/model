import CreateUSer from '../../users/services/CreateUserServices';
import User from '../../users/models/users';
class ControllersAuth {
  async store(request, response) {
    const { name, email, password } = request.body;
    const exitUSer = await User.findAll();
    if(!!exitUSer[0]){
      return response.redirect('/signin');
    }
    const createUSer = new CreateUSer();
    await createUSer.execute({ 
      name, 
      email, 
      password_hash: password
    });
    return response.redirect('/signup');
  }
  async index(request, response) {
    const { email, password } = request.body;
    const user = await User.findOne({
      where: { email }
    });

    if(!user){
      // req.flash('error', 'Invalid email or password !');
      request.flash('error', 'Invalid email or password !');
      return response.redirect('/signin');
    }

    if (!(await user.checkPassword(password))) {
      request.flash('error', { type : 'error' , message : 'Email ou senha errada '});
      return response.redirect('/signin');
    }


    // const doMatch = await compare(password, emailExist.password);

    return response.send('Dashboard');

  }
}

export default ControllersAuth;