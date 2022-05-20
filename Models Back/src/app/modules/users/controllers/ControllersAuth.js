class ControllersAuth {
  store(request, response) {
    const { name, email, password } = request.body;
    console.log(name, email, password);
  }
}

export default ControllersAuth;