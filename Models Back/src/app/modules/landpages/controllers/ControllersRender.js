
import SinglePost from '../../news/services/ServiceSingleNews';
import UpdateNews from '../../news/services/ServiceUpdateNews';
class ControllersRender {

  async getWelcome(request, response) {
    return response.render('page/welcome.ejs');
  }

  async getIndex(request, response) {
    return response.render('page/index.ejs', {
      path: 'index'
    })
  }
  
  async getAbout(request, response) {
    return response.render('page/about.ejs', {
      path: 'about'
    })
  }

 

  async getService(request, response) {
    return response.render('page/services.ejs', {
      path: 'service'
    })
  }

  async getMale(request, response) {
    return response.render('page/male.ejs', {
      path: 'modelos'
    })
  }


  async getFemale(request, response) {
    return response.render('page/female.ejs', {
      path: 'modelos'
    })
  }

  async getInscription(request, response) {
    return response.render('page/inscription.ejs', {
      path: 'inscription'
    })
  }

  async getAny(request, response) {
    return response.render('page/ani.ejs', {
      path: 'event'
    })
  }

  async getSolidary(request, response) {
    return response.render('page/solidary.ejs', {
      path: 'event'
    })
  }

  async getMister(request, response) {
    return response.render('page/mister.ejs', {
      path: 'event'
    })
  }

  async getCasting(request, response) {
    return response.render('page/casting.ejs', {
      path: 'event'
    })
  }

  async getBlog(request, response) {
    return response.render('page/blog.ejs', {
      path: 'blog'
    })
  }

  async getContact(request, response) {
    return response.render('page/contact.ejs', {
      path: 'contact'
    })
  } 

  async getPost(request, response) {
    const { id } = request.params;
    const singlePost = new SinglePost();
    const updatePost = new UpdateNews();

   
    let post = await singlePost.execute({ id });
    await updatePost.execute({ id : post.id, views : (post.views || 0) + 1 });
    post.views = (post.views || 0) + 1;
    return response.render('page/post.ejs', {
      path: 'blog',
      post,
    })
  }
}


export default ControllersRender;