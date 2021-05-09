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
    box-shadow: 4px 8px 16px 0px ${Colors.lightgrey};
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
    position: absolute;
    right: 2px;
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
                    <CustomInput type="text" placeholder="Search"/>

                    <CustomImg src="./media/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="./media/icons/house.png" />
                    <CustomImg src="./media/icons/comments.png" />
                    <CustomImg src="./media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};