(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n  <!-- <app-toolbar (eventEmmiterFoeNav)=\"sidenav.toggleNav()\"></app-toolbar>\n  <app-sidenav #sidenav></app-sidenav> -->\n<div class=\"container\">\n  <app-toolbar #toolbar (eventEmmiterFoeNav)=\"sidenav.toggle()\"></app-toolbar>\n <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #sidenav mode=\"Over\">\n      <div style=\"text-align: center\">\n        <img src=\"assets/images/thought.jpeg\" alt=\"Default\"/>\n      </div>\n      <app-sidenav (listItemClicked)=\"sidenav.close()\" (showHomeButtonEventEmitter)=\"toolbar.showHomeButton=$event\"></app-sidenav>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n<div class=\"powerdby\">\n  <span>Powered by ~ Bhasker</span>\n</div>\n</div>\n \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lessons/lessons.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lessons/lessons.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <mat-list-item *ngFor=\"let lession of lessionLists\" class=\"parent\" [routerLink]=\"['verselisting',lession.id]\">\n      <div class=\"lessionListing\">\n         <div class=\"lessionListingImg\">\n          <img src=\"assets/images/krishna1.jpg\" alt=\"Default\"/>\n        </div>\n        <div  class=\"lessionListingHead\">\n          <h2 *ngIf = \"language=='0'\"> {{lession.name}} </h2>\n          <h2 *ngIf = \"language=='1'\"> {{lession.nameEN}} </h2>\n        </div>\n      </div>\n    </mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidenav/sidenav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n        <a mat-list-item routeLinkActive=\"active\" *ngFor=\"let nav of items\"  (click)=\"clickedListItem(nav.url,nav.id)\">\n                <mat-icon svgIcon=\"menu\"></mat-icon>\n                <span *ngIf = \"language=='0'\">{{nav.text}} </span>\n                <span *ngIf = \"language=='1'\">{{nav.textEN}}</span>\n        </a>\n</mat-nav-list>\n\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <mat-icon svgIcon=\"menu\" (click)=\"toggleNav()\"></mat-icon>\n    <h5 *ngIf=\"language == '0'\">श्रीमद्‍ भगवद्‍गीता</h5>\n    <h5 *ngIf=\"language == '1'\">Bhagavad Gita</h5>\n    <span class=\"toolbar-spacer\"></span>\n    <mat-icon [routerLink]=\"['']\" [style.visibility]=\"showHomeButton ? 'visible':'hidden'\" class=\"margin\">home</mat-icon>\n\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"language\" (change)=\"onLanguageChange(group.value)\">\n        <mat-button-toggle value=\"0\">हिंदी</mat-button-toggle>\n        <mat-button-toggle value=\"1\">{{engilshText}}</mat-button-toggle>\n    </mat-button-toggle-group>\n\n    <!-- <mat-icon svgIcon=\"more\" [matMenuTriggerFor]=\"menus\"></mat-icon>\n\n    <mat-menu #menus=\"matMenu\">\n        <ng-template matMenuContent>\n            <div *ngFor=\"let item of items\">\n                <button mat-menu-item (click)=\"onMenuItemClick(item)\">\n                    <mat-icon svgIcon={{item.img}}></mat-icon>\n                    <span>{{item.text}}</span>\n                </button>\n            </div>\n        </ng-template>\n    </mat-menu> -->\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verse/verse.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verse/verse.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"slokId\" (selectedTabChange)=\"selectedTab($event)\">\n  <mat-tab [label]=\" language=='0' ? slokListingData.name : slokListingData.nameEN\"\n    *ngFor=\"let slokListingData of getSlokList(lessionId)\">\n    <div class=\"parent\">\n      <div *ngIf=\"slokId-1 == -1\" class=\"child\">\n        <div class=\"childC\">\n          <h2><span>{{getLessionName()}}</span></h2>\n\n          <div class=\"child\">\n            <img src=\"assets/images/thought.jpeg\" />\n          </div>\n\n          <div class=\"spacebetween\">\n            <!-- <span  *ngIf = '!isMinute' >{{progressInMinutes | number : '1.0-0'}} sec</span>  -->\n            <span>{{progressInMinutes | minuteSeconds}} min</span>\n            <span>{{totalTimeInMinutes | minuteSeconds}} min</span>\n          </div>\n\n\n          <mat-slider [max]=\"maxSlider\" [min]=\"0\" [step]=\"1\" [thumbLabel]=\"false\" [(ngModel)]=\"valueSlider\"\n            [vertical]=\"vertical\" (input)=\"onInputChange($event)\">\n          </mat-slider>\n\n          <div class=\"child\">\n\n            <i class=\"button material-icons md-55 md-dark\" *ngIf=\"!isPlayingAudio\" (click)=\"palyPause(true)\">\n              play_circle_outline\n            </i>\n            <i class=\"button material-icons md-55 md-dark\" *ngIf=\"isPlayingAudio\" (click)=\"palyPause(false)\">\n              pause_circle_outline\n            </i>\n          </div>\n        </div>\n\n      </div>\n      <div *ngIf=\"slokId-1 == slokListingData.id && slokId-1 != -1\" class=\"child\">\n        <!-- <img src=\"assets/images/pankh.png\" alt=\"Default\" width=\"50px\" height=\"50px\"/> -->\n        <h2> <span\n            *ngIf=\" language=='0' ? meaningDataHindi:meaningDataEng\">{{getSlokDataWByGivenData(0,language,lessionId,slokListingData.number)}}</span>\n        </h2>\n        <!-- <img src=\"assets/images/pankh.png\" alt=\"Default\" width=\"50px\" height=\"50px\"/> -->\n      </div>\n      <br />\n      <div *ngIf=\"slokId-1 == slokListingData.id && slokId-1 != -1\" class=\"child\">\n        <img src=\"assets/images/pankh.png\" alt=\"Default\" width=\"70px\" height=\"70px\" />\n        <span class=\"heading\" *ngIf=\"language=='0' ?meaningDataHindi : meaningDataEng\"\n          [innerHTML]=\"getSlokDataWByGivenData(1,language,lessionId,slokListingData.number)\"> </span>\n        <img src=\"assets/images/pankh.png\" alt=\"Default\" width=\"70px\" height=\"70px\" />\n      </div>\n      <br />\n      <div *ngIf=\"slokId-1 == slokListingData.id && slokId-1 != -1\" class=\"child\">\n        <span class=\"subheading\" *ngIf=\"language=='0' ?meaningDataHindi : meaningDataEng\"\n          [innerHTML]=\"getSlokDataWByGivenData(2,language,lessionId,slokListingData.number)\"></span>\n      </div>\n\n      <br />\n      <div *ngIf=\"slokId-1 == slokListingData.id && slokId-1 != -1\" class=\"child\">\n        <span class=\"subheading\" *ngIf=\"language=='0' ?meaningDataHindi : meaningDataEng\"\n          [innerHTML]=\"getSlokDataForAll(slokId-1)\"></span>\n      </div>\n    </div>\n\n\n  </mat-tab>\n</mat-tab-group>\n<mat-progress-spinner *ngIf=\"isShowProgressBar\" style=\"margin:0 auto;\" mode=\"indeterminate\"></mat-progress-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/verselisting/verselisting.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/verselisting/verselisting.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"lessionId\">\n    <mat-tab [label]=\" language=='0' ? lession.chapter : lession.chapterEN\" *ngFor=\"let lession of lessionLists\">\n        <!-- <div cdkScrollable style=\"overflow-y: auto; height: 200px\"> -->\n            <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"2:0.5\">\n                    <mat-grid-tile  *ngFor=\"let slok of getSlokList(lession.id)\"  matRipple\n                    [matRippleCentered]=\"centered\"\n                    [matRippleDisabled]=\"disabled\"\n                    [matRippleUnbounded]=\"unbounded\"\n                    [matRippleRadius]=\"radius\"\n                   (click)=\"onMatClick(lession.id,slok.id,slok.number)\">\n                            <div class=\"listing\">\n                                    <div>\n                                      <img src=\"assets/images/pankh.png\" alt=\"Default\"/>\n                                   </div>\n                                   <div  class=\"listingHead center-verticle\">\n                                    <h2 *ngIf = \"language=='0'\"> {{slok.name}} </h2>\n                                    <h2 *ngIf = \"language=='1'\"> {{slok.nameEN}} </h2>\n                                   </div>\n                                   <div>\n                                    <img src=\"assets/images/pankh.png\" alt=\"Default\"/>\n                                    </div>\n                             </div>\n                    </mat-grid-tile>\n            </mat-grid-list>\n          <!-- </div> -->\n    </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _verse_verse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verse/verse.component */ "./src/app/verse/verse.component.ts");
/* harmony import */ var _verselisting_verselisting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verselisting/verselisting.component */ "./src/app/verselisting/verselisting.component.ts");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");






