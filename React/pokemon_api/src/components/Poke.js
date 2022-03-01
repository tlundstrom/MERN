import react, {useState, useEffect} from "react";
import axios from 'axios';

const Poke = (props) => {

    const {pokemon, setPokemon} = props;

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126')
            .then(response =>{setPokemon(response.data.results)})
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