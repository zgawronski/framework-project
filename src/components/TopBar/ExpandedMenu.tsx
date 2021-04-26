import { FC, useState, ChangeEvent } from 'react';

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

    }


`;



export const ExpandedMenu: FC = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    return (
        <WrapperNav>
            <input type="text" value={inputText} onChange={inputHandler} placeholder="Filter..."/>
            <p>Platform</p>
            {'Home'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/house2.png" alt=""/>
                    <span>Home</span>
                </div>
            }
            {'Publications'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/publications3.png" alt=""/>
                    <span>Publications</span>
                </div>
            }
            {'People'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/people.svg" alt=""/>
                    People
                </div>
            }
            {'Entities'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/entities2.svg" alt=""/>
                    Entities
                </div>
            }
            {'Administration'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/administration.svg" alt=""/>
                    Administration
                </div>
            }
            <p>Workspace</p>
            {'Cilent contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/sign.png" alt=""/>
                    Cilent contract
                </div>
            }
            {'Supplier contract'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/sign.png" alt=""/>
                    Supplier contract
                </div>
            }
            {'Corporate'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/entities.svg" alt=""/>
                    Corporate
                </div>
            }
            {'Group Norms'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/publications4.png" alt=""/>
                    Group Norms
                </div>
            }
            {'Real estate contracts'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/sign.png" alt=""/>
                    Real estate contracts
                </div>
            }
            <hr></hr>
            {'Profile'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/face.jpeg" alt=""/>
                    <span>Zbigniew Gawroński<br /> See profile </span>

                </div>
            }
            {'Privacy'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/privacy.svg" alt=""/>
                    Privacy
                </div>
            }
            {'Settings'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>
                    <img src="./media/icons/settings.svg" alt=""/>
                    Settings
                </div>
            }
        </WrapperNav>
    );
};