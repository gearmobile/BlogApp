import {Component, inject} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {authActions} from '../../store/actions'
import {AuthData} from '../../types/authData'
import {selectError} from '../../store/reducers'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  store = inject(Store)

  error$ = this.store.select(selectError)

  registerForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {validators: [Validators.required]}),
  })

  onSubmit() {
    const authData: AuthData = {
      email: this.registerForm.get('email')?.value!,
      password: this.registerForm.get('password')?.value!,
    }
    this.store.dispatch(authActions.register({authData}))
  }
}
