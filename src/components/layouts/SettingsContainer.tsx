import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { PageContainer } from './PageContainer';

type SettingsContainerProps = {
    children: React.ReactNode;
    className?: string;
    title?: string;
    description?: string;
};

export const SettingsContainer: React.FC<SettingsContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <Card className={`border-none shadow-none ${className}`}>
            <CardHeader className="flex flex-col gap-y-3">
                <CardTitle className="text-zinc-900 capitalize">
                    Settings {props.title && '-'} {props.title}
                </CardTitle>
                <CardDescription className="text-md">
                    {props.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PageContainer>{children}</PageContainer>
            </CardContent>
        </Card>
    );
};
