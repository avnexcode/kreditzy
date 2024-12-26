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
import { CreateCustomerForm } from '../form/CreateCustomerForm';
import { Button } from '~/components/ui/button';
import { useState } from 'react';

export const CreateCustomerDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant={'default'}>Tambah</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-screen overflow-auto">
                <DialogHeader>
                    <DialogTitle>Pendaftaran Nasabah Baru</DialogTitle>
                    <DialogDescription>
                        Silakan lengkapi data nasabah berikut untuk pengajuan
                        kredit. Pastikan data yang dimasukkan sesuai dengan
                        dokumen identitas resmi (KTP) dan informasi terkini
                        nasabah.
                    </DialogDescription>
                </DialogHeader>
                <CreateCustomerForm
                    setIsOpen={setIsOpen}
                    setIsPending={setIsPending}
                />
                <DialogFooter className="pt-10">
                    <Button onClick={() => setIsOpen(false)}>Batal</Button>
                    <Button
                        form="create-customer-form"
                        disabled={isPending}
                        type="submit"
                    >
                        {isPending ? 'Menambahkan...' : 'Tambahkan'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
