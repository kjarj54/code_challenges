import { useState } from "react";

function Show_And_Hide() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    return (
        <div className="flex flex-col items-center border-b-4">
            <button
                className="border border-solid border-black rounded-md"
                onClick={toggleVisibility}
            >
                {isVisible ? "Hide div Element" : "Show div Element"}
            </button>
            {isVisible && <div>I am here!..Att"The div"</div>}
        </div>
    )
}

export default Show_And_Hide
