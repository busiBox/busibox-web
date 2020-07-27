import { createStore, Store } from "redux";

import { LoginState } from "./ducks/login/types";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  login: LoginState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
