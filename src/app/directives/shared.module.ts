// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusInput } from './focus.directive';

@NgModule({
  declarations: [FocusInput],
  exports: [FocusInput], // Exporting so it can be used in other modules
  imports: [CommonModule],
})
export class SharedModule {}
