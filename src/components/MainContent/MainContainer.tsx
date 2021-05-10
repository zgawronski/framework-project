import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const Wrapper4 = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    max-width: 970px;
    min-height: 240px;
    max-height: 300px;
    margin: 10px;
    background-color: ${Colors.white};
    border-radius: 5px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
`;
const MainImg = styled.img`
    margin-top: -5px;
    margin-left: -5px;
    max-width: 300px;
    height: 300px;
    border-radius: 5px 0 0 5px;
`;

const MainText = styled.div`
    padding: 5px;

`;

const MainTitle = styled.h1`
    margin-left: 5px;
    color: ${Colors.black};
`;

const MainBlocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 5px;

`;

const BlockImgPlace = styled.div`
    display: flex;
    margin: 5px;
    border-radius: 3px;
    position: relative;
`;

const BlockImg = styled.img`
    position: relative;
    width: 50px;
    margin: 5px;
    border-radius: 3px;
`;

const MainP = styled.p`
    position: absolute;
    top: 180px;
    left: 20px;
    color: ${Colors.white};
`;

const BlockImgF = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${Colors.white};
    text-decoration: none;
    padding: 5px;
    font-size: ${fontSize[14]};
`;

const BlockTxt = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: ${fontSize[16]};
    padding: 5px;
`;

const MainF = styled.a`
    color: ${Colors.text};
    margin-left: 5px;
    font-size: ${fontSize[14]};
    text-decoration: none;
`;

const BlockF = styled.div`
    position: absolute;
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

export const MainContainer: FC = () => {
    const postId: number = 3;

    const [postImage, setPostImage ] = useState<any>(1);
    const [title, setTitle] = useState<any>([]);
    const [image, setImage] = useState<any>([]);
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
                setUserID(data.userId);

                const responseBody = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
                const dataBody = await responseBody.json();
                const body = JSON.stringify(data.body).slice(1,-103);
                const bodyFirstLetterUpper = body.charAt(0).toUpperCase() + body.slice(1);
                setUserID(dataBody.userId);

                const responseUrl = await fetch(`https://jsonplaceholder.typicode.com/photos/${postID}`);
                const dataUrl = await responseUrl.json();
                const url = JSON.stringify(dataUrl.url).slice(1,-1);

                const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const dataUser = await responseUser.json();

                const responseUrlIcon = await fetch(`https://jsonplaceholder.typicode.com/photos/${userId}`);
                const dataUrlIcon = await responseUrlIcon.json();


                setTitle((arr: any) => ([...arr, titleFirstLetterUpper]));
                setImage((arr: any) => ([...arr, url]));
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
        async function getPostImage(postID: number){
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${postID}`);
                const data = await response.json();
                const url = JSON.stringify(data.url).slice(1,-1);
                setPostImage(url);
            }catch(e){}

        }
        try{
            getPostImage(postId)
            getInfo(postId);
            getInfo(5);
            getInfo(6);
        } catch(e){}

    });

    return (
        <Wrapper4>
            <BlockImgPlace>
                <MainImg src={postImage} alt="" />
                <MainP>{body[1]}</MainP>
                <BlockImgF>
                    <DataP>7 jan 2020</DataP>
                    <BlockUserImg src={userImage} alt=""/>
                    <BlockUser>{userName[2]}</BlockUser>
                </BlockImgF>
            </BlockImgPlace>
            <MainText>
                <MainTitle>Latest publications</MainTitle>
                <MainBlocks>
                    <BlockImg src={image[0]} alt=""/>
                    <div>
                        <BlockTxt>
                            <p>{title[0]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>
                <MainBlocks>
                    <BlockImg src={image[1]} alt=""/>
                    <div>
                        <BlockTxt>
                            <p>{title[1]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>
                <MainBlocks>
                    <BlockImg src={image[2]} alt=""/>
                    <div>
                        <BlockTxt>
                            <p>{title[2]}</p>
                        </BlockTxt>
                        <BlockF>
                            <DataP>7 jan 2020</DataP>
                            <BlockUserImg src={userImage} alt=""/>
                            <BlockUser>{userName[2]}</BlockUser>
                        </BlockF>
                    </div>
                </MainBlocks>


                <MainF href="">See more publications</MainF>
            </MainText>
        </Wrapper4>
    );
};