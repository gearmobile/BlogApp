import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {Post} from '../types/post'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    getFeed: props<{spinnerName: string}>(),
    getFeedSuccess: props<{posts: Post[]}>(),
    getFeedFailure: props<{message: string}>(),
  },
})
