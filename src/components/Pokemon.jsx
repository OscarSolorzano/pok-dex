import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import {
    CoverContainer,
    BackgroundLogo,
    Logo,
    MainInfoContainer,
    HeightWeightContainer,
    TypeContainer,
    Type,
    Ability,
    BaseStatContainer,
    Stat,
    Move
} from './StyledComponents';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState({})

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    }, [id])

    return (
        <CoverContainer>
            <Logo src='/assets/logo.png' />
            <MainInfoContainer>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} />
                <h3># {pokemon.id}</h3>
                <div>
                    <hr />
                    <h2>{pokemon.name}</h2>
                    <hr />
                </div>
                <HeightWeightContainer>
                    <div>
                        <h5>Height</h5>
                        <p>{pokemon.height} dm</p>
                    </div>
                    <div>
                        <h5>Weigth</h5>
                        <p>{pokemon.weight} g</p>
                    </div>
                </HeightWeightContainer>
            </MainInfoContainer>
            <TypeContainer>
                <div>
                    <hr />
                    <h2>Types</h2>
                    <hr />
                </div>
                {pokemon.types?.map(type => (
                    <Type key={type.type.name}>
                        {type.type.name}
                    </Type>
                ))}
            </TypeContainer>
            <TypeContainer>
                <div>
                    <hr />
                    <h2>Abilities</h2>
                    <hr />
                </div>
                {pokemon.abilities?.map(ability => (
                    <Ability key={ability.ability.name}>
                        {ability.ability.name}
                    </Ability>
                ))}
            </TypeContainer>
            <TypeContainer>
                <div>
                    <hr />
                    <h2>Stats</h2>
                    <hr />
                </div>
                <BaseStatContainer>
                    <h6>HP</h6>
                    <h3>{pokemon.stats?.[0].base_stat}/255</h3>
                    <div>
                        <Stat
                            max={255}
                            value={pokemon.stats?.[0].base_stat}
                        />
                    </div>
                </BaseStatContainer>
                <BaseStatContainer>
                    <h6>ATTACK</h6>
                    <h3>{pokemon.stats?.[1].base_stat}/255</h3>
                    <Stat
                        max={255}
                        value={pokemon.stats?.[1].base_stat}
                    />
                </BaseStatContainer>
                <BaseStatContainer>
                    <h6>DEFENSE</h6>
                    <h3>{pokemon.stats?.[2].base_stat}/255</h3>
                    <Stat
                        max={255}
                        value={pokemon.stats?.[2].base_stat}
                    />
                </BaseStatContainer>
                <BaseStatContainer>
                    <h6>SPEED</h6>
                    <h3>{pokemon.stats?.[5].base_stat}/255</h3>
                    <Stat
                        max={255}
                        value={pokemon.stats?.[5].base_stat}
                    />
                </BaseStatContainer>
            </TypeContainer>
            <TypeContainer>
                <div>
                    <hr />
                    <h2>Movements</h2>
                    <hr />
                </div>
                {pokemon.moves?.map(move => (
                    <Move key={move.move.name}>
                        {move.move.name}
                    </Move>
                ))}
            </TypeContainer>

            <BackgroundLogo src='/assets/pokeballPlain.svg' />
        </CoverContainer>
    );
};

export default Pokemon;