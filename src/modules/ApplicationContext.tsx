import React from "react";

const AppContext = React.createContext({
  applicationState: {
    user: { isAuthenticated: false, cookie: "", id: "", email: "" }
  }
});

export type AppContextProps = {
  applicationState: {
    user: { isAuthenticated?: boolean; cookies: string; id: ""; email: "" };
  };
};
// TODO any
export const withAppContext = (Component: any) => {
  return (props: AppContextProps) => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context} />}
    </AppContext.Consumer>
  );
};

export default AppContext;
