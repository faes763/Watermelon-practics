'use client'
import { Sprite } from "@/common/ui/sprite";
import { usePathname } from "next/navigation";
import { navLinks } from "../navigation";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";

export function Header() {
    const pathname = usePathname();

    const currentLink = navLinks.find(link=>link.href && pathname.includes(link?.href));

    return(
        <header className=" w-full md:pr-24 md:h-24 h-16 gap-8 flex">
            <div className=" flex gap-7 h-full flex-1">
            
                <div className=" flex-1 h-full flex items-center pl-16 py-5 rounded-[2rem] shadow-main_blue/20 bg-main_white shadow-md">
                    <Breadcrumb>
                        <BreadcrumbList className=" text-3xl">
                            <BreadcrumbItem>
                                <BreadcrumbLink 
                                    href={currentLink?.href}
                                    className="flex items-center"
                                >
                                    <Sprite
                                        name="caret"
                                        className="w-8 h-8"
                                        isImage
                                    />
                                    {currentLink?.navName || "not found"}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className=" flex items-center justify-center bg-main_white shadow-main_blue/20 shadow-md rounded-[1.25rem] md:rounded-[2rem] md:w-24 md:h-24 w-16 h-16">
                <Sprite
                    name="notification"
                    className="md:w-8 md:h-8 w-6 h-6"
                    isImage
                />
            </div>
        </header>
    );
}