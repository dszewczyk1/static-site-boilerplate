import Cookies from '../../utils/cookies';
// import Tabs from 'tabs/tabs';
// import CookieConsentSDK from './cookie-consent-sdk';

export const COOKIE_CATS = window.cookieCategories || {
  necessary: 1,
};
export const COOKIE_NAME = 'cc';

class CookieConsent {
  constructor() {
    this.hasConsentOpened = false;
    this.hasSettingsOpened = false;
    this.hasSettingsFetched = false;
    this.el = document.querySelector('.cc');
    this.elCookieSettings = null;
    this.elBody = document.querySelector('body');
    this.cookie = Cookies.get(COOKIE_NAME) || false;

    // global variable - can be used outside of our script
    // window.YITCookieConsent = new CookieConsentSDK();
    // inform other places about consent cookie
    // window.YITCookieConsent.consentChanged();
    this.init();
  }

  init() {
    // depending if user already set cookie consent
    if (!this.cookie) {
      this.showCookieConsent();
    }
  }

  // shows cookie consent
  showCookieConsent() {
    this.el.classList.add('is-open');
    // this.elBody.classList.add('overflow-hidden');
    this.hasConsentOpened = true;
  }

  // close cookie consent popup
  closeCookieConsent() {
    this.hasConsentOpened = false;
    this.el.classList.remove('is-open');
    this.elBody.classList.remove('overflow-hidden');
  }
}

export default CookieConsent;
