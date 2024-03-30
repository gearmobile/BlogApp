import {Injectable, inject} from '@angular/core'
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly DEFAULT_DURATION = 3000

  private snackBar = inject(MatSnackBar)

  openSuccessToast(message: string) {
    const config = {
      duration: this.DEFAULT_DURATION,
      panelClass: 'app-notification-success',
    } as MatSnackBarConfig
    this.snackBar.open(message, undefined, config)
  }

  openInfoToast(message: string) {
    const config = {
      duration: this.DEFAULT_DURATION,
    } as MatSnackBarConfig
    this.snackBar.open(message, undefined, config)
  }
}
