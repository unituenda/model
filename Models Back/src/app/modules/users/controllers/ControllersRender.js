class ControllersRender {
  getIndex(request, response) {
    
    return response.render('dashboard/index.ejs');
  }
 
}

export default ControllersRender;