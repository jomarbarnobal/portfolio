"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ParallaxDirective = /** @class */ (function () {
    function ParallaxDirective(elRef) {
        this.elRef = elRef;
        this.parallaxRatio = 1;
        this.initialTop = 0;
        this.initialTop = this.elRef.nativeElement.getBoundingClientRect().top;
    }
    ParallaxDirective.prototype.onWindowScroll = function (event) {
        this.elRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px';
    };
    __decorate([
        core_1.Input('ratio')
    ], ParallaxDirective.prototype, "parallaxRatio");
    __decorate([
        core_1.HostListener("window:scroll", ["$event"])
    ], ParallaxDirective.prototype, "onWindowScroll");
    ParallaxDirective = __decorate([
        core_1.Directive({
            selector: '[appParallax]'
        })
    ], ParallaxDirective);
    return ParallaxDirective;
}());
exports.ParallaxDirective = ParallaxDirective;
