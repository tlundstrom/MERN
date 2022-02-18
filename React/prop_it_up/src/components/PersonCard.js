import react, {useState} from "react";

const PersonCard = (props) =>{
    const [state, setState] = useState({
        currantAge: props.age
    });

    const handleClick = () => {
        setState({
            currantAge: state.currantAge + 1
        });
    }
    
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {state.currantAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClick}>Birthday Button for  {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard