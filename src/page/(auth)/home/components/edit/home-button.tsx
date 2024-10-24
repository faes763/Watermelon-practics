'use client'
import { useEditHome } from "@/common/store/toggle-store";
import { Sprite } from "@/common/ui/sprite";
import { Button } from "@/components/ui/button";
import { useShallow } from "zustand/react/shallow";

export function HomeButton() {
    const close = useEditHome(useShallow(state=>state.close));
    return(
        <Button className="bg-main_white border-none shadow-md  absolute top-8 right-8 " size={'rounded'} variant={'outline'}>
            <Sprite
                name="close"
                className="w-7 h-7 "
                isImage
                onClick={close}
            />
        </Button>
    )
}