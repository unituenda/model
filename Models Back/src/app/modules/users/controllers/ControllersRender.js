import Mister from '../../modelos/model/Models';
import User from '../models/users';
import News from '../../news/models/news';
class ControllersRender {
  async getIndex(request, response) {
    const error = request.flash('error');
    const mister = await Mister.count();
    const user = await User.count();
    const news = await News.count();

    return response.render('dashboard/index.ejs', {
      error,
      modeMenu: 'dashboard',
      user : request.session.data.user_logger,
      mister,
      users : user,
      news
    });
  }
  async getUser(request, response) {
    const error = request.flash('error');
    const news = await News.count();
    return response.render('dashboard/users/profile.ejs', {
      error,
      modeMenu: 'user',
      user : request.session.data.user_logger,
      news
    });
  }
}

export default ControllersRender;