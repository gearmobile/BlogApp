import {Injectable} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable, finalize} from 'rxjs'
import {spinnerActions} from './store/actions'

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor(private store: Store) {}

  public handleSpinner<T>(
    observable: Observable<T>,
    spinnerName: string
  ): Observable<T> {
    this.store.dispatch(spinnerActions.startSpinner({spinnerName}))

    return observable.pipe(
      finalize(() => {
        this.store.dispatch(spinnerActions.stopSpinner({spinnerName}))
      })
    )
  }
}
