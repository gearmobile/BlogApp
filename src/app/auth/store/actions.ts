import {createActionGroup, emptyProps, props} from '@ngrx/store'
import {AuthData} from '../types/authData'
import {User} from '@angular/fire/auth'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    register: props<{authData: AuthData; spinnerName: string}>(),
    registerSuccess: emptyProps(),
    registerFailure: props<{message: string}>(),

    login: props<{authData: AuthData; spinnerName: string}>(),
    loginSuccess: emptyProps(),
    loginFailure: props<{message: string}>(),

    setUser: props<{user: User}>(),
    clearUser: emptyProps(),
  },
})
