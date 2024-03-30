import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {AuthRequest} from '../types/authRequest'
import {User} from '@angular/fire/auth'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{authData: AuthRequest; spinnerName: string}>(),
    registerSuccess: emptyProps(),
    registerFailure: props<{message: string}>(),

    login: props<{authData: AuthRequest; spinnerName: string}>(),
    loginSuccess: emptyProps(),
    loginFailure: props<{message: string}>(),

    logout: emptyProps(),

    setUser: props<{user: User}>(),
    clearUser: emptyProps(),
  },
})
