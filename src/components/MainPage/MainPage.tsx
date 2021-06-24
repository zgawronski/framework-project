import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { LatestPublications } from '../LatestPublications/LatestPublications';
import { WorkSpace } from '../WorkSpace/WorkSpace'
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork';
import { Profile } from '../Profile/Profile';
import { Publications } from '../Publications/Publications';
import { Entities } from '../Entities/Entities';
import { Administration } from '../Administration/Administration';

//import { Colors } from '../../styledHelpers/Colors';

import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/usersActions';
//import { Entities } from '../Entities/Entities';

type GetUsers = ReturnType<typeof getUsers>

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

const MainPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    }, [dispatch]);

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
                            <Publications />
                        </Route>
                        <Route path="/ecosystem" exact>
                            <Publications />
                        </Route>
                        <Route path="/people" exact>
                            <p>people</p>
                        </Route>
                        <Route path="/entities" exact>
                            <Entities />
                        </Route>
                        <Route path="/administration" exact>
                            <Administration />
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
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path="/" exact>
                            <RightSide>
                                <LatestPublications />
                                <WorkSpace />
                                <ResumeYourWork />
                            </RightSide>
                        </Route>

                    </Switch>

                </Content>

            </WrapperM>
        </Router>
    );
};

export default MainPage;


