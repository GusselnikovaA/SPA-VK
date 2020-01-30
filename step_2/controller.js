import Model from './model.js';

export default {
  async friendsRoute() {
    const friends = await Model.getFriends( params: { fields: 'photo_100, bdate' });
    console.log(friends);
  },
  async newsRoute() {
    const news = await Model.getNews( params: { fields: 'post', count: 20 });
    console.log(news);
  }
};