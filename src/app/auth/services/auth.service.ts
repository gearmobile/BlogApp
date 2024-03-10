import {Injectable, inject} from '@angular/core'
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
} from '@angular/fire/auth'
import {AuthData} from '../types/authData'
import {Observable, from} from 'rxjs'
import {User} from 'firebase/auth'
import {Store} from '@ngrx/store'
import {authActions} from '../store/actions'

@Injectable()
export class AuthService {
  private auth = inject(Auth)
  private store = inject(Store)

  register(authData: AuthData): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(
        this.auth,
        authData.email,
        authData.password
      )
    )
  }

  login(authData: AuthData): Observable<UserCredential> {
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
