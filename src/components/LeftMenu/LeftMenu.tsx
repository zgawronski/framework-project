import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
    /* display: flex; */
    width: 220px;
    height: 240px;
    background: ${Colors.white};
    border-radius: 8px;
`;

const LeftMain = styled.div`
    width: 220px;
    height: auto;
    padding: 5px;
    margin-top: 5px;
`
const PhotoBox = styled.div`
    Width: 100%;
    height: 100%;
    background-color: ${Colors.white};
    text-align: center;
    border-radius: 10px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};

`;

const Photo = styled.img`
    position: relative;
    display: flex;
    margin: auto;
    margin-top: 10px;
    border-radius: 50%;
    padding: 10px;
`;

const Sign = styled.span`
    margin: 5px;
    padding: 5px;
    color: ${Colors.blue};

`;

const JobDescription = styled.p`
    color: ${Colors.grey};
    padding: 5px;
`;


const CustomHr = styled.hr`
    border-color: ${Colors.hrgrey};
`;

const BoxText = styled.div`
    position: relative;
    padding: 5px;

`;
const CustomText = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5px;

`;

const CustomImg = styled.img`
    width: 10%;
    height: 10%;
    margin-left: 10px;
`;
const CustomP = styled.p`
    width: 60%;
    margin-left: 5px;
    margin-right: 5px;
    text-align: left;
`;

const ButtonImg = styled.img`
    padding: 3px;
    width: 7%;
    height: 7%;
    border: 1px solid;
    border-radius: 5px;
`;

const LeftColumn = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`
export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <PhotoBox>
                    <Photo src="./media/face.jpeg" alt=""/>
                    <Sign>Zbigniew Gawroński</Sign>
                    <JobDescription>Job title - Company</JobDescription>
                    <CustomHr></CustomHr>
                    <BoxText>
                        <CustomText>
                            <CustomImg src="./media/icons/network.png" alt="" />
                            <CustomP>Your network</CustomP>
                            <ButtonImg src="./media/icons/user-plus.png" alt="" />
                        </CustomText>
                        <CustomText>
                            <CustomImg src="./media/icons/publications.png" alt="" />
                            <CustomP>Your Publications</CustomP>
                            <ButtonImg src="./media/icons/plus.png" alt="" />
                        </CustomText>
                    </BoxText>
                </PhotoBox>
                <LeftMain>
                    <LeftColumn>
                        <CustomImg src="./media/icons/publications.png" alt="" />
                        <CustomP>Publications</CustomP>
                    </LeftColumn>
                    <LeftColumn>
                        <CustomImg src="./media/icons/ecosystem.png" alt="" />
                        <CustomP>Ecosystem</CustomP>
                    </LeftColumn>
                    <LeftColumn>
                        <CustomImg src="./media/icons/entities2.png" alt="" />
                        <CustomP>Entites</CustomP>
                    </LeftColumn>
                </LeftMain>
            </InnerWrapper>

        </Wrapper>
    );
};