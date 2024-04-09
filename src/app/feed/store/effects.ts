import {HttpErrorResponse} from '@angular/common/http'
import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import {switchMap, map, catchError, of, tap} from 'rxjs'
import {withSpinner} from 'src/app/shared/spinner/operators/with-spinner.operator'
import {FeedService} from '../services/feed.service'
import {feedActions} from './actions'

export const getFeedEffect = createEffect(
  (
    store = inject(Store),
    actions$ = inject(Actions),
    feedService = inject(FeedService)
  ) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({spinnerName}) => {
        return feedService.getFeed().pipe(
          withSpinner(spinnerName, store),
          map((posts) => feedActions.getFeedSuccess({posts})),
          catchError((error: HttpErrorResponse) => {
            return of(feedActions.getFeedFailure({message: error.message}))
          })
        )
      })
    )
  },
  {functional: true}
)

export const getFeedSuccess = createEffect(
  (
    store = inject(Store),
    actions$ = inject(Actions),
    feedService = inject(FeedService)
  ) => {
    return actions$.pipe(ofType(feedActions.getFeedSuccess), tap(console.log))
  },
  {functional: true, dispatch: false}
)

export const getFeedFailure = createEffect(
  (
    store = inject(Store),
    actions$ = inject(Actions),
    feedService = inject(FeedService)
  ) => {
    return actions$.pipe(ofType(feedActions.getFeedFailure), tap(console.log))
  },
  {functional: true, dispatch: false}
)
