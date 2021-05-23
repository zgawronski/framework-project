import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers, getComments, getPosts } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>


const Wrapper4 = styled.section`
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
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
`;
const MainImg = styled.img`
    margin-top: -5px;
    margin-left: -5px;
    max-width: 300px;
    height: 300px;
    border-radius: 5px 0 0 5px;
`;

const MainText = styled.div`
    padding: 5px;

`;

const MainTitle = styled.h1`
    margin-left: 5px;
    font-size: ${fontSize[22]};
    font-weight: 600;
    color: ${Colors.black};
`;

const MainBlocks = styled.div`
    display: flex;
    position: relative;
    margin-top: 5px;
`;

const BlockImgPlace = styled.div`
    display: flex;
    margin: 5px;
    border-radius: 3px;
    position: relative;
`;

const BlockImg = styled.img`
    position: relative;
    width: 65px;
    margin: 5px;
    border-radius: 3px;
`;

const MainP = styled.p`
    position: absolute;
    top: 180px;
    left: 20px;
    color: ${Colors.white};
`;

const BlockImgF = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${Colors.white};
    text-decoration: none;
    padding: 5px;
    font-size: ${fontSize[14]};
`;

const BlockTxt = styled.div`
    font-size: ${fontSize[16]};
    padding: 5px;
`;

const MainF = styled(Link)`
    position: absolute;
    color: ${Colors.text};
    padding-top: 10px;
    margin-left: 5px;
    font-size: ${fontSize[16]};
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const BlockF = styled.div`
    position: absolute;
    bottom:0;
    display: inline-flex;
    text-decoration: none;
    padding-bottom:  5px;
    padding-left: 5px;
    font-size: ${fontSize[12]};
`;

const BlockUserImg = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px 5px 5px;

    border-radius: 50%;
`;

const DataP = styled.p`
    color: ${Colors.grey};
`;

const BlockUser = styled.div``;

export const MainContainer: FC = () => {
    const { someImg, usersList, usersComment, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    const [ post, setPost ] = useState<any>([]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        dispatch<GetSomeImg>(getSomeImg());
        dispatch<GetPosts>(getPosts());
        setPost(usersPost);
    }, [dispatch, usersPost]);

    return (
        <Wrapper4>
            <BlockImgPlace>
                <MainImg src={someImg[9]?.url} alt="" />
                <MainP>{usersComment[9]?.body.slice(1, -50)}</MainP>
                <BlockImgF>
                    <DataP>7 jan 2020</DataP>
                    <BlockUserImg src={someImg[0]?.url} alt=""/>
                    <BlockUser>{usersList[0]?.name}</BlockUser>
                </BlockImgF>
            </BlockImgPlace>
            <MainText>
                <MainTitle>Latest publications</MainTitle>
                { post.slice(1, 4).map((user: any) =>{
                    return(
                    <MainBlocks key={user.id}>
                    <BlockImg src={someImg[0]?.url} alt=""/>
                    <div>
                        <BlockTxt>
                            <p>{user.body}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={someImg[0]?.url} alt=""/>
                            <BlockUser>{user.name}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>)
                })}

                <MainF to="/publications">See more publications</MainF>
            </MainText>
        </Wrapper4>
    );
};