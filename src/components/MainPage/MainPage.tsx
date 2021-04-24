import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

import { Colors } from '../../styledHelpers/Colors';


const Wrapper = styled.section`

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusamus consequatur deserunt vitae, molestias laudantium est quisquam voluptas animi eius corrupti optio eum, quaerat id distinctio doloribus a amet at!
            </Content>
        </Wrapper>
    );
};

export default MainPage;


