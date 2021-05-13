import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
//import { CustomImg } from '../../styledHelpers/Components';
//import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: -15px;
    width: 80px;
    height: 80px;
    background-color:${Colors.blue};
    /* background: ${Colors.white}; */
    padding: 16px;
    border: 1px solid ${Colors.hrgrey};
    z-index: 100;
    overflow-y: auto;
    p {
        position: relative;
        color: ${ Colors.grey };
        padding-top: 5px;
        padding-bottom: 5px;
    }
    img {
        margin-right: 15px;
        width: 25px;
        height: 25px;
        padding-bottom: 10px;
    }
    span {
        padding-top: 5px;
        color: ${Colors.black};
    }
    hr {
        width: 220px;
        margin-left: -16px;
        margin-right: -16px;
        border-color: ${Colors.hrgrey};
    }
    div {
        display:flex;
        position: relative;
        text-decoration: none;
    }

`;




export const ExpandedFollowedMenu: FC = () => {


    return (
        <WrapperNav>
            <ul>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>
                <li>

                </li>

            </ul>
        </WrapperNav>
    );
};