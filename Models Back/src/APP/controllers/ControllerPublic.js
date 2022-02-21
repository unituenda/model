class ControllerPublic {
  getIndex(req, res){
    res.render('index');
  }
}

export default new ControllerPublic();