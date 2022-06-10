class ControllersRender {
  getIndex(request, response) {
    const error = request.flash('error');
   
    return response.render('dashboard/index.ejs', {
      error,
      modeMenu: 'dashboard',
      user : request.session.data.user_logger
    });
  }
  getUser(request, response) {
    const error = request.flash('error');
    console.log()
    return response.render('dashboard/users/profile.ejs', {
      error,
      modeMenu: 'user',
      user : request.session.data.user_logger
    });
  }
}

export default ControllersRender;