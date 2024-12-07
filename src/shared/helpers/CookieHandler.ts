export class CookieHandlerHelper {
  static set(name: string, value: string, days = 365) {
    if (typeof window !== 'undefined') {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `${name}=${value};${expires};path=/`;
    } else {
      console.warn('Setting cookies on the server must be handled in response headers.');
    }
  }

  static get(name: string): string | null {
    if (typeof window !== 'undefined') {
      const cookies = document.cookie.split(';');
      return cookies.find((cookie) => cookie.includes(name))?.split('=')[1] || null;
    }
  
    console.warn('Getting cookies on the server must be handled in response headers.');
    return null;
  }

  static clear(name: string): void {
    if (typeof window !== 'undefined') {
      document.cookie = `${name}=; Max-Age=-99999999;`;
    } else {
      console.warn('Clearing cookies server-side must be handled via response headers.');
    }
  }
}
