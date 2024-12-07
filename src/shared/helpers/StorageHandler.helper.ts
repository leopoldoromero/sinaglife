export class StorageHandlerHelper {
  static save(key: string, value: unknown): void {
    if (typeof window === 'undefined') {
      console.warn('Storage is unavailable server-side.');
      return;
    }

    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }

  static retrieve<T>(key: string): T | undefined {
    if (typeof window === 'undefined') {
      console.warn('Storage is unavailable server-side.');
      return undefined;
    }

    try {
      const state = localStorage.getItem(key);
      if (state === null) return undefined;
      return JSON.parse(state) as T;
    } catch (error) {
      console.error('Error retrieving from storage:', error);
      return undefined;
    }
  }

  static clear(key?: string): void {
    if (typeof window === 'undefined') {
      console.warn('Storage is unavailable server-side.');
      return;
    }

    try {
      if (key) {
        localStorage.removeItem(key);
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }
}
