"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NavScrollDirective = /** @class */ (function () {
    function NavScrollDirective() {
    }
    NavScrollDirective.prototype.onWindowScroll = function (event) {
        var el = document.querySelector('.navbar');
        if (window.pageYOffset > el.clientHeight) {
            el.classList.add('nav-change-color');
        }
        else {
            el.classList.remove('nav-change-color');
        }
    };
    __decorate([
        core_1.HostListener('window:scroll', ['$event'])
    ], NavScrollDirective.prototype, "onWindowScroll");
    NavScrollDirective = __decorate([
        core_1.Directive({
            selector: '[appNavScroll]'
        })
    ], NavScrollDirective);
    return NavScrollDirective;
}());
exports.NavScrollDirective = NavScrollDirective;
