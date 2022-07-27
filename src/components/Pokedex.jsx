import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonInfo from './PokemonInfo';
import { useNavigate } from 'react-router-dom'
import {
    CoverContainer,
    BackgroundLogo,
    Logo,
    WelcomeContainer,
    Trainer,
    SearchButton,
    SearchType
} from './StyledComponents'
import Pagination from './Pagination';

const Pokedex = () => {

    const user = useSelector(state => state.user)
    const cardsPerPage = useSelector(state => state.cardsPerPage)

    const [pokemons, setPokemons] = useState([])
    const [pokemonSearch, setPokemoSearch] = useState('')
    const [types, setTypes] = useState([])
    const [isSearchTypes, setIsSearchTypes] = useState(false)
    const [ currentPage, setCurrentPage ] = useState(1)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154')
            .then(res => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data.results))
    }, [])

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${pokemonSearch}`)
    }

    const filterType = (e) => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCards =indexOfLastCard - cardsPerPage
    const currentCards = pokemons.slice( indexOfFirstCards , indexOfLastCard)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <CoverContainer>
            <Logo src='/assets/logo.png' />
            <WelcomeContainer>
                <h4><span>Welcome {user}</span> this is your pokedex</h4>
                <Trainer src='/assets/Trainer.gif' />
                <SearchType onClick={()=>setIsSearchTypes(!isSearchTypes)}>
                    <i className="fa-solid fa-magnifying-glass" />
                    {isSearchTypes? ' By Name': ' By type'}
                </SearchType>
                {isSearchTypes ? (
                    <select onChange={filterType}>
                        <option>Select a type</option>
                        {types.map(type => (
                            <option
                                key={type.name}
                                value={type.url}
                            >
                                {type.name}
                            </option>
                        ))}
                    </select>
                ) :
                    (<form onSubmit={submit}>
                        <input
                            value={pokemonSearch}
                            onChange={res => setPokemoSearch(res.target.value)}
                        />
                        <SearchButton>
                            <img src='/assets/pokeballAnimated.webp' />
                        </SearchButton>
                    </form>)
                }
            </WelcomeContainer>
            <ul>
                {currentCards.map(pokemon => (
                    <PokemonInfo
                        url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                        key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                    />
                ))}
            </ul>
            <Pagination
             totalCards={pokemons.length}
             paginate={paginate}
             currentPage={currentPage}
             />
            <BackgroundLogo src='/assets/pokeballPlain.svg' />
        </CoverContainer>
    );
};

export default Pokedex;