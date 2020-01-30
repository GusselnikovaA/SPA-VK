import Model from './model.js';
import View from './view.js';

(async () => {
  try {
    const header = document.querySelector(selectors: '#header');
    await Model.login(appId: 7301737, perms: 2 | 8192);
    const [me] = await Model.getUser(params: {name_case: 'gen' });

    header.innerHtml = View.render(templateName: 'header', me);
  } catch (e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
  }
})();