var approutes = [
    { path: 'verse', component: _verse_verse_component__WEBPACK_IMPORTED_MODULE_3__["VerseComponent"] },
    { path: 'verselisting/:id', component: _verselisting_verselisting_component__WEBPACK_IMPORTED_MODULE_4__["VerseListingComponent"] },
    { path: '', component: _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_5__["LessonsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // RouterModule.forRoot(approutes)
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(approutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n  }\r\n  \r\n  .is-mobile .sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n  }\r\n  \r\n  .powerdby{\r\n    font-size: 14px;\r\n    margin: 2px 2px 2px 2px;\r\n    color: rgb(235, 73, 15)\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRTs0RkFDd0Y7SUFDeEYsT0FBTztFQUNUOztFQUVBO0lBQ0U7aUVBQzZEO0lBQzdELGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmlzLW1vYmlsZSAuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5wb3dlcmRieXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMnB4IDJweCAycHggMnB4O1xyXG4gICAgY29sb3I6IHJnYigyMzUsIDczLCAxNSlcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.opened = false;
        this.loading = false;
    }
    //title = 'Google';
    //@ViewChild('sidenav') private slideNav: SidenavComponent;
    // constructor(@Inject(LOCALE_ID) protected localeId: string) { 
    // }
    AppComponent.prototype.onSideNavToggle = function (event) {
        console.log(event);
        this.opened = !this.opened;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lessons/lessons.component */ "./src/app/lessons/lessons.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _verse_verse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verse/verse.component */ "./src/app/verse/verse.component.ts");
/* harmony import */ var _verselisting_verselisting_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./verselisting/verselisting.component */ "./src/app/verselisting/verselisting.component.ts");
/* harmony import */ var _services_SlokMeaningService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/SlokMeaningService */ "./src/app/services/SlokMeaningService.ts");
/* harmony import */ var _services_SharedService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/SharedService */ "./src/app/services/SharedService.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/Settings */ "./src/app/services/Settings.ts");
/* harmony import */ var _pipe_minuteSeconds__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipe/minuteSeconds */ "./src/app/pipe/minuteSeconds.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_7__["SidenavComponent"],
                _lessons_lessons_component__WEBPACK_IMPORTED_MODULE_10__["LessonsComponent"],
                _verse_verse_component__WEBPACK_IMPORTED_MODULE_12__["VerseComponent"],
                _verselisting_verselisting_component__WEBPACK_IMPORTED_MODULE_13__["VerseListingComponent"],
                _pipe_minuteSeconds__WEBPACK_IMPORTED_MODULE_18__["MinuteSecondsPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_16__["NgxWebstorageModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
            ],
            providers: [_services_SlokMeaningService__WEBPACK_IMPORTED_MODULE_14__["SlokMeaningService"],
                _services_SharedService__WEBPACK_IMPORTED_MODULE_15__["SharedService"],
                _services_Settings__WEBPACK_IMPORTED_MODULE_17__["Settings"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/en/lession-list.ts":
/*!**********************************************!*\
  !*** ./src/app/constants/en/lession-list.ts ***!
  \**********************************************/
/*! exports provided: lessions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessions", function() { return lessions; });
var lessions = [
    { id: 0, name: 'अध्याय 1 - ॥ अर्जुनविषादयोग ॥', nameEN: 'Chapter 1 - ॥ Lamenting the Consequence of War ॥', chapter: 'अध्याय 1', chapterEN: 'Chapter 1' },
    { id: 1, name: 'अध्याय 2 - ॥ सांख्ययोग ॥', nameEN: 'Chapter 2 - ॥ The Eternal Reality of the Souls Immortality ॥', chapter: 'अध्याय 2', chapterEN: 'Chapter 2' },
    { id: 2, name: 'अध्याय 3 - ॥ कर्मयोग ॥', nameEN: 'Chapter 3 - ॥ The Eternal Duties of Human Beings ॥', chapter: 'अध्याय 3', chapterEN: 'Chapter 3' },
    { id: 3, name: 'अध्याय 4 - ॥ ज्ञानकर्मसंन्यासयोग ॥', nameEN: 'Chapter 4 - ॥ Approaching the Ultimate Truth ॥', chapter: 'अध्याय 4', chapterEN: 'Chapter 4' },
    { id: 4, name: 'अध्याय 5 - ॥ कर्मसंन्यासयोग ॥', nameEN: 'Chapter 5 - ॥ Action and Renunciation ॥', chapter: 'अध्याय 5', chapterEN: 'Chapter 5' },
    { id: 5, name: 'अध्याय 6 - ॥ आत्मसंयमयोग ॥', nameEN: 'Chapter 6 - ॥ The Science of Self Realization ॥', chapter: 'अध्याय 6', chapterEN: 'Chapter 6' },
    { id: 6, name: 'अध्याय 7 - ॥ ज्ञानविज्ञानयोग ॥', nameEN: 'Chapter 7 - ॥ Knowledge of the Ultimate Truth ॥', chapter: 'अध्याय 7', chapterEN: 'Chapter 7' },
    { id: 7, name: 'अध्याय 8 - ॥ अक्षरब्रह्मयोग ॥', nameEN: 'Chapter 8 - ॥ Attainment of Salvation ॥', chapter: 'अध्याय 8', chapterEN: 'Chapter 8' },
    { id: 8, name: 'अध्याय 9 - ॥ राजविद्याराजगुह्ययोग ॥', nameEN: 'Chapter 9 - ॥ Confidential Knowledge of the Ultimate Truth ॥', chapter: 'अध्याय 9', chapterEN: 'Chapter 9' },
    { id: 9, name: 'अध्याय 10 - ॥ विभूतियोग  ॥', nameEN: 'Chapter 10 - ॥ The Infinite Glories of the Ultimate Truth  ॥', chapter: 'अध्याय 10', chapterEN: 'Chapter 10' },
    { id: 10, name: 'अध्याय 11 - ॥ विश्वरूपदर्शनयोग ॥', nameEN: 'Chapter 11 - ॥ The Vision of the Universal Form ॥', chapter: 'अध्याय 11', chapterEN: 'Chapter 11' },
    { id: 11, name: 'अध्याय 12 - ॥ भक्तियोग ॥', nameEN: 'Chapter 12 - ॥ The Path of Devotion ॥', chapter: 'अध्याय 12', chapterEN: 'Chapter 12' },
    { id: 12, name: 'अध्याय 13 - ॥ क्षेत्र-क्षेत्रज्ञविभागयोग ॥', nameEN: 'Chapter 13 - ॥ The Individual Consciousness and Ultimate Consciousness ॥', chapter: 'अध्याय 13', chapterEN: 'Chapter 13' },
    { id: 13, name: 'अध्याय 14 - ॥ गुणत्रयविभागयोग ॥', nameEN: 'Chapter 14 - ॥ The Three Qualities of Material Nature ॥', chapter: 'अध्याय 14', chapterEN: 'Chapter 14' },
    { id: 14, name: 'अध्याय 15 - ॥ पुरुषोत्तमयोग ॥', nameEN: 'Chapter 15 - ॥  Realization of the Ultimate Truth ॥', chapter: 'अध्याय 15', chapterEN: 'Chapter 15' },
    { id: 15, name: 'अध्याय 16 - ॥ दैवासुरसम्पद्विभागयोग ॥', nameEN: 'Chapter 16 - ॥ The Divine and the Demoniac Natures Defined ॥', chapter: 'अध्याय 16', chapterEN: 'Chapter 16' },
    { id: 16, name: 'अध्याय 17 - ॥ श्रद्धात्रयविभागयोग ॥', nameEN: 'Chapter 17 - ॥ The Three Divisions of Material Existence ॥', chapter: 'अध्याय 17', chapterEN: 'Chapter 17' },
    { id: 17, name: 'अध्याय 18 - ॥ मोक्षसंन्यासयोग ॥', nameEN: 'Chapter 18 - ॥ Final Revelations of the Ultimate Truth ॥', chapter: 'अध्याय 18', chapterEN: 'Chapter 18' }
];


/***/ }),

/***/ "./src/app/constants/en/slok-listing.ts":
/*!**********************************************!*\
  !*** ./src/app/constants/en/slok-listing.ts ***!
  \**********************************************/
/*! exports provided: chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9, chapter10, chapter11, chapter12, chapter13, chapter14, chapter15, chapter16, chapter17, chapter18, AllChapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter1", function() { return chapter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter2", function() { return chapter2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter3", function() { return chapter3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter4", function() { return chapter4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter5", function() { return chapter5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter6", function() { return chapter6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter7", function() { return chapter7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter8", function() { return chapter8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter9", function() { return chapter9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter10", function() { return chapter10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter11", function() { return chapter11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter12", function() { return chapter12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter13", function() { return chapter13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter14", function() { return chapter14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter15", function() { return chapter15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter16", function() { return chapter16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter17", function() { return chapter17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chapter18", function() { return chapter18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChapter", function() { return AllChapter; });
var chapter1 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17, 18', nameEN: 'Shloka 17, 18', number: '17_18' },
    { id: 17, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 18, name: 'श्लोक 20, 21', nameEN: 'Shloka 20, 21', number: '20_21' },
    { id: 19, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 20, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 21, name: 'श्लोक 24, 25', nameEN: 'Shloka 24, 25', number: '24_25' },
    { id: 22, name: 'श्लोक 26, 27', nameEN: 'Shloka 26, 27', number: '26_27' },
    { id: 23, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 24, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 25, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 26, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 27, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 28, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 29, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 30, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 31, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 32, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 33, name: 'श्लोक 38, 39', nameEN: 'Shloka 38, 39', number: '38_39' },
    { id: 34, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 35, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 36, name: 'श्लोक 42', nameEN: 'Shloka 42', number: '42' },
    { id: 37, name: 'श्लोक 43', nameEN: 'Shloka 43', number: '43' },
    { id: 38, name: 'श्लोक 44', nameEN: 'Shloka 44', number: '44' },
    { id: 39, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 40, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 41, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' }
];
var chapter2 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 34, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 35, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 36, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 37, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 38, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 39, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 40, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 41, name: 'श्लोक 42, 43, 44', nameEN: 'Shloka 42, 43, 44', number: '42_43_44' },
    { id: 42, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 43, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 44, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' },
    { id: 45, name: 'श्लोक 48', nameEN: 'Shloka 48', number: '48' },
    { id: 46, name: 'श्लोक 49', nameEN: 'Shloka 49', number: '49' },
    { id: 47, name: 'श्लोक 50', nameEN: 'Shloka 50', number: '50' },
    { id: 48, name: 'श्लोक 51', nameEN: 'Shloka 51', number: '51' },
    { id: 49, name: 'श्लोक 52', nameEN: 'Shloka 52', number: '52' },
    { id: 50, name: 'श्लोक 53', nameEN: 'Shloka 53', number: '53' },
    { id: 51, name: 'श्लोक 54', nameEN: 'Shloka 54', number: '54' },
    { id: 52, name: 'श्लोक 55', nameEN: 'Shloka 55', number: '55' },
    { id: 53, name: 'श्लोक 56', nameEN: 'Shloka 56', number: '56' },
    { id: 54, name: 'श्लोक 57', nameEN: 'Shloka 57', number: '57' },
    { id: 55, name: 'श्लोक 58', nameEN: 'Shloka 58', number: '58' },
    { id: 56, name: 'श्लोक 59', nameEN: 'Shloka 59', number: '59' },
    { id: 57, name: 'श्लोक 60', nameEN: 'Shloka 60', number: '60' },
    { id: 58, name: 'श्लोक 61', nameEN: 'Shloka 61', number: '61' },
    { id: 59, name: 'श्लोक 62', nameEN: 'Shloka 62', number: '62' },
    { id: 60, name: 'श्लोक 63', nameEN: 'Shloka 63', number: '63' },
    { id: 61, name: 'श्लोक 64', nameEN: 'Shloka 64', number: '64' },
    { id: 62, name: 'श्लोक 65', nameEN: 'Shloka 65', number: '65' },
    { id: 63, name: 'श्लोक 66', nameEN: 'Shloka 66', number: '66' },
    { id: 64, name: 'श्लोक 67', nameEN: 'Shloka 67', number: '67' },
    { id: 65, name: 'श्लोक 68', nameEN: 'Shloka 68', number: '68' },
    { id: 66, name: 'श्लोक 69', nameEN: 'Shloka 69', number: '69' },
    { id: 67, name: 'श्लोक 70', nameEN: 'Shloka 70', number: '70' },
    { id: 68, name: 'श्लोक 71', nameEN: 'Shloka 71', number: '71' },
    { id: 69, name: 'श्लोक 72', nameEN: 'Shloka 72', number: '72' }
];
var chapter3 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 34, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 35, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 36, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 37, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 38, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 39, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 40, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 41, name: 'श्लोक 42, 43, 44', nameEN: 'Shloka 42, 43, 44', number: '42_43_44' },
    { id: 42, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 43, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 44, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' },
    { id: 45, name: 'श्लोक 48', nameEN: 'Shloka 48', number: '48' },
    { id: 46, name: 'श्लोक 49', nameEN: 'Shloka 49', number: '49' },
    { id: 47, name: 'श्लोक 50', nameEN: 'Shloka 50', number: '50' },
    { id: 48, name: 'श्लोक 51', nameEN: 'Shloka 51', number: '51' },
    { id: 49, name: 'श्लोक 52', nameEN: 'Shloka 52', number: '52' },
    { id: 50, name: 'श्लोक 53', nameEN: 'Shloka 53', number: '53' },
    { id: 51, name: 'श्लोक 54', nameEN: 'Shloka 54', number: '54' },
    { id: 52, name: 'श्लोक 55', nameEN: 'Shloka 55', number: '55' },
    { id: 53, name: 'श्लोक 56', nameEN: 'Shloka 56', number: '56' },
    { id: 54, name: 'श्लोक 57', nameEN: 'Shloka 57', number: '57' },
    { id: 55, name: 'श्लोक 58', nameEN: 'Shloka 58', number: '58' },
    { id: 56, name: 'श्लोक 59', nameEN: 'Shloka 59', number: '59' },
    { id: 57, name: 'श्लोक 60', nameEN: 'Shloka 60', number: '60' },
    { id: 58, name: 'श्लोक 61', nameEN: 'Shloka 61', number: '61' },
    { id: 59, name: 'श्लोक 62', nameEN: 'Shloka 62', number: '62' },
    { id: 60, name: 'श्लोक 63', nameEN: 'Shloka 63', number: '63' },
    { id: 61, name: 'श्लोक 64', nameEN: 'Shloka 64', number: '64' },
    { id: 62, name: 'श्लोक 65', nameEN: 'Shloka 65', number: '65' },
    { id: 63, name: 'श्लोक 66', nameEN: 'Shloka 66', number: '66' },
    { id: 64, name: 'श्लोक 67', nameEN: 'Shloka 67', number: '67' },
    { id: 65, name: 'श्लोक 68', nameEN: 'Shloka 68', number: '68' },
    { id: 66, name: 'श्लोक 69', nameEN: 'Shloka 69', number: '69' },
    { id: 67, name: 'श्लोक 70', nameEN: 'Shloka 70', number: '70' },
    { id: 68, name: 'श्लोक 71', nameEN: 'Shloka 71', number: '71' },
    { id: 69, name: 'श्लोक 72', nameEN: 'Shloka 72', number: '72' }
];
var chapter4 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29, 30', nameEN: 'Shloka 29, 30', number: '29_30' },
    { id: 29, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 30, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 31, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 32, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 33, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 34, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 35, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 36, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 37, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 38, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 39, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 40, name: 'श्लोक 42', nameEN: 'Shloka 42', number: '42' }
];
var chapter5 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8, 9', nameEN: 'Shloka 8, 9', number: '8_9' },
    { id: 8, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 9, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 10, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 11, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 12, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 13, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 14, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 15, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 16, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 17, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 18, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 19, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 20, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 21, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 22, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 23, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 24, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 25, name: 'श्लोक 27, 28', nameEN: 'Shloka 27, 28', number: '27_28' },
    { id: 26, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' }
];
var chapter6 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 34, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 35, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 36, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 37, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 38, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 39, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 40, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 41, name: 'श्लोक 42', nameEN: 'Shloka 42', number: '42' },
    { id: 42, name: 'श्लोक 43', nameEN: 'Shloka 43', number: '43' },
    { id: 43, name: 'श्लोक 44', nameEN: 'Shloka 44', number: '44' },
    { id: 44, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 45, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 46, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' }
];
var chapter7 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4, 5', nameEN: 'Shloka 4, 5', number: '4_5' },
    { id: 4, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 5, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 6, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 7, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 8, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 9, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 10, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 11, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 12, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 13, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 14, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 15, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 16, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 17, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 18, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 19, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 20, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 21, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 22, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 23, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 24, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 25, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 26, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 27, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 28, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' }
];
var chapter8 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' }
];
var chapter9 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' }
];
var chapter10 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4, 5', nameEN: 'Shloka 4, 5', number: '4_5' },
    { id: 4, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 5, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 6, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 7, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 8, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 9, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 10, name: 'श्लोक 12, 13', nameEN: 'Shloka 12, 13', number: '12_13' },
    { id: 11, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 12, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 13, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 14, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 15, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 16, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 17, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 18, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 19, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 20, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 21, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 22, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 23, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 24, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 25, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 26, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 27, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 28, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 29, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 30, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 31, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 32, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 33, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 34, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 35, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 36, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 37, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 38, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 39, name: 'श्लोक 42', nameEN: 'Shloka 42', number: '42' }
];
var chapter11 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10, 11', nameEN: 'Shloka 10, 11', number: '10_11' },
    { id: 10, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 11, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 12, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 13, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 14, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 15, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 16, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 17, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 18, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 19, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 20, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 21, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 22, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 23, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 24, name: 'श्लोक 26, 27', nameEN: 'Shloka 26, 27', number: '26_27' },
    { id: 25, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 26, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 27, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 28, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 29, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 30, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 31, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 32, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 33, name: 'श्लोक 36', nameEN: 'Shloka 36', number: '36' },
    { id: 34, name: 'श्लोक 37', nameEN: 'Shloka 37', number: '37' },
    { id: 35, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 36, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 37, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 38, name: 'श्लोक 41, 42', nameEN: 'Shloka 41, 42', number: '41_42' },
    { id: 39, name: 'श्लोक 43', nameEN: 'Shloka 43', number: '43' },
    { id: 40, name: 'श्लोक 44', nameEN: 'Shloka 44', number: '44' },
    { id: 41, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 42, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 43, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' },
    { id: 44, name: 'श्लोक 48', nameEN: 'Shloka 48', number: '48' },
    { id: 45, name: 'श्लोक 49', nameEN: 'Shloka 49', number: '49' },
    { id: 46, name: 'श्लोक 50', nameEN: 'Shloka 50', number: '50' },
    { id: 47, name: 'श्लोक 51', nameEN: 'Shloka 51', number: '51' },
    { id: 48, name: 'श्लोक 52', nameEN: 'Shloka 52', number: '52' },
    { id: 49, name: 'श्लोक 53', nameEN: 'Shloka 53', number: '53' },
    { id: 50, name: 'श्लोक 54', nameEN: 'Shloka 54', number: '54' },
    { id: 51, name: 'श्लोक 55', nameEN: 'Shloka 55', number: '55' }
];
var chapter12 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3, 4', nameEN: 'Shloka 3, 4', number: '3_4' },
    { id: 3, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 4, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 5, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 6, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 7, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 8, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 9, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 10, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 11, name: 'श्लोक 13, 14', nameEN: 'Shloka 13, 14', number: '13_14' },
    { id: 12, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 13, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 14, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 15, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 16, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 17, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' }
];
var chapter13 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' }
];
var chapter14 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' }
];
var chapter15 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' }
];
var chapter16 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15, 16', nameEN: 'Shloka 15, 16', number: '15_16' },
    { id: 15, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 16, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 17, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 18, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 19, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 20, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 21, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 22, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' }
];
var chapter17 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' }
];
var chapter18 = [
    { id: -1, name: 'वाणी', nameEN: 'Voice', number: '0' },
    { id: 0, name: 'श्लोक 1', nameEN: 'Shloka 1', number: '1' },
    { id: 1, name: 'श्लोक 2', nameEN: 'Shloka 2', number: '2' },
    { id: 2, name: 'श्लोक 3', nameEN: 'Shloka 3', number: '3' },
    { id: 3, name: 'श्लोक 4', nameEN: 'Shloka 4', number: '4' },
    { id: 4, name: 'श्लोक 5', nameEN: 'Shloka 5', number: '5' },
    { id: 5, name: 'श्लोक 6', nameEN: 'Shloka 6', number: '6' },
    { id: 6, name: 'श्लोक 7', nameEN: 'Shloka 7', number: '7' },
    { id: 7, name: 'श्लोक 8', nameEN: 'Shloka 8', number: '8' },
    { id: 8, name: 'श्लोक 9', nameEN: 'Shloka 9', number: '9' },
    { id: 9, name: 'श्लोक 10', nameEN: 'Shloka 10', number: '10' },
    { id: 10, name: 'श्लोक 11', nameEN: 'Shloka 11', number: '11' },
    { id: 11, name: 'श्लोक 12', nameEN: 'Shloka 12', number: '12' },
    { id: 12, name: 'श्लोक 13', nameEN: 'Shloka 13', number: '13' },
    { id: 13, name: 'श्लोक 14', nameEN: 'Shloka 14', number: '14' },
    { id: 14, name: 'श्लोक 15', nameEN: 'Shloka 15', number: '15' },
    { id: 15, name: 'श्लोक 16', nameEN: 'Shloka 16', number: '16' },
    { id: 16, name: 'श्लोक 17', nameEN: 'Shloka 17', number: '17' },
    { id: 17, name: 'श्लोक 18', nameEN: 'Shloka 18', number: '18' },
    { id: 18, name: 'श्लोक 19', nameEN: 'Shloka 19', number: '19' },
    { id: 19, name: 'श्लोक 20', nameEN: 'Shloka 20', number: '20' },
    { id: 20, name: 'श्लोक 21', nameEN: 'Shloka 21', number: '21' },
    { id: 21, name: 'श्लोक 22', nameEN: 'Shloka 22', number: '22' },
    { id: 22, name: 'श्लोक 23', nameEN: 'Shloka 23', number: '23' },
    { id: 23, name: 'श्लोक 24', nameEN: 'Shloka 24', number: '24' },
    { id: 24, name: 'श्लोक 25', nameEN: 'Shloka 25', number: '25' },
    { id: 25, name: 'श्लोक 26', nameEN: 'Shloka 26', number: '26' },
    { id: 26, name: 'श्लोक 27', nameEN: 'Shloka 27', number: '27' },
    { id: 27, name: 'श्लोक 28', nameEN: 'Shloka 28', number: '28' },
    { id: 28, name: 'श्लोक 29', nameEN: 'Shloka 29', number: '29' },
    { id: 29, name: 'श्लोक 30', nameEN: 'Shloka 30', number: '30' },
    { id: 30, name: 'श्लोक 31', nameEN: 'Shloka 31', number: '31' },
    { id: 31, name: 'श्लोक 32', nameEN: 'Shloka 32', number: '32' },
    { id: 32, name: 'श्लोक 33', nameEN: 'Shloka 33', number: '33' },
    { id: 33, name: 'श्लोक 34', nameEN: 'Shloka 34', number: '34' },
    { id: 34, name: 'श्लोक 35', nameEN: 'Shloka 35', number: '35' },
    { id: 35, name: 'श्लोक 36, 37', nameEN: 'Shloka 36, 37', number: '36_37' },
    { id: 36, name: 'श्लोक 38', nameEN: 'Shloka 38', number: '38' },
    { id: 37, name: 'श्लोक 39', nameEN: 'Shloka 39', number: '39' },
    { id: 38, name: 'श्लोक 40', nameEN: 'Shloka 40', number: '40' },
    { id: 39, name: 'श्लोक 41', nameEN: 'Shloka 41', number: '41' },
    { id: 40, name: 'श्लोक 42', nameEN: 'Shloka 42', number: '42' },
    { id: 41, name: 'श्लोक 43', nameEN: 'Shloka 43', number: '43' },
    { id: 42, name: 'श्लोक 44', nameEN: 'Shloka 44', number: '44' },
    { id: 43, name: 'श्लोक 45', nameEN: 'Shloka 45', number: '45' },
    { id: 44, name: 'श्लोक 46', nameEN: 'Shloka 46', number: '46' },
    { id: 45, name: 'श्लोक 47', nameEN: 'Shloka 47', number: '47' },
    { id: 46, name: 'श्लोक 48', nameEN: 'Shloka 48', number: '48' },
    { id: 47, name: 'श्लोक 49', nameEN: 'Shloka 49', number: '49' },
    { id: 48, name: 'श्लोक 50', nameEN: 'Shloka 50', number: '50' },
    { id: 49, name: 'श्लोक 51', nameEN: 'Shloka 51', number: '51' },
    { id: 50, name: 'श्लोक 52', nameEN: 'Shloka 52', number: '52' },
    { id: 51, name: 'श्लोक 53', nameEN: 'Shloka 53', number: '53' },
    { id: 52, name: 'श्लोक 54', nameEN: 'Shloka 54', number: '54' },
    { id: 53, name: 'श्लोक 55', nameEN: 'Shloka 55', number: '55' },
    { id: 54, name: 'श्लोक 56', nameEN: 'Shloka 56', number: '56' },
    { id: 55, name: 'श्लोक 57', nameEN: 'Shloka 57', number: '57' },
    { id: 56, name: 'श्लोक 58', nameEN: 'Shloka 58', number: '58' },
    { id: 57, name: 'श्लोक 59', nameEN: 'Shloka 59', number: '59' },
    { id: 58, name: 'श्लोक 60', nameEN: 'Shloka 60', number: '60' },
    { id: 59, name: 'श्लोक 61', nameEN: 'Shloka 61', number: '61' },
    { id: 60, name: 'श्लोक 62', nameEN: 'Shloka 62', number: '62' },
    { id: 61, name: 'श्लोक 63', nameEN: 'Shloka 63', number: '63' },
    { id: 62, name: 'श्लोक 64', nameEN: 'Shloka 64', number: '64' },
    { id: 63, name: 'श्लोक 65', nameEN: 'Shloka 65', number: '65' },
    { id: 64, name: 'श्लोक 66', nameEN: 'Shloka 66', number: '66' },
    { id: 65, name: 'श्लोक 67', nameEN: 'Shloka 67', number: '67' },
    { id: 66, name: 'श्लोक 68', nameEN: 'Shloka 68', number: '68' },
    { id: 67, name: 'श्लोक 69', nameEN: 'Shloka 69', number: '69' },
    { id: 68, name: 'श्लोक 70', nameEN: 'Shloka 70', number: '70' },
    { id: 69, name: 'श्लोक 71', nameEN: 'Shloka 71', number: '71' },
    { id: 70, name: 'श्लोक 72', nameEN: 'Shloka 72', number: '72' },
    { id: 71, name: 'श्लोक 73', nameEN: 'Shloka 73', number: '73' },
    { id: 72, name: 'श्लोक 74', nameEN: 'Shloka 74', number: '74' },
    { id: 73, name: 'श्लोक 75', nameEN: 'Shloka 75', number: '75' },
    { id: 74, name: 'श्लोक 76', nameEN: 'Shloka 76', number: '76' },
    { id: 75, name: 'श्लोक 77', nameEN: 'Shloka 77', number: '77' },
    { id: 76, name: 'श्लोक 78', nameEN: 'Shloka 78', number: '78' }
];
// export const AllChapter =[
//     {id: 0, name: chapter1},
//     {id: 1, name: chapter2},
//     {id: 2, name: chapter3},
//     {id: 3, name: chapter4},
//     {id: 4, name: chapter5},
//     {id: 5, name: chapter6},
//     {id: 6, name: chapter7},
//     {id: 7, name: chapter8},
//     {id: 8, name: chapter9},
//     {id: 9, name: chapter10},
//     {id: 10, name: chapter11},
//     {id: 11, name: chapter12}
//   ];
var AllChapter = [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
    chapter9,
    chapter10,
    chapter11,
    chapter12,
    chapter13,
    chapter14,
    chapter15,
    chapter16,
    chapter17,
    chapter18
];


/***/ }),

