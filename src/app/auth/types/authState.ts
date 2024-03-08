import {UserCredential} from '@angular/fire/auth'

export interface AuthState {
  user: UserCredential | null
  isAuthenticated: boolean
}
