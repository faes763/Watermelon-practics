'use client'

import { useUserStore } from "@/common/store/user-store";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export function UserNameComp({
    first_name,
    surname,
    className
}: {
    first_name?: boolean,
    surname?: boolean,
    className?: string;
}) {
    const user = useUserStore(useShallow(state => {
        const user = state.user;
        if (user) {
            const { first_name, surname } = user;
            return { first_name, surname };
        }
        return null;
    }));

    if (!user) return null; 
    

    return (
        <span className={cn("text-main", className)}>{first_name && (user.first_name || "Пустота")} {surname && (user.surname || "Пустота")}</span>
    );
}