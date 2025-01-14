export type Trend = 'increase' | 'decrease' | 'same';

export type StatsResponse = {
    length: number;
    trend: Trend;
    percentage: number;
};
