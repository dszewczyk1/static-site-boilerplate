import './dynamic.scss';

export default class Dynamic {
  constructor() {
    document.querySelector('.js-dynamic').insertAdjacentHTML('beforeend', '<p><strong>Dynamic component loaded</strong></p>');
  }
}
