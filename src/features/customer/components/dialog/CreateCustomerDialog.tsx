import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '~/components/ui/dialog';
import { CreateCustomerForm } from '../form/CreateCustomerForm';
import { Button } from '~/components/ui/button';

export const CreateCustomerDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'}>Add Customer</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </DialogDescription>
                </DialogHeader>
                <CreateCustomerForm />
            </DialogContent>
        </Dialog>
    );
};
