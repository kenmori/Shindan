export declare global {
  import * as Redux from "redux";
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof Redux.compose;
  }
}

interface TerraceTechAPI {
  Response;
}
