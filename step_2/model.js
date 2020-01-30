export default {
  login(appId, perms){
    return new Promise ( executor: (resolve, reject) => {
      VK.init({
        apiId: appId
      });

      VK.Auth.login(response => {
        if (response.session) {
            resolve(response);
        } else {
            reject (new Error( message: 'Не удалось авторизоваться'));
        }
      }, perms);
    });
  },
  callApi(method, params) {
    params.v = params.v || '5.78';

    return new Promise( executor:(resolve, reject) => {
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
    return this.callApi(method: 'users.get', params);
  }, //дай мне список данных пользователя
  getFriends(params = {}) {
    return this.callApi(method: 'friends.get', params);
  }, //дай мне список моих друзей
  getNews(params = {}) {
    return this.callApi(method: 'newsfeed.get', params);
  }, //дай мне список моих новостей
  searchFriends(params = {}) {
    return this.callApi(method: 'friends.search', params);
  } //дай мне поиск по моим друзьям
};

// callApi('users.get', {fields: 'photo_id'})
// callApi('friends.get', {count})