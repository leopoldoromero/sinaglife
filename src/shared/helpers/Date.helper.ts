import moment from 'moment';

export type DateMeasurement = 'seconds' | 'minutes' | 'days' | 'months' | 'years';
export type DateFormat = 'DD-MM-YYYY' | 'YYYY-MM-DD' | 'MM/DD/YYYY';

export class DateHelper {
    static ACCEPTED_FORMATS: Array<DateFormat> = ['DD-MM-YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY'];
    
    public static toDate(value: string): Date {
        return moment(value, this.ACCEPTED_FORMATS).toDate();
    }

    public static toString(date: Date, format: DateFormat = this.ACCEPTED_FORMATS[0]): string {
        return moment(date, this.ACCEPTED_FORMATS).format(format);
    }

    public static format(date: Date | string, format: DateFormat = this.ACCEPTED_FORMATS[0]): string {
        return moment(date, this.ACCEPTED_FORMATS).format(format);
    }

    public static isSameOrBefore(date: Date | string, dateToCompare?: string | Date): boolean {
        return (dateToCompare ? moment(dateToCompare, this.ACCEPTED_FORMATS) : moment()).isSameOrBefore(
            moment(date, this.ACCEPTED_FORMATS),
        );
    }

    public static diff(
        lowerDate: Date | string,
        upperDate: Date | string,
        mesaurment: DateMeasurement = 'days',
    ): number {
        return (lowerDate ? moment(lowerDate, this.ACCEPTED_FORMATS) : moment()).diff(
            moment(upperDate, this.ACCEPTED_FORMATS),
            mesaurment,
        );
    }

    public static instance(date: Date | string = new Date()) {
        return moment(date);
    }
}
