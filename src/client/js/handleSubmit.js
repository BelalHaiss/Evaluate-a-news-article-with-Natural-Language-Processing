import axios from 'axios';
import { validateUrl } from './checkURL';

async function handleSubmit(url) {
  if (!validateUrl(url)) return alert('check the url again');
  try {
    const res = await axios.post('http://localhost:8081/add-url', { url });
    const summary = res.data.data;

    if (summary && summary.length > 1) {
      document.querySelector('#formResults').className = '';
      document.querySelector('#text-summary').innerHTML = summary;
    } else {
      document.querySelector('#formResults').className = 'hidden';
      alert('the article is empty or it`s wrong article');
    }
  } catch (error) {
    return alert(error.message);
  }
}

export { handleSubmit };
