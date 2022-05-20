
import User from '../models/users';
class CreateUsers {
  async execute({ name, email, password, nevil_sessions}){
    const user = await User.create({ 
      name, 
      email, 
      password, 
      nevil_sessions
    });

    return user;
  }
}