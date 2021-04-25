import { FC, useState, ChangeEvent } from 'react';

import styled from 'styled-components';
//import { Link } from 'react-router-dom';

import { Colors } from '../../styledHelpers/Colors';

const WrapperNav = styled.div`
    position: absolute;
    top: 24px;
    left: 0px;
    background: ${Colors.white};
    padding: 16px;
    border: 1px solid;
    z-index: 10;
    ul {
        width: 230px;
        border: 1 solid ${Colors.black};
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
            <input type="text" value={inputText} onChange={inputHandler}/>
            {'Home'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>Home</div>
            }
            {'People'.toLocaleLowerCase().includes(inputText.toLowerCase()) &&
                <div>People</div>
            }


        </WrapperNav>
    );
};