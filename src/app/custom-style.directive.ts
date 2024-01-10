import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Set background color to yellow and make text bold
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
