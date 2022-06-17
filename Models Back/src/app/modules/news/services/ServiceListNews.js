import News from '../models/news';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

class ListNews {
  async execute(){
    let allNews = await News.findAll();

    allNews = allNews.map(item => (
        {
          id : item.id,
          title: item.title,
          category: item.category,
          content: item.content,
          createdAt : format(
            item.createdAt,
            "'dia' dd 'de' MMMM', às' H:mm'h' ",
            { locale: pt }
          )
        }
    ));

    return allNews;
  }
}

export default ListNews;