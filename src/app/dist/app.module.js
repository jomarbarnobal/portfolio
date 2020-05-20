"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Module
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
// Services
var project_service_1 = require("./services/project.service");
// Shared Component
var navigations_component_1 = require("./shared/navigations/navigations.component");
var footer_component_1 = require("./shared/footer/footer.component");
// Pages
var pages_1 = require("./pages");
// Custom Directives
var parallax_directive_1 = require("./parallax.directive");
var nav_scroll_directive_1 = require("./nav-scroll.directive");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigations_component_1.Navigation,
                pages_1.Home,
                parallax_directive_1.ParallaxDirective,
                nav_scroll_directive_1.NavScrollDirective,
                footer_component_1.FooterComponnent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule
            ],
            providers: [project_service_1.ProjectService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
