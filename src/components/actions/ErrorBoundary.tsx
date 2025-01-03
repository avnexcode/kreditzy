'use client';
import React from 'react';
import { ErrorButton } from '../elements/ErrorButton';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className="flex h-screen w-full flex-col items-center justify-center bg-zinc-50">
                    <h1 className="text-9xl font-extrabold tracking-widest text-zinc-900">
                        500
                    </h1>
                    <div className="absolute rotate-12 rounded bg-red-500 px-2 text-sm text-white">
                        Server Error
                    </div>
                    <ErrorButton
                        label="Try Again!"
                        onClick={() => this.setState({ hasError: false })}
                    />
                    <p className="mt-8 text-center text-gray-500">
                        Our servers are taking a break. We&apos;ll be back up
                        and running shortly.
                    </p>
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
