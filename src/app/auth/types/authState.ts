import {User} from '@angular/fire/auth'

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  error: string | null
}
