import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { boxShadow } from '../../styledHelpers/Components';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>

const WrapperLM = styled.section`
    width: 500px;
    margin-left: 50px;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
`;

const PhotoBox = styled.div`
    Width: 100%;
    background-color: ${Colors.white};
    text-align: center;
    border-radius: 5px;
    ${boxShadow()};
`;

const Photo = styled.img`
    width: 90px;
    height: 90px;
    position: relative;
    display: flex;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    padding: 10px;
`;

const Sign = styled.span`
    margin: 5px;
    padding: 5px;
    color: ${Colors.darkblue};
`;

const JobDescription = styled.p`
    color: ${Colors.grey};
    padding: 5px;
`;


const CustomHr = styled.hr`
    border-color: ${Colors.hrgrey};
`;

const BoxText = styled.div`
    position: relative;
    padding: 5px;

`;

const CustomText = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5px;
`;



export const Administration: FC = () => {
    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetSomeImg>(getSomeImg());
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    return (
        <WrapperLM>
            <PhotoBox>
                <Photo src={someImg[9]?.url}></Photo>
                <Sign>{JSON.stringify(usersList[9]?.name)?.slice(1, -1)}</Sign>
                <JobDescription>{JSON.stringify(usersList[9]?.company.name)?.slice(1, -1)}</JobDescription>
                <CustomHr></CustomHr>
                <BoxText>
                    <CustomText>
                        I'm your Administrator!!!
                    </CustomText>
                </BoxText>
            </PhotoBox>
        </WrapperLM>
    );
};