import { useState } from "react";

export type GameProps = {
    names: string[],
};

function rand(list: string[]): string {
    return list[Math.floor(Math.random() * list.length)];
}
function shuffle(props: GameProps): [string, string] {
    return [
        rand(props.names),
        rand(props.names),
    ];
}
export const Game = (props: GameProps) => {
    const [names, setNames] = useState(["", ""]);
    if (!import.meta.env.SSR) {
        setTimeout(() => {
            console.log("Hello from setTimeout");
            setNames([props.names[0], props.names[1]]);
        }, 2000);
    }

    if (names[0] === "") {
        return <div> nothing to see here </div>;
    }

    return <>
        <div>
            {names[0]}
        </div>
        <div>
            {names[1]}
        </div>
        <button onClick={() => setNames(shuffle(props))}>
            Shuffle
        </button>
    </>;
};

