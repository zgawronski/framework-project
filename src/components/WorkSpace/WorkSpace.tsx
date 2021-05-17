import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';

import { Slider } from './Slider'

const WrapperW = styled(Wrapper)`
    position: relative;
    display: block;
    width: 970px;
    padding: 0;
    margin: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
    h2{
        font-size: ${fontSize[22]};
        font-weight: 600;
        color: ${Colors.black};
        margin-left: 20px;

    }
`;

const LButton = styled('button')`
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 1;
    left: -40px;
    top: 125px;
    border-radius: 50%;
    background-image:url('./media/icons/angle-left-solid.svg');
    background-position: center;
    background-size: 30px 30px;
`;

const RButton = styled('button')`
    position: absolute;
    width: 30px;
    height: 30px;
    z-index: 1;
    right: -60px;
    top: 125px;
    border-radius: 50%;
    background-image:url('./media/icons/angle-right-solid.svg');
    background-position: center;
    background-size: 30px 30px;
`;

export const WorkSpace: FC = () => {

    const scroll = (x: number, y: number) => {
        var scrollButton = document.getElementById("slider");
        scrollButton?.scrollBy(x, y);

    };
    return (
        <WrapperW>
            <h2>Workspaces</h2>
            <LButton id='button-left' onClick={() => scroll(-250, 0)}></LButton>
            <Slider/>
            <RButton id='button-right' onClick={() => scroll(250, 0)}></RButton>
        </WrapperW>
    );
}

