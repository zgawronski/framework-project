import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const MainSlider = styled.div`
    overflow-x: scroll;
    display: flex;
    width: 970px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        width: 0;
       background: transparent;
    }
    scrollbar-width: none;
    background-color: transparent;
`;

const MainSlide = styled.div`
    //display: flex;
    //grid-template-rows: 1fr 1.2fr;
    position: relative;
    width: 250px;
    height: 200px;
    margin-right: 10px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
    //margin-left: 10px;
`;

const SlideImg = styled.img`
    width: 250px;
    height: 100px;
    object-fit: cover;

`;
const SlideIco = styled.img`
    position: absolute;
    top: 70px;
    left: 10px;
    width: 50px;
    height: 50px;
    background-color: ${ Colors.white };
    padding: 5px;
    z-index: 10;
    border-radius: 3px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
`;

const SlideH1 = styled.h1`
    position: relative;
    text-align: right;
    padding-right: 20px;

`;

const SlideIcoS = styled.img`
    max-width: 12px;
    margin-left: 5px;
`;

const SliderNav = styled.div`
    display: flex;
    position: relative;
    top: 40px;
    left: 15px;
    p{
        margin-left: 5px;
        margin-right: 5px;
        font-size: ${fontSize[12]};
    }
`;

const SliderInfo = styled.p`
    position: relative;
    color: ${ Colors.grey };
    top: 45px;
    left: 15px;
    font-size: 10px;
`;


export const Slider: FC = () => {

    return (

        <MainSlider id='slider'>
            <MainSlide>
                <SlideImg src='./media/contract.jpg'/>
                <SlideIco src='./media/icons/sign.png'/>
                <SlideH1>Client contract</SlideH1>
                <SliderNav>
                    <SlideIcoS src='./media/icons/sign.png'/>
                    <p>Contact</p>
                    &bull;
                    <SlideIcoS src='./media/icons/people.svg'/>
                    <p>150 users</p>
                </SliderNav>
                <SliderInfo>Last update 2 days ago</SliderInfo>
            </MainSlide>
            <MainSlide>
                <SlideImg src='./media/contract2.jpg'/>
                <SlideIco src='./media/icons/sign.png'/>
                <SlideH1>Supplier contract</SlideH1>
                <SliderNav>
                    <SlideIcoS src='./media/icons/sign.png'/>
                    <p>Contact</p>
                    &bull;
                    <SlideIcoS src='./media/icons/people.svg'/>
                    <p>150 users</p>
                </SliderNav>
                <SliderInfo>Last update 2 days ago</SliderInfo>
            </MainSlide>
            <MainSlide>
                <SlideImg src='./media/corpo.jpg'/>
                <SlideIco src='./media/icons/entities2.svg'/>
                <SlideH1>Corporate</SlideH1>
                <SliderNav>
                    <SlideIcoS src='./media/icons/sign.png'/>
                    <p>Contact</p>
                    &bull;
                    <SlideIcoS src='./media/icons/people.svg'/>
                    <p>150 users</p>
                </SliderNav>
                <SliderInfo>Last update 2 days ago</SliderInfo>
            </MainSlide>
            <MainSlide>
                <SlideImg src='./media/libs.jpg'/>
                <SlideIco src='./media/icons/publications3.png'/>
                <SlideH1>Client contract</SlideH1>
                <SliderNav>
                    <SlideIcoS src='./media/icons/sign.png'/>
                    <p>Contact</p>
                    &bull;
                    <SlideIcoS src='./media/icons/people.svg'/>
                    <p>150 users</p>
                </SliderNav>
                <SliderInfo>Last update 2 days ago</SliderInfo>
            </MainSlide>
            <MainSlide>
                <SlideImg src='./media/libs.jpg'/>
                <SlideIco src='./media/icons/publications3.png'/>
                <SlideH1>Client contract</SlideH1>
                <SliderNav>
                    <SlideIcoS src='./media/icons/sign.png'/>
                    <p>Contact</p>
                    &bull;
                    <SlideIcoS src='./media/icons/people.svg'/>
                    <p>150 users</p>
                </SliderNav>

                <SliderInfo>Last update 2 days ago</SliderInfo>
            </MainSlide>

        </MainSlider>
    );
}

