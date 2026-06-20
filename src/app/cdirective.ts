import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCdirective]',
})
export class Cdirective {
  constructor(private el:ElementRef){
 console.log('Directive Loaded');
  }
 @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
