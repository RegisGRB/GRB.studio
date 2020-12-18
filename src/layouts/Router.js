import React from "react";
import { BrowserRouter, Route ,Switch,Redirect} from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Header from "../components/header/header";

const Router = () => {
    
const routes = [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/SignIn",
      component: SignIn,
    }
  ];
  return (
    <BrowserRouter>
        <Header/>
        <Route
          render={({ location }) => (
            <Switch location={location} key={location.pathname}>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
              <Redirect to="/" />
            </Switch>
          )}
        />
    </BrowserRouter>
  );
};
export default Router;