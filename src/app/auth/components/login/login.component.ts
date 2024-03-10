import {Component, inject} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthData} from '../../types/authData'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {selectError} from '../../store/reducers'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  store = inject(Store)

  error$ = this.store.select(selectError)

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {validators: [Validators.required]}),
  })

  onSubmit() {
    const authData: AuthData = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!,
    }
    this.store.dispatch(authActions.login({authData}))
  }
}
