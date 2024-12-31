import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';

type EditPasswordFormLayoutProps = {
    children: React.ReactNode;
    form_id: string;
    isPending: boolean;
};

export const EditPasswordFormLayout = ({
    form_id,
    children,
    isPending,
}: EditPasswordFormLayoutProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardContent>{children}</CardContent>
            <CardFooter className="place-content-end pt-5">
                <Button form={form_id} disabled={isPending}>
                    {isPending
                        ? 'Memperbarui password...'
                        : 'Perbarui password'}
                </Button>
            </CardFooter>
        </Card>
    );
};
