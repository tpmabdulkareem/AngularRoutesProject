webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "   div {\r\n       background-image: url(\"http://lab.empirio.no/media/images/background.png\");\r\n   }\r\n   \r\n   h1 {\r\n       display: -webkit-box;\r\n       display: -ms-flexbox;\r\n       display: flex;\r\n       -webkit-box-pack: center;\r\n           -ms-flex-pack: center;\r\n               justify-content: center;\r\n       font-family: 'Arial Narrow Bold', sans-serif;\r\n       -webkit-animation-name: example;\r\n               animation-name: example;\r\n       -webkit-animation-duration: 15s;\r\n               animation-duration: 15s;\r\n       color: red;\r\n   }\r\n   \r\n   @-webkit-keyframes example {\r\n       from {\r\n           color: rgb(1, 247, 226);\r\n       }\r\n       to {\r\n           color: teal;\r\n       }\r\n   }\r\n   \r\n   @keyframes example {\r\n       from {\r\n           color: rgb(1, 247, 226);\r\n       }\r\n       to {\r\n           color: teal;\r\n       }\r\n   }\r\n   \r\n   .responsive-img {\r\n       -webkit-box-pack: center;\r\n           -ms-flex-pack: center;\r\n               justify-content: center;\r\n   }\r\n   \r\n   .responsive-img:hover {\r\n       background: rgb(0, 197, 247);\r\n   }\r\n   \r\n   .page-footer {\r\n       background-color: rgb(14, 2, 182);\r\n       padding: 1em;\r\n       display: -webkit-box;\r\n       display: -ms-flexbox;\r\n       display: flex;\r\n       -webkit-box-pack: center;\r\n           -ms-flex-pack: center;\r\n               justify-content: center;\r\n       width: 100%;\r\n       opacity: .8;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    Angular Router Example\n    <h1>List Pet animals</h1>\n    <router-outlet></router-outlet>\n\n</div>\n\n<footer class=\"page-footer \">\n    <a href=\"http://www.facebook.com/abdul.kareem2 \"> <img class=\"responsive-img \" src=\"../../assets/facebook.png \"></a>\n    <a href=\"https://twitter.com/abdulkareemtpm \"><img class=\"responsive-img \" src=\"../../assets/twitter.png \"></a>\n    <a href=\"https://plus.google.com/u/0/+AbdulKareemTPM \"> <img class=\"responsive-img \" src=\"../../assets/google-plus.png \"></a>\n    <a href=\"https://www.linkedin.com/in/t-p-m-abdulkareem-9873b6108/ \"> <img class=\"responsive-img \" src=\"../../assets/linkedin.png \"></a>\n    <a href=\"https://github.com/tpmabdulkareem \"><img class=\"responsive-img \" src=\"../../assets/github-circle.png \"></a>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { Page1Component } from './page1/page1.component';
// import { Page2Component } from './page2/page2.component';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_4__page2_page2_component__["a" /* Page2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* unused harmony export AppComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");


var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_1__page2_page2_component__["a" /* Page2Component */] }
];
var AppComponents = [
    __WEBPACK_IMPORTED_MODULE_0__page1_page1_component__["a" /* Page1Component */],
    __WEBPACK_IMPORTED_MODULE_1__page2_page2_component__["a" /* Page2Component */]
];


/***/ }),

