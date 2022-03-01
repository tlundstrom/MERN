import react, {useState, useEffect} from "react";

const Poke = (props) => {

    const {pokemon, setPokemon} = props;

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);
    return (
        <>
         {pokemon.length > 0 && pokemon.map((poke, index)=>{
                return (<div key={index}>{poke.name}</div>)
            })}
        </>
    )
} 

export default Poke