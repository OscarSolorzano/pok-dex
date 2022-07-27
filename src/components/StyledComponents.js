import styled, { keyframes } from "styled-components";

// General Components

export const CoverContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    position: relative;
    overflow: hidden;
`;

export const BackgroundLogo = styled.img`
    position: absolute;
    top: -4rem;
    right: -12rem;
    z-index: 1;
    filter: invert(97%) sepia(9%) saturate(94%) hue-rotate(223deg) brightness(116%) contrast(91%);
    animation: rotateAnim 10s linear infinite;
    transition: ease-in-out .5s;

    @media (min-width: 576px) {
        right: -4rem;
    }

    @keyframes rotateAnim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`;

// User Input Components

export const WelcomeTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    z-index: 2;
    h1{
        position: relative;
        font-size: 3rem;
        padding: 0 3rem;
        text-align: center
    }

    p{
        padding: 2rem 3rem;
        text-align: center;
        font-weight: 600;
    }
`

export const TrainerGif = styled.img`
    height: 10rem;
    margin-bottom: 2rem;
`

export const UsernameForm = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    input{
        width: 80vw;
        max-width: 30rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1.5rem;
    }

    button{
        border: 0;
        position: absolute;
        right: 1rem;
        background-color: transparent;
        cursor: pointer;
        &:hover{
            animation: bounce .3s infinite alternate;
        }
        @keyframes bounce {
            to { transform: scale(1.2); }
        }

        img{
            height: 3.5rem
        }
    }

`;

// Settings

export const SettingContainer = styled.div`

`;

export const SwitchBackground = styled.div`
    position: relative;
    width: 90px;
    height: 40px;
    border-radius: 30px;
    background-color: #647BDA;
    transition: 1s all ease-in;
`;

export const SwitchButton = styled.button`
        position: absolute;
        cursor: pointer;
        bottom: 5px;
        left: ${({theme}) => (theme === true ? '55px' : '5px')};
        width: 30px;
        height: 30px;
        border-radius: 50%;
        outline: none;
        border: none;
        transition: .5s all ease-in;
`

// Pokedex

export const Logo = styled.img`
    width: 20rem;
    margin: 2rem 1rem;
    z-index: 2;
`
export const WelcomeContainer = styled.div`
    z-index:2;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 1rem;
    span{
        color: red;
        font-size: 1.2rem;
    }
    select{
        width: 80vw;
        max-width: 20rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1rem;
    }
    input{
        width: 80vw;
        max-width: 20rem;
        margin: 0 1rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 1rem;
    }
`

export const SearchButton = styled.button`
    border: 0;
    position: absolute;
    right: 1rem;
    bottom: -0.5rem;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        animation: bounce .3s infinite alternate;
    }
    @keyframes bounce {
        to { transform: scale(1.2); }
    }

    img{
        height: 3.5rem
    }
`

export const Trainer = styled.img`
    height: 10rem;
    width: 10rem;
`

export const SearchType = styled.button`
    position: relative;
    width: 10rem;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    background-color: transparent;
    border-radius: 1rem;
`

export const Card = styled.div`
    width: 20rem;
    margin: 2rem 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: blue;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.5rem;

    h6{
        font-weight: normal;
    }
`
export const CardBg = styled.div`
    background-color:red;
    width: 100%;
    height: 10rem;
    position: relative;
    margin-bottom: 3.5rem;
    display:flex;
    justify-content: center;
    img{
        height: 12.5rem;
        margin: 1rem
    }
`

export const NameTypeContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 1rem;
    width: 100%;
    border-style: none none solid none;
    border-width: 0.1rem;
`

export const StatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    div{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items:center;
        width: 9rem;
        height: 4rem;
    }
`
// Pagination

export const PaginationBar = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    
    button{
        width: 2rem
    }
`