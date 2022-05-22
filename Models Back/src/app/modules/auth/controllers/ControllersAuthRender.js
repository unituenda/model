import User from '../../users/models/users';
class ControllersAuthRender {
  async getAdminSignup(request, response) {
    const exitUSer = await User.findAll();

    if(!!exitUSer[0]){
      return response.redirect('/signin');
    }
    return response.render('dashboard/cadastrar');
  }
  async getAdminSignin(request, response) {
    const exitUSer = await User.findAll();
    if(!exitUSer[0]){
      return response.redirect('/signup');
    }
   const error = request.flash('error');

    return response.render('dashboard/login', {
      error
    });
  }
}

export default ControllersAuthRender;