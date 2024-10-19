import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[focusInput]',
})
export class FocusInput {
  constructor(
    private el: ElementRef<HTMLDivElement>,
    private renderer: Renderer2
  ) {
    console.log('HEllo directive');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '2px 2px 2px green';
    this.el.nativeElement.style.width = '100%';
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.bottom = '0';
  }
}
