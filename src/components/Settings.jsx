import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/slices/theme.slice';
import { changeCardsPerPage } from '../store/slices/pagination.slice'
import {
    CoverContainer,
    BackgroundLogo,
    SettingContainer,
    SwitchBackground,
    SwitchButton,
    PaginationButton
} from './StyledComponents';
import GoBack from './GoBack';

const Settings = () => {

    const theme = useSelector(state => state.theme)
    const cardsPerPage = useSelector(state => state.cardsPerPage)

    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(changeTheme(theme))
    }

    const CardsPerPage = (number) => {
        dispatch(changeCardsPerPage(number))
    }

    return (
        <CoverContainer>
            <GoBack/>
            <h1>Settings</h1>
            <SettingContainer>
                <h2>Theme</h2>
                <div>
                    <h3>Ligth</h3>
                    <SwitchBackground>
                        <SwitchButton
                            onClick={toggleTheme}
                            theme={theme}
                        >
                        </SwitchButton>
                    </SwitchBackground>
                    <h3>Dark</h3>
                </div>
            </SettingContainer>
            <SettingContainer>
                <h2>Pokémons Per Page</h2>
                <div>
                    <PaginationButton
                    isSelected ={cardsPerPage == 4}
                    onClick={() => CardsPerPage(4)}
                    >
                        4
                    </PaginationButton>
                    <PaginationButton
                    isSelected ={cardsPerPage == 8}
                    onClick={() => CardsPerPage('8')}
                    >
                        8
                    </PaginationButton>
                    <PaginationButton
                    isSelected ={cardsPerPage == 16}
                    onClick={() => CardsPerPage(16)}>
                        16
                    </PaginationButton>
                    <PaginationButton
                    isSelected ={cardsPerPage == 20}
                    onClick={() => CardsPerPage(20)}
                    >
                        20
                    </PaginationButton>
                </div>

            </SettingContainer>
            <BackgroundLogo src='/assets/pokeballPlain.svg' />
        </CoverContainer>
    );
};

export default Settings;