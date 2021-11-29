import React from 'react'
import { func, string } from 'prop-types';

import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faMoon,
    faSun
} from '@fortawesome/free-regular-svg-icons';
import { lightTheme } from '../styles/theme';

library.add(
 faMoon,
 faSun
);

const TogglSection = styled.nav` 
    display: flex;
    justify-content: flex-end;
    margin: 2em 0;
`;

const Btn = styled.button`
    padding: 10px;
    line-height: 0;
    background-color: ${({ theme }) => theme.toggleBackground};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;



const Toggle = ({ theme, toggleTheme, islight }) => { 
    const isLight = theme === 'light';
    const icon = islight = theme === 'light' ? <FontAwesomeIcon icon={['far', 'sun']} /> : <FontAwesomeIcon icon={['far', 'moon']} />;
    return (
        <TogglSection>
            <Btn onClick={toggleTheme}>
                {icon}
            </Btn>
        </TogglSection>
    )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;
