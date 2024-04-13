import {Store} from '@ngrx/store'
import {Observable, defer, finalize, take} from 'rxjs'
import {spinnerActions} from '../store/actions'

export const withSpinner =
  (spinnerName: string, store: Store) =>
  <T>(source: Observable<T>) =>
    defer(() => {
      store.dispatch(spinnerActions.startSpinner({spinnerName}))
      return source.pipe(
        finalize(() => {
          store.dispatch(spinnerActions.stopSpinner({spinnerName}))
        })
      )
    })
