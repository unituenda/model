class ControllersRender {
  getIndex(request, response) {
    const error = request.flash('error');

    return response.render('dashboard/index.ejs', {
      error
    });
  }
 
}

export default ControllersRender;