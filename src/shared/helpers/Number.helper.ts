export class NumberHelper {
    static formatAmount(amount: number, dec = 2): string {
        if (typeof amount !== 'number') return parseFloat(amount).toFixed(dec);
        return amount.toFixed(dec);
      };
}