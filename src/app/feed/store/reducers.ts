import {createFeature, createReducer, on} from '@ngrx/store'
import {FeedState} from '../types/feedState'
import {feedActions} from './actions'

const initialState: FeedState = {
  posts: null,
  error: null,
}

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getFeed, (state) => ({
      ...state,
    })),
    on(feedActions.getFeedSuccess, (state, action) => ({
      ...state,
      posts: action.posts,
      error: null,
    })),
    on(feedActions.getFeedFailure, (state, action) => ({
      ...state,
      posts: null,
      error: action.message,
    }))
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectPosts,
  selectError,
} = feedFeature
