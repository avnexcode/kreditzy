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
import { CreateGuarantorForm } from '../form/CreateGuarantorForm';

export const CreateGuarantorDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'default'}>Tambah</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-screen overflow-auto">
                <DialogHeader>
                    <DialogTitle>Pendaftaran Penjamin Baru</DialogTitle>
                    <DialogDescription>
                        Silakan lengkapi data penjamin berikut untuk pengajuan
                        kredit. Pastikan data yang dimasukkan sesuai dengan
                        dokumen identitas resmi (KTP) dan informasi terkini
                        penjamin.
                    </DialogDescription>
                </DialogHeader>
                <CreateGuarantorForm
                    setIsOpen={setIsOpen}
                    setIsPending={setIsPending}
                />
                <DialogFooter className="pt-10">
                    <Button onClick={() => setIsOpen(false)}>Batal</Button>
                    <Button form="create-guarantor-form" disabled={isPending}>
                        {isPending ? 'Menambahkan...' : 'Tambahkan'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
