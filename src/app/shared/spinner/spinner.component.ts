import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {getSpinnerState} from './store/selectors'
import {spinnerActions} from './store/actions'
import {Observable, tap} from 'rxjs'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input()
  spinnerName!: string

  @Input()
  fullscreen = true

  spinner$!: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      spinnerActions.addSpinner({spinnerName: this.spinnerName})
    )
    this.spinner$ = this.store
      .select(getSpinnerState(this.spinnerName))
      .pipe(tap(console.log))
  }
}
