import {createFeature, createReducer, on} from '@ngrx/store'
import {authActions} from './actions'
import {AuthState} from '../types/authState'

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.setUser, (state, {user}) => ({
      ...state,
      user,
      isAuthenticated: !!user,
    })),
    on(authActions.clearUser, (state) => ({
      ...state,
      user: null,
      isAuthenticated: false,
    })),
  ),
})

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsAuthenticated,
  selectUser,
} = authFeature
