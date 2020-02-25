import React from "react";
import client from "modules/ApiClient";
import * as ReactRedux from "react-redux";
import * as Theme from "./theme";
import * as StyledComponents from "styled-components";
import * as StyledResetAdvanced from "styled-reset-advanced";
import * as History from "history";
import * as Store from "store";
import * as ErrorBoundary from "modules/ErrorBoundary";
import * as ReactRouter from "react-router-dom";
// import * as Modules from 'modules/PrivateRoute'
import * as AppContext from "modules/ApplicationContext";
import * as ConnectedRouter from "connected-react-router";
import * as Top from "page/Top";
import * as Login from "page/Login";
import * as Signup from "page/SignUp";
import * as SignUpDone from "page/SignUpDone";
import * as Terms from "page/Terms";
import * as ForgotPassword from "page/ForgotPassword";
import * as ForgotPasswordDone from "page/ForgotPasswordDone";
import * as NotFound from "page/NotFound";
import * as MailAddressChange from "page/MailAddressChange";
import * as MailAddressChangeDone from "page/MailAddressChangeDone";
import * as ReactCookie from "react-cookie";
import * as Navigation from "component/molecule/Navigation";
import * as Header from "component/molecule/Header";
import Footer from "component/molecule/Footer";
import * as PrivacyPolicy from "page/PrivacyPolicy";
import * as AboutCompany from "page/AboutCompany";
import * as Faq from "page/Faq";
import * as SiteMap from "page/SiteMap";

const GlobalStyle = StyledComponents.createGlobalStyle`
  ${StyledResetAdvanced.default}
`;

const history = History.createBrowserHistory();
const store = Store.createStore(history);
const Application: React.FC = () => {
  const [applicationState, setState] = React.useState<{
    user: {
      isAuthenticated: boolean;
      cookie: string;
      id: string;
      email: string;
    };
  }>({
    user: { isAuthenticated: false, cookie: "", id: "", email: "" }
  });
  // const fetchMe = async () => {
  //   try {
  //     const { data } =

  //   } catch (e) {}
  // .then(res => {
  //     const cookie = document.cookie.split('_csrf=')[1] // TODO
  //     if (res.status) {
  //       setState({ user: { isAuthenticated: true, cookie } })
  //     } else {
  //       setState({ user: { isAuthenticated: false, cookie } })
  //     }
  //   })
  //   .catch(e => {
  //     // console.log(e.response.data.status);iA
  //     const cookie = document.cookie.split('_csrf=')[1] // TODO
  //     setState({ user: { isAuthenticated: false, cookie } })
  //     // ログインログアウト制御 ここを外す　history.push('/login')
  //   })
  // }
  // const context = React.useContext(Context.default)
  // const dispatch = ReactRedux.useDispatch()
  React.useEffect(() => {
    const cookie = document.cookie.split("_csrf=")[1];
    let unmounted = false;
    const f = async () => {
      const res = await client.get("/me");
      if (!unmounted) {
        setState({
          user: { isAuthenticated: false, cookie, id: "", email: "" }
        });
      }
      if (res.status === 200) {
        setState({
          user: {
            isAuthenticated: true,
            cookie,
            id: res.data.user.id,
            email: res.data.user.email
          }
        });
      } else {
        setState({
          user: { isAuthenticated: false, cookie, id: "", email: "" }
        });
      }
    };
    f();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);

  const handleClickLogOut = React.useCallback(() => {
    let unmounted = false;
    const f = async () => {
      const res = await client.get("/auth/logout");
      if (!unmounted) {
      }
      if (res.status === 200) {
        window.location.reload();
        window.location.href = "/login";
        setState({
          user: { isAuthenticated: false, email: "", id: "", cookie: "" }
        });
      } else {
        console.log("失敗しました");
      }
    };
    f();
    const cleanup = () => {
      unmounted = true;
    };
    return cleanup;
  }, []);
  return (
    <ErrorBoundary.default>
      <ReactRedux.Provider store={store}>
        <ConnectedRouter.ConnectedRouter history={history}>
          <ReactCookie.CookiesProvider>
            <StyledComponents.ThemeProvider theme={Theme.theme}>
              <>
                <GlobalStyle />
                <AppContext.default.Provider
                  value={{
                    applicationState: {
                      user: {
                        isAuthenticated: applicationState.user.isAuthenticated,
                        cookie: applicationState.user.cookie,
                        id: applicationState.user.id,
                        email: applicationState.user.email
                      }
                    }
                  }}
                >
                  <Header.Component
                    isAuthenticated={applicationState.user.isAuthenticated}
                    handleClickLogOut={handleClickLogOut}
                  />
                  <Navigation.Component
                    handleOnClickLogOut={handleClickLogOut}
                    isAuthenticated={applicationState.user.isAuthenticated}
                  />
                  <ReactRouter.Switch>
                    <ReactRouter.Route
                      exact
                      render={props => <Top.Component {...props} />}
                      path={`/`}
                    />
                    <ReactRouter.Route
                      component={Login.Component}
                      exact
                      path="/login"
                    />
                    <ReactRouter.Route
                      component={Signup.Component}
                      exact
                      path="/signup"
                    />
                    <ReactRouter.Route
                      component={SignUpDone.Component}
                      exact
                      path="/signup/done/:token?"
                    />
                    <ReactRouter.Route
                      component={Terms.Component}
                      exact
                      path="/terms"
                    />
                    <ReactRouter.Route
                      component={ForgotPassword.Component}
                      exact
                      path="/forgotpassword"
                    />
                    <ReactRouter.Route
                      component={Faq.Component}
                      exact
                      path="/faq"
                    />
                    <ReactRouter.Route
                      component={PrivacyPolicy.Component}
                      exact
                      path="/privacypolicy"
                    />
                    <ReactRouter.Route
                      component={SiteMap.Component}
                      exact
                      path="/sitemap"
                    />
                    <ReactRouter.Route
                      component={AboutCompany.Component}
                      exact
                      path="/aboutcompany"
                    />
                    <ReactRouter.Route
                      component={ForgotPasswordDone.Component}
                      exact
                      path="/forgotpassword/done/:token?"
                    />
                    <ReactRouter.Route
                      component={MailAddressChange.Component}
                      exact
                      path={`/changemailaddress`}
                    />
                    <ReactRouter.Route
                      component={MailAddressChangeDone.Component}
                      exact
                      path="/changemailaddress/done/:token?"
                    />
                    {/* <Modules.ProtectedRoute
                      isAuthenticated={applicationState.user.isAuthenticated}
                      isAllowed={true}
                      restrictedPath="/login"
                      authenticationPath="/login"
                      component={Mypage.Component}
                      exact
                      path={`/mypage`}
                    /> */}
                    <ReactRouter.Route component={NotFound.Component} />
                  </ReactRouter.Switch>
                  <Footer />
                </AppContext.default.Provider>
              </>
            </StyledComponents.ThemeProvider>
          </ReactCookie.CookiesProvider>
        </ConnectedRouter.ConnectedRouter>
      </ReactRedux.Provider>
    </ErrorBoundary.default>
  );
};

export default Application;
