import { UserNameComp } from "@/components/user/name";

export function Hello() {
    return(
        <div className=" md:mt-24 text-center">
            <p className=" whitespace-nowrap text-5xl font-medium">ПРИВЕТ, <span className="text-main">{<UserNameComp first_name/>}!</span></p>
            <p className=" font-light text-3xl ">Готовы к новым задачам?</p>
        </div>
    );
}