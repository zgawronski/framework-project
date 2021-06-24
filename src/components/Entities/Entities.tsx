import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import { boxShadow } from '../../styledHelpers/Components';

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
    flex-wrap: wrap;
    position: relative;
    width: 970px;
    margin: 10px;
    column-count: 3;
    column-width: 30%;
    background-color: ${Colors.white};
    border-radius: 5px;
    ${boxShadow()};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
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
    border-radius: 10px;
    border: 1px solid;
`;


const BlockImg = styled.img`
    position: relative;
    width: 65px;
    margin: 5px;
    border-radius: 3px;
`;


const BlockTxt = styled.div`
    font-size: ${fontSize[16]};
    padding: 5px;
`;

const BlockF = styled.div`
    position: absolute;
    bottom:0;
    display: inline-flex;
    text-decoration: none;
    padding-left: 5px;
    font-size: ${fontSize[12]};
`;

const BlockUserImg = styled.img`
    width: 12px;
    height: 12px;
    margin: 5px 5px 5px 5px;
    border-radius: 50%;
`;

const DataP = styled.p`
    color: ${Colors.grey};
    margin-top: 5px;
`;

const BlockUser = styled.div`
    margin-top: 5px;
`;

export const Entities: FC = () => {
    const { someImg, usersPost } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const dispatch = useDispatch();

    const [post, setPost] = useState<any>([]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetComments>(getComments());
        dispatch<GetSomeImg>(getSomeImg());
        dispatch<GetPosts>(getPosts());
        setPost(usersPost);
    }, [dispatch, usersPost]);

    return (
        <Wrapper4>
            <MainText>
                <MainTitle>Entities</MainTitle>
                {post.map((user: any) => {
                    return (
                        <MainBlocks key={user.id}>
                            <BlockImg src={someImg[0]?.url} alt="" />
                            <div>
                                <BlockTxt>
                                    <p>{user.body}</p>
                                </BlockTxt>
                                <BlockF>
                                    <DataP>7 jan 2020</DataP>
                                    <BlockUserImg src={someImg[0]?.url} alt="" />
                                    <BlockUser>{user.name}</BlockUser>
                                </BlockF>
                            </div>
                        </MainBlocks>)
                })}
            </MainText>
        </Wrapper4>
    );
};