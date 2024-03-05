import {Injectable, inject} from "@angular/core";
import {Auth, User, authState} from "@angular/fire/auth";
import {authActions} from "../store/actions";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private auth = inject(Auth);
  private store = inject(Store);

  authState$ = authState(this.auth);

  initAuthListener() {
    this.authState$.subscribe((user: User | null) => {
      if (user) {
        this.store.dispatch(authActions.authenticated());
      } else {
        this.store.dispatch(authActions.unauthenticated());
      }
    });
  }
}
