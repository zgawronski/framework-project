import { FC, useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
//import { CustomImg } from '../../styledHelpers/Components';
//import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: 0px;
    background: ${Colors.white};
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

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const userID: number = 10;

    const [person, setPerson] = useState<any>(null);
    const [imageUrl, setImageUrl] = useState<any>(null);

    useEffect(() => {
        async function getName() {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const data = await response.json();
                setPerson(data.name);
            } catch(e){}
        }

        async function getUrl(){
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${userID}`)
                const data = await response.json();
                setImageUrl(data.url);
            } catch(e){}
        }

           getName();
           getUrl();
    });

    return (
        <WrapperNav>
            <ul>
                <li>
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>
                <p>Platform</p>
                {'Home'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <StyledLink to="/home">
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
                    <img src={imageUrl} alt=""></img>
                    <span>{JSON.stringify(person).slice(1,-1)}<br /> See profile </span>

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