/***/ "./src/app/lessons/lessons.component.css":
/*!***********************************************!*\
  !*** ./src/app/lessons/lessons.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    height: 125px;\r\n}\r\n\r\nimg{\r\n    float: right;\r\n    width: 100px; \r\n    height: 100px;\r\n    margin-right: 16px;\r\n}\r\n\r\n.lessionListing{\r\n    display: flex;\r\n    justify-content: right;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n/* If the screen size is 601px wide or more, */\r\n\r\n@media screen and (min-width: 601px) {\r\n    h2{\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n/* If the screen size is 600px wide or less,  */\r\n\r\n@media screen and (max-width: 600px) {\r\n    h2{\r\n      font-size: 20px;\r\n    }\r\n  }\r\n\r\n.lessionListingHead{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n/* .lessionListing{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\n.lessionListingHead{\r\n    height: 100px;\r\n} */\r\n\r\n/*.mat-list-item{\r\n    cursor: pointer;\r\n}\r\n\r\nimg{\r\n    float: right;\r\n    width: 100px; \r\n    height: 100px;\r\n    margin-right: 16px;\r\n}\r\n\r\n.center-verticle{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLCtDQUErQzs7QUFDL0M7SUFDSTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7QUFFRjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7R0FTRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7O0dBZUciLCJmaWxlIjoic3JjL2FwcC9sZXNzb25zL2xlc3NvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnR7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTAwcHg7IFxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmxlc3Npb25MaXN0aW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDFweCB3aWRlIG9yIG1vcmUsICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA2MDBweCB3aWRlIG9yIGxlc3MsICAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4ubGVzc2lvbkxpc3RpbmdIZWFke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLyogLmxlc3Npb25MaXN0aW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubGVzc2lvbkxpc3RpbmdIZWFke1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSAqL1xyXG5cclxuLyoubWF0LWxpc3QtaXRlbXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDEwMHB4OyBcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jZW50ZXItdmVydGljbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/lessons/lessons.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lessons/lessons.component.ts ***!
  \**********************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/en/lession-list */ "./src/app/constants/en/lession-list.ts");
/* harmony import */ var _services_SharedService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/SharedService */ "./src/app/services/SharedService.ts");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Settings */ "./src/app/services/Settings.ts");





