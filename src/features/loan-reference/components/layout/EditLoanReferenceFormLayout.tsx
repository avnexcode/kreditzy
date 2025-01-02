import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '~/components/ui/button';

type EditLoanReferenceFormLayoutProps = {
    children: React.ReactNode;
    form_id: string;
    isPending: boolean;
};

export const EditLoanReferenceFormLayout = ({
    children,
    form_id,
    isPending,
}: EditLoanReferenceFormLayoutProps) => {
    const router = useRouter();

    return (
        <Card className="border-none shadow-none">
            <CardContent>{children}</CardContent>

            <CardFooter className="place-content-end gap-5 pt-5">
                <Button onClick={() => router.back()}>Cancel</Button>
                <Button form={form_id} disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Updating...
                        </>
                    ) : (
                        'Update'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
