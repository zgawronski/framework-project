import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../../styledHelpers/Components';
import { CustomImg } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import { ExpandedMenu } from './ExpandedMenu';

//import { relative } from 'node:path';


const Wrapper2 = styled(Wrapper)`
    max-width: 1250px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 2px 4px 8px 0px ${Colors.lightgrey};
`;

const InnerWrapper = styled.div`
    width: 100%;
    height: 40px;
    background: ${Colors.white};
    display: flex;
    align-items: center;
    position: relative;
    padding: 2px;
`;

const RightIcons = styled.div`
    display: flex;
    position: absolute;
    right: 2px;
`;


const CustomImg2Div = styled.div`
display: flex;
position: relative;
justify-content: center;
background-color: ${Colors.lightgrey};
border-radius: 50%;
margin-right: 5px;
width: 35px;
height: 35px;
align-items: center;

div{
    position: absolute;
    top: -5px;
    right: -5px;
    padding: 2px 8px 2px 8px;
    margin: auto;
    font-size: ${fontSize[12]};
    font-weight: 600;
    color: ${Colors.white};
    border-radius: 8px;
    background-color: ${Colors.blue};
}
`;

const CustomImg2 = styled(CustomImg)`
    padding: 0;
    width: 20px;
    height: 20px;
`;

const InputWrapper = styled.div`
    width: 50%;
    margin: 20px;
    border: 1px solid ${Colors.grey};
    border-radius: 3px;
    display: flex;
    align-items: center;

`;


const CustomSpan = styled.span`
    position: absolute;
    padding: 5px;
`;

const LogoImg = styled.img`
    margin: 0 5px 0 5px;
    width: 30px;

`;

const CustomInput = styled.input`
    border: none;
    width: 100%;
    padding: 8px;
    margin: 0 20px 0 0;
    border-radius: 3px;
    text-align: center;
    &:hover {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

const MenuWrapper = styled.div`
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    width: 250px;
    justify-content: space-between;
`;

const LeftSide = styled.div`
    span{
        margin: 0 5px 0px 5px;
        font-size: ${fontSize[20]};
        text-align: center;
    }

`;

export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return(
        <Wrapper2>
            <InnerWrapper>
                <LogoImg  src="./media/logo.png"/>

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <CustomImg src="./media/icons/house2.png" alt="" />
                        <CustomSpan>Home</CustomSpan>
                    </LeftSide>
                    <img onClick={menuHandler} src="./media/icons/arrow-down.png" alt="" />
                   {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </MenuWrapper>

                <InputWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster"/>

                    <CustomImg src="./media/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png" />
                    <CustomImg2Div>
                        <CustomImg2 src="./media/icons/comments.png" />
                        <div>3</div>
                    </CustomImg2Div>
                    <CustomImg2Div>
                        <CustomImg2 src="./media/icons/bell.png" />
                        <div>2</div>
                    </CustomImg2Div>
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};