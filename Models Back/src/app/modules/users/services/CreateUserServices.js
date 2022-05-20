
import User from '../../users/models/users';
class CreateUsers {
  async execute({ name, email, password_hash, nevil_sessions = 1}){
    console.log(name);
    const user = await User.create({ 
      name, 
      email, 
      password_hash, 
      nevil_sessions
    });

    return user;
  }
}

export default CreateUsers;