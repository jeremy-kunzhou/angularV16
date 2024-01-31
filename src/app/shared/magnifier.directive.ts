import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appMagnifier]',
})
export class MagnifierDirective {
  constructor(private elementRef: ElementRef) {}
  @HostBinding('width') width = 200;

  @HostListener('mouseenter', ['$event'])
  onHover() {
    console.log('mouseenter');
    this.width = 300;
    this.elementRef.nativeElement.style.background = 'red';
  }

  @HostListener('mouseout', ['$event'])
  onHover1() {
    console.log('mouseout');
    this.width = 200;
    this.elementRef.nativeElement.style.background = 'blue';
  }
}
