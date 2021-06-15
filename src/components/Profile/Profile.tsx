import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
//import { fontSize } from '../../styledHelpers/FontSizes';

//import { Link } from 'react-router-dom';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { getSomeImg, getUsers } from '../../actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>


const WrapperProfile = styled.section`
    position: relative;
    max-width: 970px;
    min-height: 240px;
    margin: 10px;
    padding: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    .hr{
        ::after{
        content: "";
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${Colors.lightgrey};
        };
    }
`;

const DivIcons = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 70px;
    img {
        width: 20px;
        height: 20px;
        padding: 5px
    }
    span {
        padding: 5px;

    }
`;

const DivProfile = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 20px;
    figure{
        color: ${Colors.blue}
    }

`;

const Photo = styled.img`
    width: 60px;
    height: 60px;
    position: relative;
    display: flex;
    margin: auto;
    border-radius: 50%;
    padding: 10px;
`;

const UlInfo = styled.ul`
    margin-left: 10px;
    li{
        padding: 5px;
    }
`;

const AdressInfo = styled.ul`
margin-top: 57px;
margin-left: 40px;
    li{
    padding: 5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${Colors.black};
    rotate: 90deg;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const XSpan = styled.span`
    font-weight: bold;
`;

export const Profile: FC = () => {
    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        setName(JSON.stringify(usersList[9]?.name)?.slice(1, -1));
        setEmail(JSON.stringify(usersList[9]?.email)?.slice(1, -1));
        setPhone(usersList[9]?.phone);
    }, [usersList]);

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetSomeImg>(getSomeImg());
    }, [dispatch]);

    return (
        <WrapperProfile>
            <div className="hr">
                <DivIcons>
                    <img src="./media/icons/chat.png" alt="" />
                    <span>Message</span>
                    <img src="./media/icons/request.png" alt="" />
                    <span>Create a request</span>
                    <img src="./media/icons/cluster.png" alt="" />
                    <span>Add to a cluster</span>
                    <StyledLink to="/">
                        <XSpan>X</XSpan>
                    </StyledLink>
                </DivIcons>
                <DivProfile>
                    <figure>
                        <Photo src={someImg[9]?.url}></Photo>
                        <figcaption>See Profile</figcaption>
                    </figure>
                    <UlInfo>
                        <li>{name}</li>
                        <li>CliffordChance</li>
                        <li>New-york</li>
                        <li>Partner</li>
                    </UlInfo>
                    <AdressInfo>
                        <li><span> {email} </span><br /></li>
                        <li><span> {phone} </span></li>
                    </AdressInfo>
                </DivProfile>
            </div>
        </WrapperProfile>
    );
};