import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from './StyledComponents';

const GoBack = () => {

    const navigate = useNavigate()

    return (
        <BackButton onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left-long fa-4x"></i>
        </BackButton>
    );
};

export default GoBack;