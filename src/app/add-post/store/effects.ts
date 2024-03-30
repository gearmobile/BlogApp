import {HttpErrorResponse} from '@angular/common/http'
import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {Store} from '@ngrx/store'
import {switchMap, map, catchError, of, withLatestFrom} from 'rxjs'
import {withSpinner} from 'src/app/shared/spinner/operators/with-spinner.operator'
import {AddPostService} from '../services/add-post.service'
import {addPostActions} from './actions'
import {selectUser} from 'src/app/auth/store/reducers'
import {toastActions} from 'src/app/shared/toast/store/actions'

export const addPostEffect = createEffect(
  (
    store = inject(Store),
    actions$ = inject(Actions),
    addPostService = inject(AddPostService)
  ) => {
    return actions$.pipe(
      ofType(addPostActions.addPost),
      withLatestFrom(store.select(selectUser)),
      switchMap(([action, user]) => {
        const {post, spinnerName} = action
        if (!user || !user.uid) {
          return of(
            addPostActions.addPostFailure({message: 'User ID is missing'})
          )
        }
        return addPostService.addPost(post, user.uid).pipe(
          withSpinner(spinnerName, store),
          map(() => addPostActions.addPostSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(addPostActions.addPostFailure({message: error.message}))
          )
        )
      })
    )
  },
  {functional: true}
)

export const addPostSuccessEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(addPostActions.addPostSuccess),
      switchMap(() => {
        return of(
          toastActions.showSuccessToast({message: 'Post added sucessfully'})
        )
      })
    )
  },
  {functional: true}
)
