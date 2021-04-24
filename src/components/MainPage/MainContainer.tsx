import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';

const Wrapper4 = styled.section`
    display: flex;
    width: 100%;
    min-height: 240px;
    max-height: 300px;
    margin: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
`;
const MainImg = styled.img`
    max-width: 300px;
    max-height: 300px;
    border-radius: 5px;
`;

const MainText = styled.div`
    padding: 5px;

`;

const MainTitle = styled.h1`
    margin-left: 5px;
    color: ${Colors.black};
`;

const MainBlocks = styled.div`
    margin-top: 5px;
    display: flex;
`;

const BlockImgPlace = styled.div`
    display: flex;
    margin: 5px;
    border-radius: 3px;
    position: relative;
`;

const BlockImg = styled.img`
    position: relative;
    margin: 5px;
    border-radius: 3px;
`;

const MainP = styled.p`
    position: absolute;
    top: 200px;
    left: 20px;
    color: ${Colors.white};
    background-color: ${ Colors.black };
`;

const BlockImgF = styled.a`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${Colors.white};
    text-decoration: none;
    background-color: ${ Colors.black };
`;

const BlockTxt = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    padding: 5px;
`;

const MainF = styled.a`
    color: ${Colors.text};
    margin-left: 5px;
    font-size: 14px;
    text-decoration: none;
`;

const BlockF = styled.a`
    text-decoration: none;
`;

export const MainContainer: FC = () => {
    return (
        <Wrapper4>
            <BlockImgPlace>
                <MainImg src="./media/building.jpg" alt="" />
                <MainP>Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo</MainP>
                <BlockImgF href="">7 jan 2020 Img JohnDoe  </BlockImgF>
            </BlockImgPlace>
            <MainText>
                <MainTitle>Latest publications</MainTitle>
                <MainBlocks>
                    <BlockImg src="./media/hands.png" alt=""/>
                    <BlockTxt>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo</p>
                        <BlockF href="">7 jan 2020 Img JohnDoe  </BlockF>
                    </BlockTxt>
                </MainBlocks>
                <MainBlocks>
                    <BlockImg src="./media/hands.png" alt=""/>
                    <BlockTxt>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo</p>
                            <BlockF href="">7 jan 2020 Img JohnDoe </BlockF>
                    </BlockTxt>
                </MainBlocks>
                <MainBlocks>
                    <BlockImg src="./media/hands.png" alt=""/>
                    <BlockTxt>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit... and one more line for the demo</p>
                        <BlockF href="">7 jan 2020 Img JohnDoe  </BlockF>
                    </BlockTxt>
                </MainBlocks>

                <MainF href="">See more publications</MainF>
            </MainText>
        </Wrapper4>
    );
};