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
    z-index: 10;
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

    }
    hr {
        width: 220px;
        margin-left: -16px;
        margin-right: -16px;
        border-color: ${Colors.hrgrey}
    }
    div {
        display:flex;
        position: relative;
    }
`;

const LogoutDiv = styled.div`
`;

const LogoutSpan = styled.span`
    text-decoration: none;
    position: absolute;
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
                    <div>
                        <img src="./media/icons/house2.png" alt=""/>
                        <span>Home</span>
                    </div>
                }
                </li>
                <li>
                {'Publications'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/publications3.png" alt=""/>
                        <span>Publications</span>
                    </div>
                }
                </li>
                <li>
                {'People'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/people.svg" alt=""/>
                        People
                    </div>
                }
                </li>
                <li>
                {'Entities'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/entities2.svg" alt=""/>
                        Entities
                    </div>
                }
                </li>
                <li>
                {'Administration'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/administration.svg" alt=""/>
                        Administration
                    </div>
                }
                </li>
                <p>Workspace</p>
                <li>
                {'Cilent contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/sign.png" alt=""/>
                        Cilent contract
                    </div>
                }
                </li>
                <li>
                {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/sign.png" alt=""/>
                        Supplier contract
                    </div>
                }
                </li>
                {'Corporate'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/entities.svg" alt=""/>
                        Corporate
                    </div>
                }
                <li>
                {'Group Norms'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/publications4.png" alt=""/>
                        Group Norms
                    </div>
                }
                </li>
                <li>
                {'Real estate contracts'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                    <div>
                        <img src="./media/icons/sign.png" alt=""/>
                        Real estate contracts
                    </div>
                }
                </li>
                <hr></hr>

                <div>
                    <img src={imageUrl} alt=""></img>
                    <span>{JSON.stringify(person).slice(1,-1)}<br /> See profile </span>

                </div>

                <div>
                    <img src="./media/icons/privacy.svg" alt=""/>
                    Privacy
                </div>


                <div>
                    <img src="./media/icons/settings.svg" alt=""/>
                    Settings
                </div>

            </ul>

            <hr></hr>

            <LogoutDiv>
                <Link to="/logout"><LogoutImg src="./media/icons/logout.png" alt="" className="logoutImg"></LogoutImg><LogoutSpan className="logoutSpan">Logout</LogoutSpan></Link>
            </LogoutDiv>

        </WrapperNav>
    );
};