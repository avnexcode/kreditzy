import { cn } from '~/lib/utils';
import { type ReactNode } from 'react';

interface BadgeProps {
    icon: ReactNode;
    iconBackground?: string;
    label: string;
    stat: string | number;
    statLoading: boolean;
    trend: number;
    trendLabel: string;
    rootClassName?: string;
    iconWrapperClassName?: string;
    statsClassName?: string;
    trendClassName?: string;
}

export function Badge({
    icon,
    iconBackground = 'bg-blue-500',
    label,
    stat,
    statLoading,
    trend,
    trendLabel,
    rootClassName,
    iconWrapperClassName,
    statsClassName,
    trendClassName,
}: BadgeProps) {
    const trendColor = trend > 0 ? 'text-green-500' : 'text-red-500';
    return (
        <div
            className={cn(
                'relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md',
                rootClassName,
            )}
        >
            {/* Icon Section */}
            <div
                className={cn(
                    'bg-clip-border mx-4 rounded-xl overflow-hidden shadow-lg absolute -mt-4',
                    'grid h-16 w-16 place-items-center',
                    iconBackground,
                    iconWrapperClassName,
                )}
            >
                {icon}
            </div>

            {/* Stats Section */}
            <div className={cn('p-4 text-right', statsClassName)}>
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    {label}
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                    {statLoading ? '--' : stat}
                </h4>
            </div>

            {/* Trend Section */}
            <div
                className={cn(
                    'border-t border-blue-gray-50 p-4',
                    trendClassName,
                )}
            >
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong className={trendColor}>{trend}%</strong>
                    &nbsp;{trendLabel}
                </p>
            </div>
        </div>
    );
}
