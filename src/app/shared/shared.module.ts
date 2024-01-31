import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagnifierDirective } from './magnifier.directive';
import { YearPipe } from './year.pipe';

@NgModule({
  declarations: [MagnifierDirective, YearPipe],
  imports: [CommonModule],
  exports: [MagnifierDirective, YearPipe],
})
export class SharedModule {}
