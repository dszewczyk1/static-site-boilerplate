// Add your scripts here
import CookieConsent from './components/cookie-consent';

if (document.querySelector('.cc')) {
  new CookieConsent();
}

// dynamically loaded only if selector present
if (document.querySelector('.js-dynamic')) {
  import(/* webpackPreload: true */ /* webpackChunkName: "dynamic" */ './components/dynamic').then(({ default: Dynamic }) => { new Dynamic(); });
}

// creates multiple chunks from 'langs' directory - use of async-await
const currentLang = 'pl';

async function getComponent(lang) {
  const { default: translations } = await import(
    `./langs/${lang}`
    /* webpackChunkName: "lang-[index]-[request]" */
  );
  translations.current = lang;
  return translations;
}

/* webpackMode: "lazy-once" */

getComponent(currentLang).then((translations) => {
  console.log(translations);
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
  const test = translations.nonexisting ?? 'abc';

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  document.querySelector('.js-dynamic')?.insertAdjacentHTML('afterbegin', `<p>${translations.title} - ${test}</p>`);
});
