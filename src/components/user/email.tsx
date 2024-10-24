'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export function UserEmailComp({
    className
}: {
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { email } = user;
            return { email };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        <span className={cn(className)}>{user.email}</span>
    );
}