/***/ "../../../../../src/app/page1/page1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(61, 3, 3);\r\n}\r\n\r\nimg {\r\n    width: 40%;\r\n    height: 10%;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: rgb(3, 90, 15);\r\n            text-decoration-color: rgb(3, 90, 15);\r\n}\r\n\r\na:hover {\r\n    color: rgb(20, 116, 224)\r\n}\r\n\r\nimg:hover {\r\n    opacity: .9;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>List of Dog Pets</p>\n    <!-- <img src=\"https://www.rd.com/wp-content/uploads/2017/06/05-dog-breed-Safety-Tips-to-Keep-Your-Dog-in-Top-Shape-This-Summer-508549561-Yevgen-Romanenko.jpg\"> -->\n    <h2><a (click)=\"navigate()\">Dogs</a> | <a [routerLink]=\"['page2']\">Cats </a> </h2>\n</div>\n<div>\n    <h2>1.Labrador Retriever</h2>\n    <img src=\"http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Labrador-Retriever-2.jpg\">\n    <h3>\n        Affectionate | Alert | Cheerful | Energetic | Friendly | Gentle | Intelligent | Loving | Loyal | Out-Going | Playful | Responsive | Social.\n    </h3>\n\n</div>\n\n<div>\n    <h2>2.German Shepherd Dog</h2>\n    <img src=\"http://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-2.jpg \">\n    <h3>\n        Alert | Confident | Courageous | Curious | Intelligent | Loyal | Obedient | Watchful. </h3>\n\n</div>\n<div>\n    <h2>3.Boxer</h2>\n    <img src=\"http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Boxer-2.jpg\">\n    <h3>\n        Brave | Bright | Confident | Energetic | Fearless | Friendly | Intelligent | Loyal | Playful </h3>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Component = (function () {
    function Page1Component(router) {
        this.router = router;
    }
    Page1Component.prototype.navigate = function () {
        this.router.navigate(['page2']);
    };
    Page1Component.prototype.ngOnInit = function () {
    };
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__("../../../../../src/app/page1/page1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page1/page1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    color: rgb(87, 1, 1);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    -webkit-text-decoration-color: rgb(100, 17, 2);\r\n            text-decoration-color: rgb(100, 17, 2);\r\n}\r\n\r\nimg {\r\n    width: 40%;\r\n    height: 8%;\r\n}\r\n\r\na:hover {\r\n    color: rgb(20, 116, 224)\r\n}\r\n\r\nimg:hover {\r\n    opacity: .9;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>List of Pet Cats</p>\n    <!-- <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRYqfQq8fglxEIOCyeSdgblEzWUxyFtZUqJVBMvFpWpGY1GqI\"> -->\n    <h2>\n        <a (click)=\"goBack()\">Cats</a> | <a [routerLink]=\"['/']\">Dogs</a>\n    </h2>\n    <div>\n        <h2>1.British Shorthair Cat</h2>\n        <img src=\"https://fthmb.tqn.com/OPAjbZoYJrWosL_bpl59O9Ju07k=/960x0/filters:no_upscale()/close-up-of-cat-sleeping-on-couch-660560353-5911fbb55f9b586470b7af37.jpg\">\n        <h3>\n            Length: Short, Medium | Characteristics: Straight | Colors: White, Blue, Black, Cream, Red, Brown, Silver, Cameo, Bluecream, Tortoiseshell, Torbie, Smoke, Shaded | Pattern: Solid color, Tortoiseshell, Bicolor, Tricolor/Calico, Tabby, Smoke, Shaded | Less\n            Allergenic: No | Overall Grooming Needs: Moderate, High\n        </h3>\n\n    </div>\n    <br>\n    <div>\n        <h2>2.Exotic Cats</h2>\n        <img src=\"data:image/jpeg;base64,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\">\n\n        <h3> Length: Medium, Long | Characteristics: Straight | Colors: White, Red, Cream, Black, Blue, Chocolate, Lilac, Silver, Golden Cameo, Tortoiseshell, Bluecream, Brown, Lilac Cream, Calico | Pattern: Solid color, Tortoiseshell, Bicolor, Tricolor/Calico,\n            Tabby, Smoke, Shaded, Points | Less Allergenic: No | Overall Grooming Needs: High\n        </h3>\n\n\n    </div>\n    <br>\n\n    <div>\n        <h2>3.Persian Cat</h2>\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJRuJYGRyrkzpyWQrfKN3d4oon5r8VFw1hocvUEWcLhEMpctL\">\n        <h3>\n            Length: Long | Characteristics: Silky | Colors: White, Red, Cream, Black, Blue, Chocolate, Lilac, Silver, Golden, Cameo, Tortoiseshell, Blue-cream, Brown, Calico, Seal | Pattern: Solid Color, Tortoiseshell, Bicolor, Tricolor/Calico, Tabby, Smoke, Shaded,\n            Points | Less Allergenic: No | Overall Grooming Needs: High\n        </h3>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Component = (function () {
    function Page2Component(location) {
        this.location = location;
    }
    Page2Component.prototype.goBack = function () {
        this.location.back();
    };
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("../../../../../src/app/page2/page2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page2/page2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map