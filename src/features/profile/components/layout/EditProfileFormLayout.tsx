import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Button } from '~/components/ui/button';

type EditProfileFormLayoutProps = {
    children: React.ReactNode;
    form_id: string;
    isPending: boolean;
};

export const EditProfileFormLayout = ({
    children,
    form_id,
    isPending,
}: EditProfileFormLayoutProps) => {
    return (
        <Card className="border-none shadow-none">
            <CardContent>{children}</CardContent>

            <CardFooter className="place-content-end gap-5 pt-5">
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
