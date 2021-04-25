import { FC } from 'React';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const MainSlider = styled.div`
    overflow-x: auto;
    display: flex;
    width: 980px;
    margin: 10px;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        width: 0;
       background: transparent;
    }
    //border-radius: 8px;
    background-color: transparent;
`;

const MainSlide = styled.div`
    display: grid;
    grid-template-rows: 1fr 1.2fr;
    position: relative;
    width: 350px;
    height: 200px;
    margin-right: 10px;
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
    //margin-left: 10px;
`;

const SlideImg = styled.img`
    width: 100%;
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
    top: 20px;
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
    top: 35px;
    left: 15px;
    font-size: 10px;
`;

// function slideShow(){

// }

export const Slider: FC = () => {
    return (
        <MainSlider>
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

