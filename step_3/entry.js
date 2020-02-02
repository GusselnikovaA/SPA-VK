import Model from './model.js';
import View from './view.js';
import Router from './router.js';



(async () => {
  try {
    const header = document.querySelector('#header');
    await Model.login(7301737, 2 | 8192); //сюда наверное поставить addeventlistener на кнопку войти
    const [me] = await Model.getUser({name_case: 'gen' });

    header.innerHtml = View.render('header', me);
    Router.init();
  } catch (e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
  }
})();
