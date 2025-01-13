import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { GuarantorCard } from '~/features/guarantor/components/card/GuarantorCard';
import { renderElements } from '~/utils/render-elements';
import type { GuarantorWithRelations } from '../../types';

type GuarantorViewProps = {
    guarantors?: GuarantorWithRelations[];
};

export const GuarantorView = ({ guarantors }: GuarantorViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Data Penjamin</CardTitle>
                <CardDescription>Informasi Penjamin Nasabah</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {guarantors?.length === 0 && (
                        <div className="text-center text-gray-500">
                            Tidak ada data penjamin yang tersedia.
                        </div>
                    )}
                    {renderElements({
                        of: guarantors,
                        render: guarantor => (
                            <GuarantorCard
                                key={guarantor.id}
                                guarantor={guarantor}
                            />
                        ),
                    })}
                </div>
            </CardContent>
        </Card>
    );
};
