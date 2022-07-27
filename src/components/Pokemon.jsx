import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { CoverContainer , BackgroundLogo } from './StyledComponents';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams();

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    },[id])

    return (
        <CoverContainer>
            <div>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} />
                <p>{pokemon.name}</p>
                <p># {pokemon.id}</p>
                <p>{pokemon.height} dm</p>
                <p>Height</p>
                <p>{pokemon.weight} g</p>
                <p>Weigth</p>

                {pokemon.types?.[1] ?
                    (<p>{pokemon.types[0].type.name}
                        /
                        {pokemon.types[1].type.name}</p>)
                    :
                    (<p>{pokemon.types?.[0].type.name}</p>)
                }
                <h6>Type</h6>

                <div>
                    <h6>HP</h6>
                    <h3>{pokemon.stats?.[0].base_stat}</h3>
                </div>
                <div>
                    <h6>ATTACK</h6>
                    <h3>{pokemon.stats?.[1].base_stat}</h3>
                </div>
                <div>
                    <h6>DEFENSE</h6>
                    <h3>{pokemon.stats?.[2].base_stat}</h3>
                </div>
                <div>
                    <h6>SPEED</h6>
                    <h3>{pokemon.stats?.[5].base_stat}</h3>
                </div>
            </div>

            <BackgroundLogo src='/assets/pokeballPlain.svg' />
        </CoverContainer>
    );
};

export default Pokemon;