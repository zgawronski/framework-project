import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

//import { Colors } from '../../styledHelpers/Colors';

import { MainContainer } from './MainContainer';
import { WorkSpace } from '../WorkSpace/WorkSpace'
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';


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
        <Router>
            <WrapperM>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                        <Route path="/network">
                            <p>napis</p>
                        </Route>
                        <Route path="/publications">
                            <p>napis2</p>
                        </Route>
                        <Route path="/">
                    <RightSide>
                        <MainContainer/>
                        <WorkSpace/>
                    </RightSide>
                    </Route>
                    </Switch>
                </Content>

            </WrapperM>
        </Router>
    );
};

export default MainPage;