var LessonsComponent = /** @class */ (function () {
    function LessonsComponent(_sharedService, _settings) {
        var _this = this;
        _sharedService.emitChange("LessonsComponent");
        _settings.settingChangesEmitted$.subscribe(function (text) {
            _this.language = _settings.getLanguage();
        });
        this.language = _settings.getLanguage();
        this.lessionLists = _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_2__["lessions"];
    }
    LessonsComponent.prototype.ngOnInit = function () {
    };
    LessonsComponent.prototype.onListItemClick = function (lession) {
        console.log(lession.name);
    };
    LessonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lessons',
            template: __webpack_require__(/*! raw-loader!./lessons.component.html */ "./node_modules/raw-loader/index.js!./src/app/lessons/lessons.component.html"),
            styles: [__webpack_require__(/*! ./lessons.component.css */ "./src/app/lessons/lessons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_SharedService__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_Settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]])
    ], LessonsComponent);
    return LessonsComponent;
}());



/***/ }),

/***/ "./src/app/pipe/minuteSeconds.ts":
/*!***************************************!*\
  !*** ./src/app/pipe/minuteSeconds.ts ***!
  \***************************************/
/*! exports provided: MinuteSecondsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinuteSecondsPipe", function() { return MinuteSecondsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MinuteSecondsPipe = /** @class */ (function () {
    function MinuteSecondsPipe() {
    }
    MinuteSecondsPipe.prototype.transform = function (value) {
        var minutes = Math.floor(value / 60);
        return minutes.toString().padStart(2, '0') + ':' +
            Math.floor((value - minutes * 60)).toString().padStart(2, '0');
    };
    MinuteSecondsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'minuteSeconds'
        })
    ], MinuteSecondsPipe);
    return MinuteSecondsPipe;
}());



