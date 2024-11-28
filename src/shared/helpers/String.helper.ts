export class StringHelper {
    static formateEmptySpacesToUrl(value: string) {
        return value?.replaceAll(' ', '-').toLowerCase();
    }

    static getValueFromUrl(key: string): string {
        const url = window.location.href;
        const formattedUrl = typeof url === 'string' ? new URL(url) : url;
        return formattedUrl.searchParams.get(key) || '';
    }
      
}