import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

export function Tasks() {
    return(
        <div className=" gap-12 mt-11 grid grid-cols-1 md:grid-cols-3">
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div>
    );
}

function TaskCard() {
    return(
        <Card className=" bg-main_white">
            <CardHeader className="pt-1.5 text-right text-main-black text-2xl font-bold uppercase mr-14">
                Задача
            </CardHeader>
            <CardContent className="mt-1 pl-4 pb-3 pr-1 gap-5 flex">
                <CircleProgress percentage={45}/>
                <div className=" flex-1 flex flex-col justify-between pb-4 text-center">
                    <CardDescription className=" line-clamp-4 font-light">
                        текст текст текст текст текст текст текст текст текст 
                        текст текст текст текст текст текст текст текст текст 
                        текст текст текст текст текст текст текст текст текст 
                    </CardDescription>
                    <div className="flex justify-center gap-1.5">
                        <div className=" bg-card-term w-9 h-7 rounded-[2rem]"/>
                        <p className=" font-bold text-xs max-w-28">% до окончания срока</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const CircleProgress = ({ percentage }: { percentage: number }) => {
    const radius = 50;
    const strokeWidth = 18;
    const circumference = 2 * Math.PI * radius;
    
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg width="120" height="120" viewBox="0 0 140 140" className=" w-40 h-40 ">
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(96.41)">
                <stop offset="12.24%" stopColor="#8DA1E6" />
                <stop offset="88.92%" stopColor="#FF9FBD" />
                </linearGradient>
            </defs>
    

            <g className=" ">
        {/* Фоновой круг с чёрной обводкой */}
            <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="black"
                strokeWidth={strokeWidth}
                fill="none"
            />

            {/* Круг для градиентного заполнения */}
            <circle
                cx="70"
                cy="70"
                r={radius}
                stroke="url(#gradient)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="progress-circle"
            />
        </g>


        <text
            x="50%" y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle"
            className="text-2xl font-bold fill-main_blue "
        >
            {percentage}%
        </text>
        </svg>
    );
};
