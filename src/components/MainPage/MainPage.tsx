import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

//import { Colors } from '../../styledHelpers/Colors';

import { MainContainer } from '../MainContent/MainContainer';
import { WorkSpace } from '../WorkSpace/WorkSpace'
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';


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
                            <p>network</p>
                        </Route>
                        <Route path="/publications">
                            <p>publications</p>
                        </Route>
                        <Route path="/people">
                            <p>people</p>
                        </Route>
                        <Route path="/entities">
                            <p>entities</p>
                        </Route>
                        <Route path="/administration">
                            <p>administration</p>
                        </Route>
                        <Route path="/client_contract">
                            <p>client contract</p>
                        </Route>
                        <Route path="/suplier_contract">
                            <p>suplier contract</p>
                        </Route>
                        <Route path="/corporate">
                            <p>corporate</p>
                        </Route>
                        <Route path="/group_norms">
                            <p>group norms</p>
                        </Route>
                        <Route path="/real_estate_contracts">
                            <p>real estate contracts</p>
                        </Route>
                        <Route path="/privacy">
                            <p>privacy</p>
                        </Route>
                        <Route path="/settings">
                            <p>settings</p>
                        </Route>
                        <Route path="/logout">
                            <p>logout</p>
                        </Route>

                        <Route path="/">
                            <RightSide>
                            <MainContainer/>
                            <WorkSpace/>
                        <ResumeYourWork/>
                            </RightSide>
                        </Route>

                    </Switch>

                </Content>

            </WrapperM>
        </Router>
    );
};

export default MainPage;


