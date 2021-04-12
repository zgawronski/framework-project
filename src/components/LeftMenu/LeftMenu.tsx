import React, { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';


const LeftMain = styled.div`
    width: 400px;
    height: auto;
    background-color: rgb(245, 247, 249)
`
// const LeftMainPhotoBox = styled.div`
//     Width: 300px;
//     height: 300px;
//     background-color: ${Colors.black};
// `;


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
                <LeftMain>
                   
                </LeftMain>
            </InnerWrapper>

        </Wrapper>
    );
};