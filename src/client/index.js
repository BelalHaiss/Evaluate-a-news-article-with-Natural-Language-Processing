import { validateUrl } from './js/checkURL';
import { handleSubmit } from './js/handleSubmit';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
const regeneratorRuntime = require('regenerator-runtime');

const form = document.querySelector('.btn-submit');
const input = document.querySelector('#article-url');
form.addEventListener('click', (e) => {
  e.preventDefault();

  return handleSubmit(input.value);
});

// export { handleSubmit, validateUrl };
