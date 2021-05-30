import { FC, } from 'react';
// import { Link } from 'react-router-dom';

import styled from 'styled-components';
//import { CustomImg } from '../../styledHelpers/Components';


import { Colors } from '../../styledHelpers/Colors';

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: -15px;
    width: 80px;
    height: 80px;
    background: ${Colors.white};
    padding: 16px;
    border: 1px solid ${Colors.hrgrey};
    z-index: 100;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
`;




export const ExpandedFollowedMenu: FC = () => {


    return (
        <WrapperNav>
            <ul>
                <li>
                    1
                </li>
                <li>
                    2
                </li>
                <li>
                    3
                </li>
                <li>
                    4
                </li>
                <li>
                    5
                </li>

            </ul>
        </WrapperNav>
    );
};