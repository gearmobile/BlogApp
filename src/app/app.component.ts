import {Component, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {selectUser} from './auth/store/reducers'
import {AuthService} from './auth/services/auth.service'
import {authActions} from './auth/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  store = inject(Store)
  authService = inject(AuthService)

  user$ = this.store.select(selectUser)

  spinnerName = 'app-spinner'

  title = 'BlogApp'

  ngAfterViewInit() {
    this.authService.initAuthListener(this.spinnerName)
  }

  logout() {
    this.store.dispatch(authActions.logout())
  }
}
