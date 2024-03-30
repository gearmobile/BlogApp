import {Injectable, inject} from '@angular/core'
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private snackBar = inject(MatSnackBar)

  openSuccessToast(message: string) {
    const config = {
      duration: 3000,
      panelClass: 'app-notification-success',
    } as MatSnackBarConfig
    this.snackBar.open(message, undefined, config)
  }
}
