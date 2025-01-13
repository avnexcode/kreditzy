import { type CreditWorthiness } from '@prisma/client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';

type CreditWorthinessViewProps = {
    creditWorthiness?: CreditWorthiness | null;
};

export const CreditWorthinessView = ({
    creditWorthiness,
}: CreditWorthinessViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Status Kelayakan Kredit</CardTitle>
                <CardDescription>Riwayat Status Kelayakan</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {!creditWorthiness ? (
                        <div className="text-center text-gray-500">
                            Status kelayakan tidak tersedia.
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <p className="text-3xl w-full flex justify-center">
                                <span>Status :</span>
                                <span
                                    className={`ml-2 font-medium ${creditWorthiness.status ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {creditWorthiness.status
                                        ? 'Layak'
                                        : 'Tidak Layak'}
                                </span>
                            </p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
