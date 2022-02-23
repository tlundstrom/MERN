import react, {useState} from "react";

const Display = (props) => {
    const {boxes} = props;

    return (
        <div className="boxArea">
            {
                boxes.map((box, index) => ( 
                    <div key={index} style={{
                        display: "inline-block",
                        margin: '15px',
                        height: box.size,
                        width: box.size,
                        backgroundColor: box.color
                    }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Display