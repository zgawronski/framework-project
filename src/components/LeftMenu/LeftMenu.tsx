import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


// const Wrapper = styled.section`
//     padding 10px 20px;
// `;

const Menu = styled.ul`
    padding: 10px;
`;

// const MenuItem = styled.li`
//     display: flex;
//     justify-content: flex-start;
//     align-content: center;
// `;

// const MenuIcon = styled.img`
//     padding: 10px;
//     width: 32px;
//     color: ${Colors.white};
// `;

// const MenuText = styled.img`
//     padding: 10px;
//     width: 32px;
//     color: ${Colors.white};
// `;



// const Item = (props: MenuItemProps) : JSX.Element => {
//     return (
//         <MenuItem>
//             <MenuIcon src={props.icon} />
//             <MenuText> {props.text} </MenuText>
//         </MenuItem>
//         );
// }
const InnerWrapper = styled.div`
    width: 250px;
    height: 300px;
    background: ${Colors.white};
    border: 1px solid;
`;

export const LeftMenu: FC = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Menu>
                    {/* <Item icon={publicationIcon} text ="Publications" />
                    <Item icon={ekosystemIcon} text ="Ekosystem" />
                    <Item icon={entitiesIcon} text ="Entities" /> */}
                </Menu>
            </InnerWrapper>

        </Wrapper>
    );
};