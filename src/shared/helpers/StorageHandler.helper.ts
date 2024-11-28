export class StorageHandlerHelper {
  static save(key: string, value: unknown): void {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('An unknown error occurred while saving to storage.');
    }
  }

  static retrieve<T>(key: string): T | undefined {
    try {
      const state = localStorage.getItem(key);
      if (state === null) return undefined;
      return JSON.parse(state) as T;
    } catch (error) {
      if (error instanceof Error) {
        return {
          error: error.message,
        } as unknown as T;
      }
      return undefined;
    }
  }

  static clear(key?: string): void | { error: string } {
    try {
      return key ? localStorage.removeItem(key) : localStorage.clear();
    } catch (error) {
      if (error instanceof Error) {
        return {
          error: error.message,
        };
      }
      return {
        error: 'An unknown error occurred while clearing storage.',
      };
    }
  }
}
