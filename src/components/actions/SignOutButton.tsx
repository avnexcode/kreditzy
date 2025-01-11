'use client';
import { signOut } from 'next-auth/react';
import InteractiveHoverButton from '../ui/interactive-hover-button';

export const SignOutButton = () => {
    return (
        <InteractiveHoverButton
            className="z-50"
            onClick={() => signOut()}
            text="Logout"
        />
    );
};
