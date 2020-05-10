import { Directive, Input, HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appNavScroll]'
})
export class NavScrollDirective {

  constructor() { }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(event){
    let el = document.querySelector('.navbar')
    if (window.pageYOffset > el.clientHeight){
      el.classList.add('nav-change-color')
    } else {
      el.classList.remove('nav-change-color')
    }
  } 
}
