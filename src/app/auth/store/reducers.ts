import {createFeature, createReducer, on} from "@ngrx/store";
import {authActions} from "./actions";
import {AuthState} from "../types/authState";

const initialState: AuthState = {
  isAuthenticated: false,
};

const authFeature = createFeature({
  name: "auth",
  reducer: createReducer(
    initialState,
    on(authActions.authenticated, (state) => ({
      ...state,
      isAuthenticated: true,
    })),
    on(authActions.unauthenticated, (state) => ({
      ...state,
      isAuthenticated: false,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsAuthenticated,
} = authFeature;
