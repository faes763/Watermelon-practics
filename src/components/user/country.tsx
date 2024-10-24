'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export function UserCountryComp({
    className
}: {
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { country } = user;
            return { country };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        <span className={cn(className)}>{user.country || "Не указано"}</span>
    );
}