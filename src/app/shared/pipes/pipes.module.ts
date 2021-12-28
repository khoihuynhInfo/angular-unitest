import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpsFixPipe } from './https-fix/https-fix.pipe';

@NgModule({
  declarations: [
    HttpsFixPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpsFixPipe,
  ]
})
export class PipesModule { }
