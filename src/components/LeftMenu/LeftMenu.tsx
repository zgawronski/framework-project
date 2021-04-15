import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
    width: 220px;
    height: 240px;
    background: ${Colors.white};
    border-radius: 8px;
`;

const LeftMain = styled.div`
    width: 300px;
    height: auto;
`
const PhotoBox = styled.div`
    Width: 100%;
    height: 100%;
    background-color: ${Colors.white};
    text-align: center;
    display: block;
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
    height: 1px;
    border: none;
    background-color: ${Colors.grey};
`;

const BoxText = styled.div`
    position: relative;
    padding: 5px;

`;
const CustomText = styled.div`
    display: flex;
    width: 100%;
`;

const CustomImg = styled.img`
    width: 20px;
    margin-left: 10px;
`;
const CustomP = styled.p`
    padding: 5px;
    text-align: left;
`;

const ButtonImg = styled.img`
    position: absolute;
    right: 15px;
    padding: 3px;
    width: 20px;
    height: 15px;
    border: 1px solid;
    border-radius: 5px;
`;
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

                </LeftMain>
            </InnerWrapper>

        </Wrapper>
    );
};