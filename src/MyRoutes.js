import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./myCss.css";
import LoggedInProfile from "./loggedin/LoggedInProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./loggedout/MainPage";
import {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
  AuthProvider,
} from "./contexts/Context";
import MainPageContextWraper from "./contexts/MainPageContext";

export const SignInRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoggedInProfile />} />
    </Routes>
  </BrowserRouter>
);

export const MainRoute = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default function MyRoutes() {
  // const authContext = useContext(AuthContext)

  return (
    <>
      <AuthProvider>
        <AuthIsSignedIn>
          <SignInRoute />
        </AuthIsSignedIn>
        <AuthIsNotSignedIn>
          <MainPageContextWraper>
            <MainRoute />
          </MainPageContextWraper>
        </AuthIsNotSignedIn>
      </AuthProvider>
    </>
  );
}
