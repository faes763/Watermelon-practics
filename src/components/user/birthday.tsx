'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export function UserBirthComp({
    className
}: {
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { birth_date } = user;
            return { birth_date };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        <span className={cn(className)}>{user.birth_date || "Заполните дату рождения"}</span>
    );
}