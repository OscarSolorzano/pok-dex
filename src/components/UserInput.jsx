import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { CoverContainer,
        BackgroundLogo,
        UsernameForm,
        TrainerGif,
        WelcomeTitle
 } from './StyledComponents';
import GoToSettings from './GoToSettings';


const UserInput = () => {

    const [username, setUsername] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(changeUser(username))
        navigate('/pokedex')
    }

    return (
            <CoverContainer>
                <WelcomeTitle>
                    <h1>Welcome Trainer!</h1>
                    <TrainerGif src='/assets/startTrainer.gif'/>
                <p>
                    To start tell us your name and catch the pokeball
                </p>
                </WelcomeTitle>
                <UsernameForm onSubmit={submit}>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    >
                    </input>
                    <button>
                        <img src='/assets/pokeballAnimated.webp'/>
                    </button>
                </UsernameForm>
                <BackgroundLogo src='/assets/pokeballPlain.svg'/>
                <GoToSettings />
            </CoverContainer>

    );
};

export default UserInput;