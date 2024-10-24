import { create } from 'zustand'
import { IUser } from '../types/user.type';

interface toggleState {
    user: IUser | null;
    setUser: (user: IUser) => void;

    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useUserStore = create<toggleState>((set) => ({
    user: null,
    setUser: (user: IUser) => set({user}),

    loading: false,
    setLoading: (loading: boolean) => set({loading}),
}));
