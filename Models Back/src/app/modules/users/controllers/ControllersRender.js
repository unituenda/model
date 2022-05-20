class ControllersRender {
  getIndex(request, response) {

    return response.render('dashboard/index.ejs', {
      error: request.flash('error', { type : 'success' , message : 'Logado com success'})
    });
  }
 
}

export default ControllersRender;