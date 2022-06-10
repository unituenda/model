class ControllersUser {
  updateAvatar(request, response) {
    const { filename: avatar } = request.file;
    console.log(avatar);
  }
}

export default ControllersUser;