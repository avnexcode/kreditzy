import { create } from 'zustand';

type useCustomerStoreProps = {
    id: string;
    setId: (newId: string) => void;
    clearId: () => void;
};

export const useCustomerStore = create<useCustomerStoreProps>(set => ({
    id: '',
    setId: (newId: string) => set({ id: newId }),
    clearId: () => set({ id: '' }),
}));
