import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

export default function BadgeSkeleton() {
    return (
        <Card className="relative">
            <Skeleton className="absolute -mt-4 mx-4 h-16 w-16 rounded-xl" />

            <CardContent className="p-4 text-right">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-24 ml-auto" />
                    <Skeleton className="h-8 w-16 ml-auto" />
                </div>
            </CardContent>

            <CardFooter className="border-t">
                <Skeleton className="h-5 w-32" />
            </CardFooter>
        </Card>
    );
}
