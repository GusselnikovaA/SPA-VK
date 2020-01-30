export default {
  render(templateName, model) { //header
    trmplateName = templateName + 'Template';//headerTemplate

    const templateElement = document.getElementById(templatename);
    const templateSource = templateElement.innerHTML;
    const renderFn = Handlebars.compile(templateSource);

    return renderFn(model);
  }
};

// view.render('header', {first_name: 'Анна'})