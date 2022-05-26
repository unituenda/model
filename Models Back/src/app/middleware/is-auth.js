module.exports = (req, res, next) => {
  if(!req.session.data){
    return res.redirect('/signin');
  }
  if (!req.session.data.isLoggedIn) {
    return res.redirect('/signin');   
  }
  next()
}