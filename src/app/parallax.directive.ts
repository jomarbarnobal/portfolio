import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})

export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  constructor(private elRef : ElementRef ) { 
    this.initialTop = this.elRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    this.elRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }
}
