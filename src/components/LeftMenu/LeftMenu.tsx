import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../styledHelpers/Colors';

const WrapperLM = styled.section`
    width: 220px;
    border-radius: 8px;
`;

const LeftMain = styled.div`
    margin-top: 10px;
    width: 220px;
    height: auto;
    padding: 5px;
`
const PhotoBox = styled.div`
    Width: 100%;
    background-color: ${Colors.white};
    text-align: center;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};

`;

const Photo = styled.img`
    width: 90px;
    height: 90px;
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
    color: ${Colors.darkblue};

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

const ButtonImg = styled.img`
    padding: 3px 5px 3px 5px;
    width: 15px;
    height: 12px;
    border: 1px solid black;
    border-radius: 5px;
`;

const CustomImg = styled.img`
    width: 18px;
    height: 20px;
    margin-left: 10px;
`;
const CustomP = styled.p`
    width: 60%;
    margin-left: 5px;
    margin-right: 5px;
    text-align: left;
`;

const CustomA = styled(Link)`
    margin-left: 5px;
    color: ${Colors.black};
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const LeftColumn = styled.section`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
`;
export const LeftMenu: FC = () => {

    const userID: number = 10;

    const [person, setPerson] = useState<any>(null);
    const [company, setCompany] = useState<any>(null);
    const [imageUrl, setImageUrl] = useState<any>(null);

    useEffect(() => {
        async function getName() {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const data = await response.json();
                setPerson(data.name);
            } catch(e){}
        }
        async function getCompany() {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const data = await response.json();
                setCompany(data.company.name);
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
           getCompany();
           getUrl();
    });

    return (
        <WrapperLM>
                <PhotoBox>
                    <Photo src={imageUrl}></Photo>
                    <Sign>{JSON.stringify(person).slice(1,-1)}</Sign>
                    <JobDescription>{JSON.stringify(company).slice(1,-1)}</JobDescription>
                    <CustomHr></CustomHr>
                    <BoxText>
                        <CustomText>
                            <CustomImg src="./media/icons/network.png" alt="" />
                            <CustomP>Your network</CustomP>
                            <Link to = "/network">
                                <ButtonImg src="./media/icons/user-plus.png" alt="" />
                            </Link>
                        </CustomText>
                        <CustomText>
                            <CustomImg src="./media/icons/publications4.png" alt="" />
                            <CustomP>Your Publications</CustomP>
                            <Link to ="/publications">
                                <ButtonImg src="./media/icons/plus.png" alt="" />
                            </Link>
                        </CustomText>
                    </BoxText>
                </PhotoBox>
                <LeftMain>
                    <LeftColumn>
                        <CustomImg src="./media/icons/publications3.png" alt="" />
                        <CustomA to="/publications">Publications</CustomA>
                    </LeftColumn>
                    <LeftColumn>
                        <CustomImg src="./media/icons/ecosystem.png" alt="" />
                        <CustomA to="/ecosystem">Ecosystem</CustomA>
                    </LeftColumn>
                    <LeftColumn>
                        <CustomImg src="./media/icons/entities2.png" alt="" />
                        <CustomA to="/entities">Entites</CustomA>
                    </LeftColumn>
                </LeftMain>
        </WrapperLM>
    );
};