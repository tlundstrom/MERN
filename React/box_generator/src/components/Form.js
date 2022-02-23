import react, { useState } from "react";



const Form = (props) => {
    const {boxes, setBoxes} = props

    const [color, setColor] = useState("");
    const [size, setSize] = useState('50');

    const handleSubmit = (e) => {
        e.preventDefault();

        setBoxes( [ ...boxes,
            {   
                color: color,
                size: size + 'px'
            } 
        ]);
        setColor('');
        setSize('50');
    }
    const handleClear = (e) => {
        setBoxes([]);
    }

    const btnStyle = {
        margin:'10px'
    }
    
    return (
        <div>
            <h2>Box Generator</h2>
            <form onSubmit={handleSubmit}>
                <p>Enter a Color:</p>
                <input 
                    value={color}
                    className="colorPick" 
                    type="text"
                    onChange={ (e) => setColor(e.target.value) }
                />
                <p>Enter a Size</p>
                <input
                    value={size}
                    className="sizePicker"
                    type="number"
                    onChange={ (e) => setSize(e.target.value)}
                />
                <br/>
                <input style={btnStyle} className="submitBtn" type="submit" value="Create Box" />
                <br/>
                <button onClick={handleClear}>Clear Boxes</button>
            </form>
        </div>
    )
}

export default Form