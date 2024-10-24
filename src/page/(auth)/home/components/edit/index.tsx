import { Form } from "./form";
import { HomeButton } from "./home-button";

export function UserEdit() {
    return(
        <div className=" bg-main_white shadow-md shadow-main_blue/25 rounded-[2rem] md:p-24 p-7 relative">
            <HomeButton/>
            <Form/>
        </div>
    )
}