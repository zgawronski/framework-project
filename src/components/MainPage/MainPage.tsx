import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

//import { Colors } from '../../styledHelpers/Colors';
import { MainContainer } from './MainContainer';


const Wrapper = styled.section`

`;

const Content = styled.div`
    max-width: 1200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;

// const ContentDiv = styled.div`

//     padding: 10px;
// `;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <MainContainer/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;


