import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Skeleton } from '~/components/ui/skeleton';

export default function BadgeSkeleton() {
    return (
        <Card className="relative bg-white">
            <div className="absolute -mt-4 mx-4 z-10">
                <Skeleton className="h-16 w-16 rounded-xl" />
            </div>

            <CardContent className="p-4 text-right">
                <Skeleton className="h-4 w-32 ml-auto mb-2" />
                <Skeleton className="h-8 w-24 ml-auto" />
            </CardContent>

            <CardFooter className="border-t border-blue-gray-50 p-4">
                <Skeleton className="h-5 w-full" />
            </CardFooter>
        </Card>
    );
}
