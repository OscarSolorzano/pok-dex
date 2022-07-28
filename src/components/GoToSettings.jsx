import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsButton } from './StyledComponents';


const GoToSettings = () => {

    const navigate = useNavigate();

    return (

        <SettingsButton onClick={() => navigate('/settings')}>
            <i className="fa-solid fa-gear fa-2x"></i>
        </SettingsButton>


    );
};

export default GoToSettings;