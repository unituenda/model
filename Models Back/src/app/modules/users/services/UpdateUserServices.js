import User from "../models/users";

class UpdateUsers{
  async execute({ id, avatar }) {
    const user = await User.findOne({
      where: { id }
    });
    
    (await user).update({ avatar });
    return user;
  }
}

export default UpdateUsers;