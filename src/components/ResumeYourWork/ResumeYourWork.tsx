import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';

const WrapperR = styled(Wrapper)`
    display: block;
    position: relative;
    width: 970px;
    margin: 10px;
    padding: 0;

    h2 {
        color: ${Colors.blue};
        font-size: ${fontSize[18]};
        font-weight: 600;
    }
`;


const MainTitle = styled.h1`
    margin-left: 5px;
    color: ${Colors.black};
    font-size: ${fontSize[22]};
    font-weight: 600;
`;

const MainBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 5px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};

`;



const BlockTxt = styled.div`
    display: block;
    font-size: ${fontSize[16]};
    padding: 5px;
`;


const BlockF = styled.div`
    position: relative;
    bottom:0;
    display: inline-flex;
    text-decoration: none;
    padding: 5px;
    font-size: ${fontSize[12]};
`;

const BlockUserImg = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 5px 5px 5px;

    border-radius: 50%;
`;

const DataP = styled.p`
    color: ${Colors.grey};
`;

const BlockUser = styled.div``;


export const ResumeYourWork: FC = () => {
    const postId: number = 3;

    const [title, setTitle] = useState<any>([]);
    const [body, setBody] = useState<any>([]);

    const [userId, setUserID] = useState<any>(10);
    const [userName, setUserName] = useState<any>([]);
    const [userImage, setUserImage] = useState<any>([]);

    useEffect(() => {
        async function getInfo(postID: number) {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
                const data = await response.json();
                const title = JSON.stringify(data.title).slice(1,-1);
                const titleFirstLetterUpper = title.charAt(0).toUpperCase() + title.slice(1);
                const body = JSON.stringify(data.body).slice(1,-1);
                const bodyFirstLetterUpper = body.charAt(0).toUpperCase() + body.slice(1);

                setUserID(data.userId);

                const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const dataUser = await responseUser.json();

                const responseUrlIcon = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
                const dataUrlIcon = await responseUrlIcon.json();


                setTitle((arr: any) => ([...arr, titleFirstLetterUpper]));
                setBody((arr: any) => ([...arr, bodyFirstLetterUpper]));


                if(dataUser.name != null){
                    const userName = JSON.stringify(dataUser.name).slice(1,-1);
                    setUserName((arr: any) => ([...arr, userName]));
                }

                if(dataUrlIcon.url != null){
                    const urlIcon = JSON.stringify(dataUrlIcon.url).slice(1,-1);
                    setUserImage(urlIcon);
                }
            }catch(e){}


        }

        try{
            getInfo(postId);
            getInfo(5);
            getInfo(6);
        } catch(e){}

    }, [userId]);
    return (
        <WrapperR>
            <MainTitle>Resume your work</MainTitle>
                <MainBlocks>
                    <div>
                        <BlockTxt>
                            <h2>{title[0]}</h2>
                            <br/>
                            <p>{body[0]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>
                <MainBlocks>
                    <div>
                        <BlockTxt>
                            <h2>{title[1]}</h2>
                            <br/>
                            <p>{body[1]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>
                <MainBlocks>
                    <div>
                        <BlockTxt>
                            <h2>{title[2]}</h2>
                            <br/>
                            <p>{body[2]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>
        </WrapperR>

    );
};