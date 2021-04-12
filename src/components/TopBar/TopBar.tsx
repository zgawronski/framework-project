import React, { FC } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import { relative } from 'node:path';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

const InnerWrapper = styled.div`
    width: 1200px;
    background: ${Colors.white};
    display: flex;
    align-items: center;
`;

const RightIcons = styled.div`

`;

const InputWrapper = styled.div`

    margin: 20px;

    display: flex;
    align-items: center;

`;

const CustomImg = styled.img`
    width: 30px;
    height: 30px;
    padding: 8px;
`;

const CustomInput = styled.input`
    border: none;
    width: 100%;
    padding: 8px;
    margin: 0 20px 0 0;
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


`;

// interface ITopBarProps {
//     title: any;
//     kbsdkbsdk: {
//         jsdvj: string;
//         iugonlvkns: boolean;
//     }
//     someTable: {
//         a: string;
//         b: string;

//     }

// }

export const TopBar: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return(
        <Wrapper2>
            <InnerWrapper>
                <CustomImg src="./media/logo.png"/>

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <img src="./media/icons/house.png" alt="" />
                        <span>Home</span>
                    </LeftSide>

                   {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </MenuWrapper>


                <div></div>
                <InputWrapper>
                    <CustomInput type="text" />
                    <input type = "text" />

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