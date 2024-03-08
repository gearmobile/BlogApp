import {Injectable, inject} from '@angular/core'
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth'
import {AuthData} from '../types/authData'
import {Observable, from} from 'rxjs'

@Injectable()
export class AuthService {
  private auth = inject(Auth)

  register(authData: AuthData): Observable<UserCredential> {
    return from(
      createUserWithEmailAndPassword(
        this.auth,
        authData.email,
        authData.password,
      ),
    )
  }

  login(authData: AuthData): Observable<UserCredential> {
    return from(
      signInWithEmailAndPassword(this.auth, authData.email, authData.password),
    )
  }

  logout(): Observable<void> {
    return from(signOut(this.auth))
  }
}
