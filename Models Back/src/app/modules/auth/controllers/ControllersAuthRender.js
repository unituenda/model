class ControllersAuthRender {
  getAdminSignup(request, response) {
    response.render('dashboard/cadastrar');
  }
  getAdminSignin(request, response) {
    response.render('dashboard/login');
  }
}

export default ControllersAuthRender;