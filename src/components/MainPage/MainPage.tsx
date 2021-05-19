import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';

//import { Colors } from '../../styledHelpers/Colors';

import { MainContainer } from '../LatestPublications/LatestPublications';
import { WorkSpace } from '../WorkSpace/WorkSpace'
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';
import { useDispatch } from 'react-redux';
import { getUsers, getSomeData } from '../../actions/usersActions';
//import { Entities } from '../Entities/Entities';

type GetUsers = ReturnType<typeof getUsers>
//type GetSomeData = ReturnType<typeof getSomeData>

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

    // const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     dispatch<GetSomeData>(getSomeData('kot wraca do Ali'));
    // }

    return (
        <Router>
            <WrapperM>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                        <Route path="/network" exact>
                            <p>network</p>
                        </Route>
                        <Route path="/publications" exact>
                            <p>publications</p>
                        </Route>
                        <Route path="/ecosystem" exact>
                            <p>ecosystem</p>
                        </Route>
                        <Route path="/people" exact>
                            <p>people</p>
                        </Route>
                        <Route path="/entities" exact>
                            <p>entities</p>
                        </Route>
                        <Route path="/administration" exact>
                            <p>administration</p>
                        </Route>
                        <Route path="/client_contract" exact>
                            <p>client contract</p>
                        </Route>
                        <Route path="/suplier_contract" exact>
                            <p>suplier contract</p>
                        </Route>
                        <Route path="/corporate" exact>
                            <p>corporate</p>
                        </Route>
                        <Route path="/group_norms" exact>
                            <p>group norms</p>
                        </Route>
                        <Route path="/real_estate_contracts" exact>
                            <p>real estate contracts</p>
                        </Route>
                        <Route path="/privacy" exact>
                            <p>privacy</p>
                        </Route>
                        <Route path="/settings" exact>
                            <p>settings</p>
                        </Route>
                        <Route path="/logout" exact>
                            <p>logout</p>
                        </Route>

                        <Route path="/" exact>
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


