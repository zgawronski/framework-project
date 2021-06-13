import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
//import { fontSize } from '../../styledHelpers/FontSizes';

//import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>


const WrapperProfile = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 970px;
    min-height: 240px;
    max-height: 300px;
    margin: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
`;
// const MainImg = styled.img`
//     margin-top: -5px;
//     margin-left: -5px;
//     max-width: 300px;
//     height: 300px;
//     border-radius: 5px 0 0 5px;
// `;

// const MainText = styled.div`
//     padding: 5px;

// `;

// const MainTitle = styled.h1`
//     margin-left: 5px;
//     font-size: ${fontSize[22]};
//     font-weight: 600;
//     color: ${Colors.black};
// `;

// const MainBlocks = styled.div`
//     display: flex;
//     position: relative;
//     margin-top: 5px;
// `;

// const BlockImgPlace = styled.div`
//     display: flex;
//     margin: 5px;
//     border-radius: 3px;
//     position: relative;
// `;

// const BlockImg = styled.img`
//     position: relative;
//     width: 65px;
//     margin: 5px;
//     border-radius: 3px;
// `;

// const MainP = styled.p`
//     position: absolute;
//     top: 180px;
//     left: 20px;
//     color: ${Colors.white};
// `;

// const BlockImgF = styled.div`
//     display: flex;
//     position: absolute;
//     bottom: 20px;
//     left: 20px;
//     color: ${Colors.white};
//     text-decoration: none;
//     padding: 5px;
//     font-size: ${fontSize[14]};
// `;

// const BlockTxt = styled.div`
//     font-size: ${fontSize[16]};
//     padding: 5px;
// `;

// const MainF = styled(Link)`
//     position: absolute;
//     color: ${Colors.text};
//     padding-top: 10px;
//     margin-left: 5px;
//     font-size: ${fontSize[16]};
//     text-decoration: none;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;

// const BlockF = styled.div`
//     position: absolute;
//     bottom:0;
//     display: inline-flex;
//     text-decoration: none;
//     padding-left: 5px;
//     font-size: ${fontSize[12]};
// `;

// const BlockUserImg = styled.img`
//     width: 12px;
//     height: 12px;
//     margin: 5px 5px 5px 5px;
//     border-radius: 50%;
// `;

// const DataP = styled.p`
//     color: ${Colors.grey};
//     margin-top: 5px;
// `;

// const BlockUser = styled.div`
//     margin-top: 5px;
// `;

export const Profile: FC = () => {
    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetSomeImg>(getSomeImg());
    }, [dispatch]);

    return (
        <WrapperProfile>

        </WrapperProfile>
    );
};