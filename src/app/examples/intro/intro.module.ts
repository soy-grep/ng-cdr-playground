import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IntroComponent
  ]
})
export class IntroModule { }
