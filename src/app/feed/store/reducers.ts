import {createFeature, createReducer, on} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'
import {FeedState} from '../types/feedState'

const initialState: FeedState = {
  posts: null,
  error: null,
}

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState
    // on(authActions.setUser, (state, {user}) => ({
    //   ...state,
    //   user,
    //   isAuthenticated: !!user,
    //   error: null,
    // })),
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectError,
} = feedFeature
