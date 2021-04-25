import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

//import { Colors } from '../../styledHelpers/Colors';

import { MainContainer } from './MainContainer';
import { WorkSpace } from '../WorkSpace/WorkSpace'

const WrapperM = styled.section`

`;

const Content = styled.div`
    max-width: 1200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

const RightSide = styled.div`

`;

// const ContentDiv = styled.div`

//     padding: 10px;
// `;

const MainPage: FC = () => {
    return (
        <WrapperM>
            <TopBar />
            <Content>
                <LeftMenu />
                <RightSide>
                    <MainContainer/>
                    <WorkSpace/>
                </RightSide>
            </Content>

        </WrapperM>
    );
};

export default MainPage;