/***/ }),

/***/ "./src/app/services/Settings.ts":
/*!**************************************!*\
  !*** ./src/app/services/Settings.ts ***!
  \**************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Settings = /** @class */ (function () {
    function Settings(storage) {
        this.storage = storage;
        this.languageKey = "LANGUAGE";
        // Observable string sources
        this.settingChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.settingChangesEmitted$ = this.settingChanges.asObservable();
    }
    Settings.prototype.getLanguage = function () {
        var language = this.storage.retrieve(this.languageKey);
        if (language == null) {
            return '0';
        }
        else {
            return language;
        }
    };
    Settings.prototype.setLanguage = function (value) {
        this.storage.store(this.languageKey, value);
        this.settingChanges.next('');
    };
    Settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], Settings);
    return Settings;
}());



/***/ }),

/***/ "./src/app/services/SharedService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/SharedService.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedService = /** @class */ (function () {
    function SharedService() {
        // Observable string sources
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    SharedService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/SlokMeaningService.ts":
/*!************************************************!*\
  !*** ./src/app/services/SlokMeaningService.ts ***!
  \************************************************/
/*! exports provided: SlokMeaningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlokMeaningService", function() { return SlokMeaningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SlokMeaningService = /** @class */ (function () {
    function SlokMeaningService(http) {
        this.http = http;
        this.configUrl = 'assets/meaning/stringHi.json';
        this.configUrlEng = 'assets/meaning/stringEn.json';
    }
    SlokMeaningService.prototype.getStringHIndi = function () {
        return this.http.get(this.configUrl);
    };
    SlokMeaningService.prototype.getStringEng = function () {
        return this.http.get(this.configUrlEng);
    };
    SlokMeaningService.prototype.getStringForAll = function (lang) {
        return this.http.get('assets/meaning/meaning/chapter_' + lang + '.json');
    };
    SlokMeaningService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SlokMeaningService);
    return SlokMeaningService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon{\r\n    margin-right: 8px;\r\n}\r\n\r\nspan{\r\n    font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_SharedService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/SharedService */ "./src/app/services/SharedService.ts");
/* harmony import */ var _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/en/lession-list */ "./src/app/constants/en/lession-list.ts");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Settings */ "./src/app/services/Settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(_sharedService, _settings, router) {
        var _this = this;
        this.router = router;
        this.playUrl = "https://play.google.com/store";
        this.listItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showHomeButtonEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _sharedService.changeEmitted$.subscribe(function (text) {
            _this.changeNavigation(text);
        });
        _settings.settingChangesEmitted$.subscribe(function (text) {
            _this.language = _settings.getLanguage();
        });
        this.language = _settings.getLanguage();
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.clickedListItem = function (url, id) {
        if (url.includes(this.playUrl)) {
            window.open(url);
        }
        else {
            //[routerLink]="[nav.url,nav.id]"
            this.router.navigate([url, id]);
        }
        this.listItemClicked.emit(null);
    };
    SidenavComponent.prototype.changeNavigation = function (name) {
        this.componentName = name;
        if (name == 'LessonsComponent') {
            this.items = [
                { id: 1, text: 'BhagvadGit Android APP', textEN: 'भगवद्‍गीता Android APP', url: 'https://play.google.com/store/apps/details?id=com.amiroid.bhagavadgita' },
                { id: 2, text: 'Our Other Andrroid Apps', textEN: 'हमारी अन्य Android ऐप्स', url: 'https://play.google.com/store/search?q=pub%3Aamiroid&c=apps' }
            ];
            this.showHomeButtonEventEmitter.emit(false);
        }
        else if (name == 'VerseListingComponent') {
            this.items = _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_3__["lessions"].map(function (less) {
                //{id: less.id, text: less.chapter+' - '+less.name, url: less}
                return { id: less.id, text: less.name, textEN: less.nameEN, url: 'verselisting' };
            });
            this.showHomeButtonEventEmitter.emit(true);
        }
        else {
            this.showHomeButtonEventEmitter.emit(true);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "listItemClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "showHomeButtonEventEmitter", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_SharedService__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _services_Settings__WEBPACK_IMPORTED_MODULE_4__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-spacer{\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n\r\nh5{\r\n    padding-left: 8px;\r\n}\r\n\r\n.mat-icon{\r\n    cursor: pointer;\r\n}\r\n\r\n.margin{\r\n    margin-right: 16px;\r\n    margin-left: 16px;\r\n}\r\n\r\n/* .mat-button-toggle-group{\r\n    margin-right: 16px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhFQUE4RTtJQUM5RSxVQUFVO0VBQ1o7O0FBRUY7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7R0FFRyIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItc3BhY2Vye1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuaDV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm1hdC1pY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFyZ2lue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/Settings */ "./src/app/services/Settings.ts");





var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(iconRegistry, sanitizer, settings) {
        this.settings = settings;
        this.eventEmmiterFoeNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showHomeButton = false;
        //Set Icons
        iconRegistry.addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('assets/images-svg/more.svg'));
        iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('assets/images-svg/menu.svg'));
        this.items = [
            { id: 1, text: 'Setting', img: 'menu' },
            { id: 2, text: 'GO TO', img: 'menu' },
            { id: 3, text: 'Browser', img: 'menu' }
        ];
        this.language = this.settings.getLanguage();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.setBreakpoint(window.innerWidth);
    };
    ToolbarComponent.prototype.onResize = function (event) {
        console.log('window.innerWidth' + window.innerWidth);
        //this.breakpoint = (window.innerWidth <= 650) ? 1 : 5;
        this.setBreakpoint(window.innerWidth);
    };
    ToolbarComponent.prototype.setBreakpoint = function (breakp) {
        if (breakp <= 600) {
            this.engilshText = 'Eng';
        }
        else {
            this.engilshText = 'English';
        }
        //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
    };
    ToolbarComponent.prototype.toggleNav = function () {
        console.log("Toolbar menu clicked");
        this.eventEmmiterFoeNav.emit('{name: Amit}');
    };
    ToolbarComponent.prototype.onMenuItemClick = function (item) {
        console.log(item.id + "~" + item.text + "~" + item.img);
    };
    ToolbarComponent.prototype.onLanguageChange = function (value) {
        //this.language = value;
        //console.log(this.language);
        this.settings.setLanguage(value);
        this.language = this.settings.getLanguage();
        //console.log(this.language);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToolbarComponent.prototype, "eventEmmiterFoeNav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ToolbarComponent.prototype, "onResize", null);
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _services_Settings__WEBPACK_IMPORTED_MODULE_4__["Settings"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/verse/verse.component.css":
/*!*******************************************!*\
  !*** ./src/app/verse/verse.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent{\r\n    padding: 16px 16px 16px 16px;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.child{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\n.button{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n}\r\n\r\n.spacebetween{\r\n    margin-top: 16px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\nimg{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n/* If the screen size is 601px wide or more, */\r\n\r\n@media screen and (min-width: 601px) {\r\n    h2{\r\n        font-size: 30px;\r\n    }\r\n\r\n    .heading{\r\n        font-size: 30px;\r\n    }\r\n\r\n    .subheading{\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n/* If the screen size is 600px wide or less,  */\r\n\r\n@media screen and (max-width: 600px) {\r\n    h2{\r\n      font-size: 20px;\r\n    }\r\n\r\n    .heading{\r\n        font-size: 20px;\r\n    }\r\n\r\n    .subheading{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n\r\n.material-icons.md-20 { font-size: 20px; }\r\n\r\n.material-icons.md-28 { font-size: 28px; }\r\n\r\n.material-icons.md-40 { font-size: 40px; }\r\n\r\n.material-icons.md-55 {\r\n       font-size: 55px; \r\n       cursor: pointer;\r\n    }\r\n\r\n.mat-slider-horizontal {\r\n        width: 100%;\r\n        cursor: pointer;\r\n      }\r\n\r\nimg{\r\n    margin-top: 16px;\r\n}\r\n\r\n/* #progress_bar {\r\n        border:1px solid #500012;\r\n        margin:1em 0;\r\n        cursor:pointer;\r\n        background:#f2f2f2;\r\n        width:100%;\r\n        height:20px;\r\n        display:inline-block;\r\n        padding:0;\r\n}\r\n        \r\n#bar {\r\n        background:rgb(238, 70, 4);\r\n        height:18px;\r\n        display:inline-block;\r\n        float:left;\r\n        width:0%;\r\n} */\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc2UvdmVyc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDhDQUE4Qzs7QUFDOUM7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBLCtDQUErQzs7QUFDL0M7SUFDSTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtFQUNGOztBQUVBLHdCQUF3QixlQUFlLEVBQUU7O0FBQ3pDLHdCQUF3QixlQUFlLEVBQUU7O0FBQ3pDLHdCQUF3QixlQUFlLEVBQUU7O0FBQ3pDO09BQ0ssZUFBZTtPQUNmLGVBQWU7SUFDbEI7O0FBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtNQUNqQjs7QUFHTjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkUiLCJmaWxlIjoic3JjL2FwcC92ZXJzZS92ZXJzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudHtcclxuICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcblxyXG4uc3BhY2ViZXR3ZWVue1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5pbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogSWYgdGhlIHNjcmVlbiBzaXplIGlzIDYwMXB4IHdpZGUgb3IgbW9yZSwgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1YmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBJZiB0aGUgc2NyZWVuIHNpemUgaXMgNjAwcHggd2lkZSBvciBsZXNzLCAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJoZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1pY29ucy5tZC0yMCB7IGZvbnQtc2l6ZTogMjBweDsgfVxyXG4gIC5tYXRlcmlhbC1pY29ucy5tZC0yOCB7IGZvbnQtc2l6ZTogMjhweDsgfVxyXG4gIC5tYXRlcmlhbC1pY29ucy5tZC00MCB7IGZvbnQtc2l6ZTogNDBweDsgfVxyXG4gIC5tYXRlcmlhbC1pY29ucy5tZC01NSB7XHJcbiAgICAgICBmb250LXNpemU6IDU1cHg7IFxyXG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc2xpZGVyLWhvcml6b250YWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuXHJcbmltZ3tcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuIC8qICNwcm9ncmVzc19iYXIge1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgIzUwMDAxMjtcclxuICAgICAgICBtYXJnaW46MWVtIDA7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZjJmMmYyO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzowO1xyXG59XHJcbiAgICAgICAgXHJcbiNiYXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDIzOCwgNzAsIDQpO1xyXG4gICAgICAgIGhlaWdodDoxOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgd2lkdGg6MCU7XHJcbn0gKi9cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/verse/verse.component.ts":
/*!******************************************!*\
  !*** ./src/app/verse/verse.component.ts ***!
  \******************************************/
/*! exports provided: VerseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerseComponent", function() { return VerseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_SlokMeaningService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/SlokMeaningService */ "./src/app/services/SlokMeaningService.ts");
/* harmony import */ var _constants_en_slok_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/en/slok-listing */ "./src/app/constants/en/slok-listing.ts");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/Settings */ "./src/app/services/Settings.ts");
/* harmony import */ var _services_SharedService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/SharedService */ "./src/app/services/SharedService.ts");
/* harmony import */ var _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/en/lession-list */ "./src/app/constants/en/lession-list.ts");








var VerseComponent = /** @class */ (function () {
    function VerseComponent(route, slokMeaningSer, _settings, _sharedService, router) {
        var _this = this;
        this.route = route;
        this.slokMeaningSer = slokMeaningSer;
        this.router = router;
        this.isShowProgressBar = false;
        this.lessionHeadingText = "lesson_?_verse_#_heading";
        this.verseText = "lesson_?_verse_#";
        this.translationText = "lesson_?_verse_#_translation";
        this.engMusicUrl = "assets/music/music-en/";
        this.hinMusicUrl = "assets/music/music-hi/";
        this.audio = new Audio();
        //@ViewChild('audioOption') audioPlayerRef: ElementRef;
        //@ViewChild('bar') progressBar: ElementRef;
        // progressBar: string;
        this.progressInMinutes = 0.0;
        this.totalTimeInMinutes = 0.00;
        this.isMinute = false;
        _sharedService.emitChange("VerseListingComponent");
        this.lessionId = this.route.snapshot.paramMap.get('lession');
        this.slokId = this.route.snapshot.paramMap.get('slok');
        this.number = this.route.snapshot.paramMap.get('sloknumber');
        _settings.settingChangesEmitted$.subscribe(function (text) {
            _this.language = _settings.getLanguage();
            _this.getSlokData(_this.language);
            //For Audio Sound
            _this.stopAudio();
            _this.isPlayingAudio = false;
            _this.audio = new Audio();
            _this.setAudioPlayListner();
        });
        this.language = _settings.getLanguage();
        this.getSlokData(this.language);
    }
    VerseComponent.prototype.ngOnInit = function () {
        this.setAudioPlayListner();
    };
    //data=0// lessionHeading, data=1//lessionVerse, data=2//slokTranslation
    VerseComponent.prototype.getSlokDataWByGivenData = function (data, lang, lessId, sloknumber) {
        // console.log('getSlokDataWByGivenData -start');
        var lessionHeadingText = this.lessionHeadingText.replace("?", lessId).replace("#", sloknumber);
        var verseText = this.verseText.replace("?", lessId).replace("#", sloknumber);
        var translationText = this.translationText.replace("?", lessId).replace("#", sloknumber);
        try {
            if (lang == '0') {
                if (data == 0) {
                    var lessionHeading = this.meaningDataHindi.filter(function (kv) { return kv.name == lessionHeadingText; });
                    //console.log(lessionHeading);
                    lessionHeading[0].text = lessionHeading[0].text.replace("<br/>", "");
                    return lessionHeading[0].text;
                }
                else if (data == 1) {
                    var lessionVerse = this.meaningDataHindi.filter(function (kv) { return kv.name == verseText; });
                    return lessionVerse[0].text;
                }
                else if (data == 2) {
                    var slokTranslation = this.meaningDataHindi.filter(function (kv) { return kv.name == translationText; });
                    return slokTranslation[0].text;
                }
            }
            else {
                if (data == 0) {
                    var lessionHeading = this.meaningDataEng.filter(function (kv) { return kv.name == lessionHeadingText; });
                    //console.log(lessionHeading);
                    lessionHeading[0].text = lessionHeading[0].text.replace("<br/>", "");
                    return lessionHeading[0].text;
                }
                else if (data == 1) {
                    var lessionVerse = this.meaningDataEng.filter(function (kv) { return kv.name == verseText; });
                    return lessionVerse[0].text;
                }
                else if (data == 2) {
                    var slokTranslation = this.meaningDataEng.filter(function (kv) { return kv.name == translationText; });
                    return slokTranslation[0].text;
                }
            }
        }
        catch (Error) {
            console.log(Error.message);
            //this.router.navigate(['verse-listing',lessId]); 
            //[routerLink]="['verse-listing',lession.id]"
        }
    };
    VerseComponent.prototype.getSlokData = function (lang) {
        var _this = this;
        this.isShowProgressBar = true;
        //console.log(lang);
        if (lang == '0') {
            if (this.meaningDataHindi == null) {
                //console.log("not null");
                this.slokMeaningSer.getStringHIndi().subscribe(function (res) {
                    _this.meaningDataHindi = res;
                    //console.log(this.meaningDataHindi);
                });
            }
            else {
                //console.log(this.meaningDataHindi);
            }
        }
        else {
            if (this.meaningDataEng == null) {
                // console.log("not null");
                this.slokMeaningSer.getStringEng().subscribe(function (res) {
                    _this.meaningDataEng = res;
                    // console.log(this.meaningDataEng);
                });
            }
        }
        if (this.meaningForAll == null) {
            this.slokMeaningSer.getStringForAll(this.lessionId).subscribe(function (res) {
                _this.meaningForAll = res;
            });
        }
        this.isShowProgressBar = false;
        // console.log('getSlokData -end');
    };
    VerseComponent.prototype.getSlokList = function (id) {
        var less = +id - 1;
        return _constants_en_slok_listing__WEBPACK_IMPORTED_MODULE_4__["AllChapter"][less];
    };
    VerseComponent.prototype.selectedTab = function ($event) {
        // console.log($event.index);
        var num = $event.index;
        this.slokId = "" + num;
    };
    VerseComponent.prototype.getLessionName = function () {
        if (this.language == '0') {
            return _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_7__["lessions"][+this.lessionId - 1].name;
        }
        else {
            return _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_7__["lessions"][+this.lessionId - 1].nameEN;
        }
    };
    VerseComponent.prototype.palyPause = function (value) {
        this.isPlayingAudio = value;
        if (value) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
    };
    VerseComponent.prototype.setAudioPlayListner = function () {
        var _this = this;
        //this.audioPlayerRef.nativeElement.play();
        if (this.language == '0') {
            var extraUrl = "hindi_chapter_" + this.lessionId + ".mp3";
            this.audio.src = this.hinMusicUrl + extraUrl;
        }
        else {
            var extraUrl = "bg-" + this.lessionId + ".mp3";
            this.audio.src = this.engMusicUrl + extraUrl;
        }
        //if(minuteValue.toString.)
        // this.audio.play();
        this.audio.addEventListener("timeupdate", function (currentTime) {
            //console.log(currentTime);
            //console.log(this.audio);
            //var time = 0;
            _this.totalTimeInMinutes = _this.audio.duration;
            _this.maxSlider = _this.totalTimeInMinutes;
            _this.updateProgress();
        });
    };
    VerseComponent.prototype.updateProgress = function () {
        if (this.audio.currentTime > 0) {
            //var value = 0;
            // value = (100 / this.audio.duration) * this.audio.currentTime;
            this.progressInMinutes = this.audio.currentTime;
            // this.progressBar = value + '%';
            this.valueSlider = this.progressInMinutes;
            if (this.valueSlider == this.maxSlider) {
                this.isPlayingAudio = false;
                this.valueSlider = 0;
            }
        }
        else {
            //console.log("00000000000000000000")
        }
    };
    VerseComponent.prototype.onInputChange = function (event) {
        //console.log("This is emitted as the thumb slides");
        //console.log(event.value);
        this.audio.currentTime = event.value;
    };
    VerseComponent.prototype.ngOnDestroy = function () {
        // destroy audio here
        this.stopAudio();
    };
    VerseComponent.prototype.stopAudio = function () {
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
    };
    VerseComponent.prototype.getSlokDataForAll = function (slokId) {
        //console.log(slokId);
        var meaningData = this.meaningForAll[slokId];
        //console.log(meaningData);
        return meaningData.t;
    };
    VerseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verse',
            template: __webpack_require__(/*! raw-loader!./verse.component.html */ "./node_modules/raw-loader/index.js!./src/app/verse/verse.component.html"),
            styles: [__webpack_require__(/*! ./verse.component.css */ "./src/app/verse/verse.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_SlokMeaningService__WEBPACK_IMPORTED_MODULE_3__["SlokMeaningService"], _services_Settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _services_SharedService__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VerseComponent);
    return VerseComponent;
}());



/***/ }),

/***/ "./src/app/verselisting/verselisting.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verselisting/verselisting.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nimg{\r\n    float: right;\r\n    width: 75px; \r\n    height: 75px;\r\n    margin-right: 16px;\r\n}\r\n\r\n.listing{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\n/* .mat-grid-tile{\r\n    cursor: pointer;\r\n} */\r\n\r\n.mat-grid-list{\r\n    margin: 16px 16px 16px 16px;\r\n}\r\n\r\n.listingHead{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\n\r\n/* mat-grid-tile {\r\n    background: rgb(255, 176, 30);\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyc2VsaXN0aW5nL3ZlcnNlbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTs7S0FFSyIsImZpbGUiOiJzcmMvYXBwL3ZlcnNlbGlzdGluZy92ZXJzZWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1ne1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDc1cHg7IFxyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ubGlzdGluZ3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogLm1hdC1ncmlkLXRpbGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gKi9cclxuXHJcbi5tYXQtZ3JpZC1saXN0e1xyXG4gICAgbWFyZ2luOiAxNnB4IDE2cHggMTZweCAxNnB4O1xyXG59XHJcblxyXG4ubGlzdGluZ0hlYWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBtYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDE3NiwgMzApO1xyXG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/verselisting/verselisting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verselisting/verselisting.component.ts ***!
  \********************************************************/
/*! exports provided: VerseListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerseListingComponent", function() { return VerseListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/en/lession-list */ "./src/app/constants/en/lession-list.ts");
/* harmony import */ var _constants_en_slok_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/en/slok-listing */ "./src/app/constants/en/slok-listing.ts");
/* harmony import */ var _services_SharedService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/SharedService */ "./src/app/services/SharedService.ts");
/* harmony import */ var _services_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Settings */ "./src/app/services/Settings.ts");







