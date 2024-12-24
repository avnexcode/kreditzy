'use client';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { Button } from '~/components/ui/button';

export const SignOutButton = () => {
    return (
        <Button
            variant="outline"
            className="w-full justify-start text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            onClick={() => signOut()}
        >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
        </Button>
    );
};
