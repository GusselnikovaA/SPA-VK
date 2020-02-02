export default {

  login(appId, perms){
    return new Promise ( (resolve, reject) => {
      VK.init({
        apiId: appId
      });
      VK.UI.button('vk__button');

      VK.Auth.login(response => {
        if (response.session) {
            resolve(response);
        } else {
            reject (new Error( 'Не удалось авторизоваться'));
        }
      }, perms);
    });
  },

  callApi(method, params) {
    params.v = params.v || '5.78';

    return new Promise( (resolve, reject) => {
      VK.api(method, params,response => {
        if (response.error) {
          reject(new Error(response.error.error_msg));
        } else {
          resolve(response.response);
        }
      });
    });
  },
  getUser(params = {}) {
    return this.callApi('users.get', params);
  }, //дай мне список данных пользователя
  getFriends(params = {}) {
    return this.callApi('friends.get', params);
  }, //дай мне список моих друзей
  getNews(params = {}) {
    return this.callApi('newsfeed.get', params);
  }, //дай мне список моих новостей
  // searchFriends(params = {}) {
  //   return this.callApi('friends.search', params);
  // } //дай мне поиск по моим друзьям
};

// callApi('users.get', {fields: 'photo_id'})
// callApi('friends.get', {count})