import { type ReactNode } from 'react';
import { cn } from '~/lib/utils';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Trend } from '~/types/api';

interface BadgeProps {
    icon: ReactNode;
    iconBackground?: string;
    label: string;
    stat: string | number;
    statLoading?: boolean;
    trend?: Trend;
    percentage?: number;
    trendLabel?: string;
    error?: string;
    rootClassName?: string;
    iconWrapperClassName?: string;
    statsClassName?: string;
    trendClassName?: string;
}

export function DashboardBadge({
    icon,
    iconBackground = 'bg-blue-500',
    label,
    stat,
    statLoading,
    trend,
    percentage,
    trendLabel,
    rootClassName,
    iconWrapperClassName,
    statsClassName,
    trendClassName,
}: BadgeProps) {
    const trendColor = trend
        ? trend === 'increase'
            ? 'text-green-500'
            : trend === 'decrease'
              ? 'text-red-500'
              : 'text-gray-500'
        : '';

    const percentageColor = percentage
        ? percentage > 0
            ? 'text-green-500'
            : 'text-red-500'
        : '';

    return (
        <Card
            className={cn(
                'relative bg-white text-gray-700 flex flex-col',
                rootClassName,
            )}
        >
            <div
                className={cn(
                    'bg-clip-border mx-4 rounded-xl overflow-hidden shadow-lg absolute -mt-4 z-10',
                    'grid h-16 w-16 place-items-center',
                    iconBackground,
                    iconWrapperClassName,
                )}
            >
                {icon}
            </div>

            <CardContent
                className={cn('p-4 text-right flex-none', statsClassName)}
            >
                <p className="block antialiased text-sm leading-normal font-normal text-blue-gray-600">
                    {label}
                </p>
                <h4 className="block antialiased tracking-normal text-2xl font-semibold leading-snug text-blue-gray-900">
                    {statLoading ? (
                        <span className="inline-block w-16 h-8 bg-gray-200 rounded animate-pulse" />
                    ) : !stat ? (
                        '--'
                    ) : (
                        stat
                    )}
                </h4>
            </CardContent>

            {percentage !== undefined && trend && trendLabel && (
                <CardFooter
                    className={cn(
                        'border-t border-blue-gray-50 p-4 flex-1',
                        trendClassName,
                    )}
                >
                    <p className="block antialiased text-base leading-relaxed font-normal text-blue-gray-600">
                        <span className={`capitalize ${trendColor}`}>
                            {trend}
                        </span>{' '}
                        <strong className={percentageColor}>
                            {percentage}%
                        </strong>
                        &nbsp;{trendLabel}
                    </p>
                </CardFooter>
            )}
        </Card>
    );
}

export default DashboardBadge;
