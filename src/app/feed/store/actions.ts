import {createActionGroup, props} from '@ngrx/store'
import {Post} from '../types/post'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    getFeed: props<{spinnerName: string}>(),
    getNextPage: props<{spinnerName: string}>(),
    getPreviousPage: props<{spinnerName: string}>(),
    getFeedSuccess: props<{
      posts: Post[]
      hasMorePostsForward: boolean
      hasMorePostsBackward: boolean
    }>(),
    getFeedFailure: props<{message: string}>(),
    storeInitialCursorId: props<{cursor: string | null}>(),
  },
})
