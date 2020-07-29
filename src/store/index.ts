import * as Redux from "redux";
import * as History from "history";
import * as Uuid from "uuid";
import * as ConnectedReactRouter from "connected-react-router";
import * as ReduxThunk from "redux-thunk";
import * as Ui from "./ui";
import * as Application from "./application";

export type RootActions = Ui.Actions | Application.Actions;

export type UiState = Ui.State;
export type ApplicationState = Application.State;

export type RootState = {
  router: ConnectedReactRouter.RouterState;
  ui: Ui.State;
  application: Application.State;
};
export type ThunkExtraArg = {};
export type RootThunkAction<R> = ReduxThunk.ThunkAction<
  R,
  RootState,
  ThunkExtraArg,
  RootActions
>;
export type RootThunkDispatch = ReduxThunk.ThunkDispatch<
  RootState,
  ThunkExtraArg,
  RootActions
>;

const composeWithDevTools: typeof Redux.compose =
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : Redux.compose;

export const createStore = (history: History.History) =>
  Redux.createStore(
    Redux.combineReducers({
      router: ConnectedReactRouter.connectRouter(history),
      ui: Ui.reducer,
      application: Application.reducer,
    }),
    composeWithDevTools(
      Redux.applyMiddleware(
        ReduxThunk.default.withExtraArgument({
          genaratedId: Uuid.v4,
        })
      )
    )
  );
