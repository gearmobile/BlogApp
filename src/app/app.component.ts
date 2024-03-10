import {Component, OnInit, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {selectUser} from './auth/store/reducers'
import {AuthService} from './auth/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  store = inject(Store)
  authService = inject(AuthService)

  user$ = this.store.select(selectUser)

  title = 'BlogApp'

  ngOnInit() {
    this.authService.initAuthListener()
  }

  logout() {
    this.authService.logout()
  }
}
