class ControllersRender {
  getIndex(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/index.ejs', {
      error,
      modeMenu: 'dashboard'
    });
  }
  getUser(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/users/profile.ejs', {
      error,
      modeMenu: 'dashboard'
    });
  }
}

export default ControllersRender;