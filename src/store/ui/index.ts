import * as Redux from "redux";
import * as SignupActions from "./signup/actions";
import * as SignupReducer from "./signup/reducer";
import * as ForgotPasswordActions from "./forgotPassword/actions";
import * as ForgotPasswordReducer from "./forgotPassword/reducers";
import * as MailAddressChangeActions from "./mailAddressChange/actions";
import * as MailAddressChangeReducer from "./mailAddressChange/reducers";
import * as LoginActions from "./login/actions";
import * as LoginReducer from "./login/reducers";

export type Actions =
  | SignupActions.Actions
  | ForgotPasswordActions.Actions
  | MailAddressChangeActions.Actions
  | LoginActions.Actions;

export type State = {
  signup: SignupReducer.State;
  forgotPassword: ForgotPasswordReducer.State;
  mailAddressChange: MailAddressChangeReducer.State;
  login: LoginReducer.State;
};

export const reducer = Redux.combineReducers<State>({
  signup: SignupReducer.reducer,
  forgotPassword: ForgotPasswordReducer.reducer,
  mailAddressChange: MailAddressChangeReducer.reducer,
  login: LoginReducer.reducer
});
