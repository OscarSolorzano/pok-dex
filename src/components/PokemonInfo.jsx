import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import typesColor from './typesColor.json';
import {
    Card,
    CardBg,
    StatContainer,
    NameTypeContainer
} from './StyledComponents'
const PokemonInfo = ({ url }) => {

    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate()

    const getBackgroundColor = (PokemonType) =>{
        let color = ''
        typesColor.map((type) => {
            if (type.type === PokemonType){
                color = type.color
            }
        })
        return color
    }



    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [])

    const bgColor = getBackgroundColor(pokemon.types?.[0].type.name)

    return (
        <Card bgColor={bgColor} onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
            <CardBg bgColor={bgColor}>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} />
            </CardBg>
            <NameTypeContainer>
                <h2>{pokemon.name}</h2>
                {pokemon.types?.[1] ?
                    (<p>{pokemon.types[0].type.name}
                        /
                        {pokemon.types[1].type.name}</p>)
                    :
                    (<p>{pokemon.types?.[0].type.name}</p>)
                }
                <h6>Type</h6>
            </NameTypeContainer>
            <StatContainer>
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
            </StatContainer>
        </Card>
    );
};

export default PokemonInfo;