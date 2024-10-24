
import dynamic from 'next/dynamic';

const Kanban = dynamic(() =>
    import('./components/kanban').then((mod) => mod.Kanban),
    {
        ssr: false,
    }
);

export function Tasks() {
    return(
        <div className=" mt-3.5">
            <Kanban/>
        </div>
    );
}