var VerseListingComponent = /** @class */ (function () {
    function VerseListingComponent(route, _sharedService, router, _settings) {
        var _this = this;
        this.router = router;
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        _sharedService.emitChange("VerseListingComponent");
        //this.lessionId = route.snapshot.paramMap.get('id');
        route.params.subscribe(function (val) {
            // put the code from `ngOnInit` here
            //console.log(val);
            _this.lessionId = val.id;
        });
        this.lessionLists = _constants_en_lession_list__WEBPACK_IMPORTED_MODULE_3__["lessions"];
        _settings.settingChangesEmitted$.subscribe(function (text) {
            _this.language = _settings.getLanguage();
            //console.log(this.language);
        });
        this.language = _settings.getLanguage();
        //console.log('constructor');
    }
    VerseListingComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit' + window.innerWidth);
        //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
        this.setBreakpoint(window.innerWidth);
    };
    VerseListingComponent.prototype.getSlokList = function (id) {
        return _constants_en_slok_listing__WEBPACK_IMPORTED_MODULE_4__["AllChapter"][id];
    };
    VerseListingComponent.prototype.onMatClick = function (lession, slok, number) {
        console.log(lession + '  ' + slok);
        var lessId = +lession;
        var slokId = +slok;
        lessId = lessId + 1;
        slokId = slokId + 1;
        this.router.navigate(['verse', { lession: lessId, slok: slokId, sloknumber: number }]);
    };
    // getTabsName(lession: lessionList){
    //   if(this.language = '0'){
    //       return lession.chapter;
    //   }else{
    //     return lession.chapterEN;
    //   }
    // }
    VerseListingComponent.prototype.onResize = function (event) {
        console.log('window.innerWidth' + window.innerWidth);
        //this.breakpoint = (window.innerWidth <= 650) ? 1 : 5;
        this.setBreakpoint(window.innerWidth);
    };
    VerseListingComponent.prototype.setBreakpoint = function (breakp) {
        if (breakp <= 500) {
            this.breakpoint = 1;
        }
        else if (breakp > 500 && breakp <= 1000) {
            this.breakpoint = 2;
        }
        else if (breakp > 1000 && breakp <= 1500) {
            this.breakpoint = 3;
        }
        else {
            this.breakpoint = 5;
        }
        //this.breakpoint = (window.innerWidth < 650) ? 1 : 5;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], VerseListingComponent.prototype, "onResize", null);
    VerseListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verselisting',
            template: __webpack_require__(/*! raw-loader!./verselisting.component.html */ "./node_modules/raw-loader/index.js!./src/app/verselisting/verselisting.component.html"),
            styles: [__webpack_require__(/*! ./verselisting.component.css */ "./src/app/verselisting/verselisting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_SharedService__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_Settings__WEBPACK_IMPORTED_MODULE_6__["Settings"]])
    ], VerseListingComponent);
    return VerseListingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pkpankajk/Downloads/MindTreeBookshelve/BhagavatGita/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map