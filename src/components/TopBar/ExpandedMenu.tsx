import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
import { getSomeImg, getUsers } from '../../actions/usersActions';

type GetSomeImg = ReturnType<typeof getSomeImg>
type GetUsers = ReturnType<typeof getUsers>

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: 40px;
    background: ${Colors.white};
    padding: 1em;
    border: 1px solid ${Colors.hrgrey};
    z-index: 100;
    overflow-y: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
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

const UserImg = styled.img`
    border-radius: 50%;

`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const LogoutDiv = styled.div`
`;

const LogoutSpan = styled.span`
    position: absolute;
    color: ${Colors.grey};
`;

const LogoutImg = styled.img`

`;



export const ExpandedMenu: FC = () => {

    const { someImg, usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetSomeImg>(getSomeImg());
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    return (
        <WrapperNav>
            <ul>
                <li>
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>
                <p>Platform</p>
                {'Home'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/">
                        <div>
                            <img src="./media/icons/house2.png" alt=""/>
                            <span>Home</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'Publications'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/publications">
                        <div>
                            <img src="./media/icons/publications3.png" alt=""/>
                            <span>Publications</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'People'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/people">
                        <div>
                            <img src="./media/icons/people.svg" alt=""/>
                            <span>People</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'Entities'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/entities">
                        <div>
                            <img src="./media/icons/entities2.svg" alt=""/>
                            <span>Entities</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'Administration'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/administration">
                        <div>
                            <img src="./media/icons/administration.svg" alt=""/>
                            <span>Administration</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <p>Workspace</p>
                <li>
                {'Cilent contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/client_contract">
                    <div>
                        <img src="./media/icons/sign.png" alt=""/>
                        <span>Cilent contract</span>
                    </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/suplier_contract">
                        <div>
                            <img src="./media/icons/sign.png" alt=""/>
                            <span>Supplier contract</span>
                        </div>
                    </StyledLink>
                }
                </li>
                {'Corporate'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/corporate">
                        <div>
                            <img src="./media/icons/entities.svg" alt=""/>
                            <span>Corporate</span>
                        </div>
                    </StyledLink>
                }
                <li>
                {'Group Norms'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/group_norms">
                        <div>
                            <img src="./media/icons/publications4.png" alt=""/>
                            <span>Group Norms</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <li>
                {'Real estate contracts'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/real_estate_contracts">
                        <div>
                            <img src="./media/icons/sign.png" alt=""/>
                            <span>Real estate contracts</span>
                        </div>
                    </StyledLink>
                }
                </li>
                <hr></hr>

                <div>
                    <UserImg src={someImg[0].url} alt=""></UserImg>
                    <span>{JSON.stringify(usersList[0].name).slice(1,-1)}<br /> See profile </span>
                </div>
                <StyledLink to="/privacy">
                    <div>
                        <img src="./media/icons/privacy.svg" alt=""/>
                        <span>Privacy</span>
                    </div>
                </StyledLink>
                <StyledLink to="/settings">
                    <div>
                        <img src="./media/icons/settings.svg" alt=""/>
                        <span>Settings</span>
                    </div>
                </StyledLink>
            </ul>

            <hr></hr>

            <LogoutDiv>
                <StyledLink to="/logout"><LogoutImg src="./media/icons/logout.png" alt="" className="logoutImg"></LogoutImg><LogoutSpan className="logoutSpan">Logout</LogoutSpan></StyledLink>
            </LogoutDiv>

        </WrapperNav>
    );
};