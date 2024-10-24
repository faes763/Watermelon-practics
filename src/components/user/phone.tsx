'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export function UserPhoneComp({
    className
}: {
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { phone_number } = user;
            return { phone_number };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        <span className={cn(className)}>{user.phone_number || "Заполните номер"}</span>
    );
}