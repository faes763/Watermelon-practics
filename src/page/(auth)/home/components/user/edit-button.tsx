'use client'
import { useEditHome } from "@/common/store/toggle-store";
import { Sprite } from "@/common/ui/sprite";
import { useShallow } from "zustand/react/shallow";

export function EditButton() {
    const open = useEditHome(useShallow(state=>state.open));
    return(
        <Sprite
            name="edit"
            className="w-8 cursor-pointer h-8 absolute top-8 right-8"
            isImage
            onClick={open}
        />
    )
}