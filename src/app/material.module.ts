import {NgModule} from '@angular/core'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatProgressSpinnerModule],
  exports: [MatButtonModule, MatFormFieldModule, MatProgressSpinnerModule],
})
export class MaterialModule {}
