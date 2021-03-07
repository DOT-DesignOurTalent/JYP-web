import * as React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { MainIcon, Home, Help } from "../pages/Preview";
import GlobalStyle from "../assets/styles/global-style";
import { Nav } from "../components/Nav";
import { Create, Judge, Complete } from "../pages/Court";

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SubWrapper = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  margin-left: 150px;
`;

const Routes: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <MainWrapper>
          <SubWrapper>
            <Switch>
              <Route path="/beopjeom" component={MainIcon} exact></Route>
              <Route path="/home" component={Home} exact></Route>
              <Route path="/signup" component={Signup} exact></Route>
              <Route path="/court" exact component={Create}></Route>
              <Route path="/court/judge" exact component={Judge}></Route>
              <Route path="/court/complete" exact component={Complete}></Route>
              <Route path="/help" component={Help}></Route>
            </Switch>
          </SubWrapper>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
};

export default Routes;
