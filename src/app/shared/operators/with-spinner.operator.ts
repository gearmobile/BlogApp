import {Store} from '@ngrx/store'
import {Observable, defer, finalize} from 'rxjs'
import {spinnerActions} from '../spinner/store/actions'

export const withSpinner =
  (spinnerName: string, store: Store) =>
  <T>(source: Observable<T>) =>
    defer(() => {
      store.dispatch(spinnerActions.startSpinner({spinnerName}))
      return source.pipe(
        finalize(() =>
          store.dispatch(spinnerActions.stopSpinner({spinnerName}))
        )
      )
    })
