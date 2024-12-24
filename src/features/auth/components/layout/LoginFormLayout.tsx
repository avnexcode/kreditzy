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

type LoginFormLayoutProps = {
    form_id: string;
    isPending: boolean;
    children: React.ReactNode;
};

export const LoginFormLayout = (props: LoginFormLayoutProps) => {
    const { children, form_id, isPending } = props;
    return (
        <Card className="w-full max-w-3xl">
            <CardHeader>
                <CardTitle className="title">Sign In</CardTitle>
                <CardDescription>
                    Welcome back! please sign in to continue.
                </CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex justify-between">
                <CardDescription>
                    Don&apos;t have an account?{' '}
                    <Link
                        href={'/register'}
                        className="text-blue-500 underline"
                    >
                        Sign Up here
                    </Link>
                </CardDescription>
                <Button form={form_id} disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        'Login'
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
};
