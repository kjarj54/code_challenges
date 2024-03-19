import { useState } from "react";
import ChildComponent from "./ChildComponent";

function State_from_Child() {
    const [text, setText] = useState<string>("Texto to change");
    const updateText = () => {
        setText("¡Text updated!");
    };
    return (
        <div className="flex flex-col border-b-4">
            <div className="box-wrapper">
                <label>Parent</label>
                <p>{text}</p>
            </div>
            <label>Child</label>
            <ChildComponent handleClick={updateText} />
        </div>

    )
}

export default State_from_Child
