

import { UserBirthComp } from "@/components/user/birthday";
import { UserEmailComp } from "@/components/user/email";
import { UserPhoneComp } from "@/components/user/phone";
import Image from "next/image"
import { EditButton } from "./edit-button";
import { UserNameComp } from "@/components/user/name";
import { UserCountryComp } from "@/components/user/country";
import { UserPhotoComp } from "@/components/user/photo";

export function CardUser() {
    
    return(
        <div className=" bg-main_white p-8 flex-1 max-w-3xl rounded-[2rem] shadow-md relative shadow-main_blue/20">
            <EditButton/>
            <div className="flex items-center pb-5 border-b border-black/20 gap-4">
                <UserPhotoComp className="w-44 h-44"/>
                <div className=" space-y-3">
                    <p className=" font-medium text-3xl"><UserNameComp first_name surname/></p>
                    <p className="  font-light text-[#4271BE] text-xl">Часть команды</p>
                    <p className=" font-light text-black text-xl"><UserCountryComp/></p>
                </div>
            </div>

            <div className=" text-xl space-y-12 mt-8">
                <div className=" flex justify-between">
                    <p className=" font-semibold text-main">Контактный номер</p>
                    <p className=" font-light"> <UserPhoneComp/> </p>
                </div>
                <div className=" flex justify-between">
                    <p className=" font-semibold text-main">Электронная почта</p>
                    <p className=" font-light"> <UserEmailComp/> </p>
                </div>
                <div className=" flex justify-between">
                    <p className=" font-semibold text-main">В сервисе с...</p>
                    <p className=" font-light"> <UserBirthComp/> </p>
                </div>
            </div>
        </div>
    );
}