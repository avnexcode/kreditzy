import { type Customer } from '@prisma/client';
import { DetailCardItem } from '~/components/elements/DetailCardItem';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { toFormatDate } from '~/utils/toFormatDate';

type CustomerViewProps = {
    customer?: Customer;
};

export const CustomerView = async ({ customer }: CustomerViewProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Data Nasabah</CardTitle>
                <CardDescription>Informasi Detail Nasabah</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-10">
                    <div>
                        <h3 className="font-medium mb-6">Informasi Pribadi</h3>
                        <div className="space-y-2">
                            <DetailCardItem
                                label="Nama"
                                content={customer?.name ?? ''}
                            />
                            <DetailCardItem
                                label="NIK"
                                content={customer?.national_id ?? ''}
                            />
                            <DetailCardItem
                                label="No. Telepon"
                                content={customer?.phone ?? ''}
                            />
                            <DetailCardItem
                                label="Pekerjaan"
                                content={customer?.occupation ?? ''}
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium mb-6">Informasi Alamat</h3>
                        <div className="space-y-2">
                            <DetailCardItem
                                label="Alamat KTP"
                                content={customer?.id_card_address ?? ''}
                            />
                            <DetailCardItem
                                label="Alamat Tinggal"
                                content={customer?.residential_address ?? ''}
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="text-sm text-gray-500">
                <div className="w-full flex flex-col sm:flex-row justify-end gap-x-10 gap-y-5 items-start sm:items-center pt-5 sm:pt-0">
                    <span>
                        Dibuat:{' '}
                        {toFormatDate(customer?.created_at ?? new Date())}
                    </span>
                    <span>
                        Diperbarui:{' '}
                        {toFormatDate(customer?.updated_at ?? new Date())}
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};
