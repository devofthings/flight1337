export interface Flight {
    id: number;
    from: string;
    to: string;
    date: string; // ISO: 2022-12-24T17:00+02:00
    delayed: boolean;
}