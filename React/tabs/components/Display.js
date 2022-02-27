import react, {useState} from "react";

const Display = (props) => {
    const {selected} = props; 

    return (
        <div 
            className="tabContent"
            style={{
                height:"75px",
                border:"1px solid black",
                width: "400px",
                margin: "0 auto",
                padding: "20px",
                borderRadius: "10px"
            }}
            >
            <p>{selected.content}</p>
        </div>
    )
}

export default Display;
