import CreateNews from '../services/ServiceCreateNews';

class ControllersNews {
  store(request, response){
    const { filename: photo_path } = request.file;

    console.log(photo_path);
  }
}

export default ControllersNews;