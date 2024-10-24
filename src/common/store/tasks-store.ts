import { create } from 'zustand'
import { IUser } from '../types/user.type';

interface toggleState {
    tasks: any[];
    setTasks: (tasks: any[]) => void;

}

export const useTasksStore = create<toggleState>((set) => ({
    tasks: [],
    setTasks: (tasks: any[]) => set({tasks}),
}));
