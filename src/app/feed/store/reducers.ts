import {createFeature, createReducer, createSelector, on} from '@ngrx/store'
import {FeedState} from '../types/feedState'
import {feedActions} from './actions'

const initialState: FeedState = {
  posts: null,
  error: null,
  hasMorePostsForward: true,
  hasMorePostsBackward: false,
  initialCursorId: null,
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
      hasMorePostsForward: action.hasMorePostsForward,
      hasMorePostsBackward: action.hasMorePostsBackward,
    })),
    on(feedActions.getFeedFailure, (state, action) => ({
      ...state,
      posts: null,
      error: action.message,
      hasMorePostsForward: false,
      hasMorePostsBackward: false,
    })),
    on(feedActions.getNextPage, (state) => ({
      ...state,
    })),
    on(feedActions.getPreviousPage, (state) => ({
      ...state,
    })),
    on(feedActions.storeInitialCursorId, (state, action) => ({
      ...state,
      initialCursorId: action.cursor,
    }))
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectPosts,
  selectError,
  selectHasMorePostsForward,
  selectHasMorePostsBackward,
  selectInitialCursorId,
} = feedFeature

export const selectLastPost = createSelector(selectPosts, (posts) => {
  if (posts && posts.length > 0) {
    return posts[posts.length - 1]
  } else {
    return null
  }
})

export const selectFirstPost = createSelector(selectPosts, (posts) => {
  if (posts && posts.length > 0) {
    return posts[0]
  } else {
    return null
  }
})
