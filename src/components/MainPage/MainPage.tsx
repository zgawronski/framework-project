import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

import { Colors } from '../../styledHelpers/Colors';


const Wrapper = styled.section`
    background-color: ${Colors.shadow};
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    display: flex;
    margin: auto;
`;

const ContentDiv = styled.div`
    padding: 10px;
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <ContentDiv>content</ContentDiv>
            </Content>
        </Wrapper>
    );
};

export default MainPage;


