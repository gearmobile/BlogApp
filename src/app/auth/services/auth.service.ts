import {Injectable, inject} from '@angular/core'
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth'
import {AuthRequest} from '../types/authRequest'
import {Observable, from} from 'rxjs'
import {User} from 'firebase/auth'
import {Store} from '@ngrx/store'
import {authActions} from '../store/actions'
import {withSpinner} from 'src/app/shared/operators/with-spinner.operator'

@Injectable()
export class AuthService {
  private auth = inject(Auth)
  private store = inject(Store)

  register(authData: AuthRequest): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(
        this.auth,
        authData.email,
        authData.password
      )
    )
  }

  login(authData: AuthRequest): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.auth, authData.email, authData.password)
    )
  }

  logout(): Observable<void> {
    return from(signOut(this.auth))
  }

  initAuthListener(): any {
    user(this.auth).subscribe((user: User | null) => {
      if (user) {
        this.store.dispatch(
          authActions.setUser({user: JSON.parse(JSON.stringify(user))})
        )
      } else {
        this.store.dispatch(authActions.clearUser())
      }
    })
  }
}
