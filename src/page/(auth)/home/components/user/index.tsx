import { CardUser } from "./card-user";
import { Hello } from "./hello";
import { Tasks } from "./tasks";

export function HomeUser() {
    return(
        <div>
            <div className="flex max-md:flex-col-reverse gap-9">
                <CardUser/>      
                <Hello/>
            </div>
            <Tasks/>
        </div>
    );
}