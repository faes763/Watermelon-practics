import clsx from "clsx";
import { ChangeEvent, InputHTMLAttributes } from "react";
import { Sprite } from "./sprite";
import { cn } from "@/lib/utils";

export interface InputFormType extends InputHTMLAttributes<HTMLInputElement> {
    formik:any;
    id:string;
    placeholderclasses?:string;
    text?:string;
    classes?:string;
    viewError?:boolean;
    divclasses?: string;
    isRequire?: boolean
    sprite?: string;
}


export function InputForm(props:InputFormType) {
    const {formik,id,placeholderclasses,viewError,text,classes,divclasses, isRequire, sprite, ...rest} = props;
    return(
        <div className={cn("w-full relative space-y-2",divclasses)}>
            <label htmlFor={id}>
                {text && <p className={cn(placeholderclasses)}>{isRequire && <span className="text-[#FF6062] mr-1 font-bold">*</span>}{text}</p>}
                <div className={cn("relative" ,rest.className)}>
                    <input
                        {...rest}
                        className={cn(
                            "rounded-3xl bg-main_white p-6 border-2 border-main_blue/25 placeholder:font-light text-xl placeholder:text-main_blue/25",
                            rest.className
                            // formik.values[id].length>0 && !formik.errors[id] && formik.touched[id] && "!border-graphite/40"
                        )}
                        id={id}
                        name={id}
                        defaultValue={props.defaultValue}
                        type={props.type || "text"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[id]}
                    />
                    {sprite && (
                        <Sprite
                            name={sprite}
                            className=" absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8"
                            isImage
                        />
                    )}
                </div>
                {viewError && formik.touched[id] && formik.errors[id] ? (
                    <div className=" text-sm text-red-600">{formik.errors[id]}</div>
                ) : null}
            </label>
        </div>
    );
}


export function UploadImage({
    id,
    handleChange,
    file,
    viewText=true
}:{
    id: string;
    handleChange: (id: string,file: File) => void;
    file: File | null;
    viewText?: boolean
} & InputHTMLAttributes<HTMLInputElement>) {
    return(
        <label htmlFor={id} className=" gap-5 cursor-pointer flex items-center">
            <div className="flex gap-1.5 w-full "> 
                {viewText && <p className={cn(" bg-[#212121] text-xs py-2 w-full px-3 rounded-full max-w-48 whitespace-nowrap text-ellipsis ",!file && "text-white/50")}>{file?.name || "Name.png..."}</p>}
                <input 
                    onChange={(e)=>{
                        if(e.target.files && e.target.files.length>0) {
                            handleChange(id,e.target?.files[0])
                        }
                    }} 
                    id={id} name={id} type="file" className="hidden"
                        
                />
                <label className="p-2 bg-white text-black  border-none rounded-3xl w-18 text-xs"htmlFor={id}>Загрузить</label>
            </div>
        </label>
    );
}