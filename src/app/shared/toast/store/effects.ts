import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {ToastService} from '../services/toast.service'
import {toastActions} from './actions'
import {tap} from 'rxjs'

export const showSuccessToastEffect = createEffect(
  (actions$ = inject(Actions), toastService = inject(ToastService)) => {
    return actions$.pipe(
      ofType(toastActions.showSuccessToast),
      tap(() => {
        toastService.openSuccessToast('Post added successfully')
      })
    )
  },
  {functional: true, dispatch: false}
)
