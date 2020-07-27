/*
 * Action Types
 */
export enum LoginTypes {
  LOAD_REQUEST = "@login/LOAD_REQUEST",
  LOAD_SUCCESS = "@login/LOAD_SUCCESS",
  LOAD_FAILURE = "@login/LOAD_FAILURE",
}

/*
 * Data Types
 */
export interface Login {
  email: string;
  password: string;
}

/*
 * State Types
 */
export interface LoginState {
  readonly data: Login;
  readonly loading: boolean;
  readonly error: boolean;
}
