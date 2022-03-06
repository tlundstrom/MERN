import react from "react";
import { useParams } from "react-router-dom";

const Path = (props) => {
    const {path, color, bgcolor} = useParams();

    const pathSeperator = (path) => {
        console.log(isNaN(path));
        if(isNaN(path)){
            return <h1 style={{backgroundColor: bgcolor}}>The word is: <span style={{color: color}}>{path}</span></h1>
        }else{
            return <h1>The number is: {path}</h1>
        }
    }

    return(
        <>
            {pathSeperator(path)}
        </>
    )
}

export default Path