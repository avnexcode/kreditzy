import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';

type RegisterFormLayoutProps = {
    form_id: string;
    isPending: boolean;
    children: React.ReactNode;
};

export const RegisterFormLayout = (props: RegisterFormLayoutProps) => {
    const { children, form_id, isPending } = props;
    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle className="title">Sign Up</CardTitle>
                <CardDescription>
                    Create an account to get started.
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex justify-between">
                <CardDescription>
                    Already have an account?{' '}
                    <Link href={'/login'} className="text-blue-500 underline">
                        Sign In here
                    </Link>
                </CardDescription>
                <Button form={form_id} disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Registering...
                        </>
                    ) : (
                        'Register'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
