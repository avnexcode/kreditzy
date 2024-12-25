import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';
import { useCustomerStore } from '~/stores/useCustomerStore';

type EditCustomerFormLayoutProps = {
    children: React.ReactNode;
    form_id: string;
    isPending: boolean;
};

export const EditCustomerFormLayout = ({
    children,
    form_id,
    isPending,
}: EditCustomerFormLayoutProps) => {
    const router = useRouter();
    const { setId } = useCustomerStore();

    return (
        <Card className="border-none shadow-none">
            <CardHeader>
                <CardTitle>Form Edit</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>

            <CardContent>{children}</CardContent>

            <CardFooter className="place-content-end gap-5 pt-5">
                <Button
                    onClick={() => {
                        setId('');
                        router.back();
                    }}
                >
                    Batal
                </Button>
                <Button form={form_id} disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Memperbarui...
                        </>
                    ) : (
                        'Perbarui'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
