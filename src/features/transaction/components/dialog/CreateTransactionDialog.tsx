'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { useState } from 'react';
import { CirclePlus } from 'lucide-react';
import { CreateTransactionForm } from '../form/CreateTransactionForm';

export const CreateTransactionDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'default'}>
                    <CirclePlus size={48} strokeWidth={3} />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-screen overflow-auto">
                <DialogHeader>
                    <DialogTitle>Buat Transaksi Baru</DialogTitle>
                    <DialogDescription>
                        Silakan lengkapi data penjamin berikut untuk pengajuan
                        kredit. Pastikan data yang dimasukkan sesuai dengan
                        dokumen identitas resmi (KTP) dan informasi terkini
                        penjamin.
                    </DialogDescription>
                </DialogHeader>
                <CreateTransactionForm
                    setIsOpen={setIsOpen}
                    setIsPending={setIsPending}
                />
                <DialogFooter className="pt-10">
                    <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button form="create-transaction-form" disabled={isPending}>
                        {isPending ? 'Adding...' : 'Add'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
