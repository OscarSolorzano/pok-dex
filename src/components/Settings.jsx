import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../store/slices/theme.slice';
import {
    CoverContainer,
    BackgroundLogo,
    SettingContainer,
    SwitchBackground,
    SwitchButton
} from './StyledComponents';

const Settings = () => {

    const theme = useSelector(state => state.theme)

    const dispatch = useDispatch()

    const toggleTheme = () => {
        dispatch(changeTheme(theme))
    }
    return (
        <CoverContainer>
            <h1>Settings</h1>
            <SettingContainer>
                <h2>Theme</h2>
                <SwitchBackground>
                    <SwitchButton
                        onClick={toggleTheme}
                        theme ={theme}
                     >
                     </SwitchButton>
                </SwitchBackground>
            </SettingContainer>
            <BackgroundLogo src='/assets/pokeballPlain.svg'/>
        </CoverContainer>
    );
};

export default Settings;