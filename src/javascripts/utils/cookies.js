/**
 * Cookies - A small class to manipulate cookies from javascript
 */

class Cookies {
  /**
   * Set / Overwrite a cookie value
   *
   * @param name
   * @param value
   * @param days    OPTIONAL Days till this cookie will stay valid. Default is current session
   * @param path    OPTIONAL Domain root will be used by default
   */

  static set(name = '', value = '', days, path) {
    if (name.length) {
      let expires = '';
      const dir = path || '/';

      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires= ${date.toGMTString()}`;
      }

      document.cookie = `${name}=${value}${expires}; path=${dir}`;
    }
  }

  /**
   * Retrive a cookie value
   *
   * @param name
   * @return String | null
   */

  static get(name = '') {
    let value;
    if (name.length) {
      const nameEq = `${name}=`;
      const cookies = document.cookie.split(';');
      cookies.forEach((co) => {
        let c = co;
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEq) === 0) value = c.substring(nameEq.length, c.length);
      });
    }

    return value || null;
  }

  /**
   * Remove a cookie
   *
   * @param name
   */

  static delete(name = '') {
    if (name.length) {
      Cookies.set(name, '', -1);
    }
  }
}

export default Cookies;
