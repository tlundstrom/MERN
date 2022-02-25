import react, {useState} from "react";

const Display = (props) => {
    const {selected} = props; 

    return (
        <div className="tabContent">
            <p>{selected.content}</p>
        </div>
    )
}

export default Display;
