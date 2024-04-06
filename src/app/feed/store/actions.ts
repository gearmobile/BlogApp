import {createActionGroup, emptyProps, props} from '@ngrx/store'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    getFeed: emptyProps(),
    getFeedSuccess: emptyProps(),
    getFeedFailure: props<{message: string}>(),
  },
})
