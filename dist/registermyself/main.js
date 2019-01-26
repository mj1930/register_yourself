(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'registermyself';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _createform_createform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createform/createform.component */ "./src/app/createform/createform.component.ts");
/* harmony import */ var _input_component_input_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-component/input-component.component */ "./src/app/input-component/input-component.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _createform_createform_component__WEBPACK_IMPORTED_MODULE_5__["CreateformComponent"],
                _input_component_input_component_component__WEBPACK_IMPORTED_MODULE_6__["InputComponentComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _createform_createform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createform/createform.component */ "./src/app/createform/createform.component.ts");


var appRoutes = [
    {
        path: '',
        component: _createform_createform_component__WEBPACK_IMPORTED_MODULE_1__["CreateformComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: false });


/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ng-container *ngFor=\"let input of data; let i = index;\">\n    <div class=\"col-sm-12\">\n      <ng-template [ngIf]=\"input.type == 'text'\">\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"text\" [placeholder]=\"input.for\" [(ngModel)]=\"input.fieldName\" [id]=\"input.id\">\n        </div>\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"text\" name=\"name_{{i}}\" [id]=\"input.id\" [placeholder]=\"input.placeholder\" />\n        </div>\n        <div class=\"col-sm-2\" (click)=\"removeElement(input.id)\">\n          <i class=\"fas fa-trash-alt\" role=\"button\"></i>\n        </div>\n      </ng-template>\n    </div>\n    <div class=\"col-sm-12\">\n      <ng-template [ngIf]=\"input.type == 'number'\">\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"text\" [placeholder]=\"input.for\" [(ngModel)]=\"input.fieldName\" [id]=\"input.id\">\n        </div>\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"number\" name=\"name_{{i}}\" [id]=\"input.id\" [placeholder]=\"input.placeholder\" />\n        </div>\n        <div class=\"col-sm-2\" (click)=\"removeElement(input.id)\">\n          <i class=\"fas fa-trash-alt\" role=\"button\"></i>\n        </div>\n      </ng-template>\n    </div>\n    <div class=\"col-sm-12\">\n      <ng-template [ngIf]=\"input.type == 'password'\">\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"text\" [placeholder]=\"input.for\" [(ngModel)]=\"input.fieldName\" [id]=\"input.id\">\n        </div>\n        <div class=\"col-sm-5\">\n          <input class=\"form-control\" type=\"password\" name=\"name_{{i}}\" [id]=\"input.id\" [placeholder]=\"input.placeholder\" />\n        </div>\n        <div class=\"col-sm-2\" (click)=\"removeElement(input.id)\">\n          <i class=\"fas fa-trash-alt\" role=\"button\"></i>\n        </div>\n      </ng-template>\n    </div>\n    <div *ngIf=\"input.type == 'checkbox'\">\n      <ng-template ngFor let-checkbox [ngForOf]=\"input.totalCheckboxes\" let-j=\"index\">\n        <div class=\"col-sm-12\">\n          <div class=\"col-sm-5\">\n            <input class=\"form-control\" type=\"checkbox\" [id]=\"checkbox.id\" [value]=\"checkbox.label\">\n          </div>\n          <div class=\"col-sm-5\">\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"checkbox.label\">\n          </div>\n          <div class=\"col-sm-2\" (click)=\"removeElement(input.id)\">\n            <i class=\"fas fa-trash-alt\" role=\"button\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n    <div *ngIf=\"input.type == 'select'\">\n      <div class=\"col-sm-12\">\n        <div class=\"col-sm-10\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Dropdown Example\n              <span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let options of input.totalOptions\">\n                <input type=\"text\" class=\"form-control\" [id]=\"options.id\" [(ngModel)]=\"options.label\">\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-sm-2\" (click)=\"removeElement(input.id)\">\n          <i class=\"fas fa-trash-alt\" role=\"button\"></i>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = /** @class */ (function () {
    function CreateComponent() {
        this.data = [];
        this.changeName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.removeElement = function (id) {
        var index = -1;
        this.data.find(function (element, i) {
            if (element.id == id) {
                index = i;
                return element;
            }
        });
        this.data.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CreateComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "changeName", void 0);
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/createform/createform.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createform/createform.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/createform/createform.component.html":
/*!******************************************************!*\
  !*** ./src/app/createform/createform.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"row\">\n    <form >\n      <app-input-component [data]=\"inputArray\" ></app-input-component> \n    </form>\n  </div>\n</div> -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <label class=\"col-sm-3\">Select your field type here</label>\n      <select class=\"selectpicker col-sm-3\" [(ngModel)] = \"selectedElement\">\n        <option *ngFor=\"let value of selectArray\" [value]=\"value.text\">{{value.label}}</option>\n      </select>\n      <div class=\"col-sm-6\" *ngIf=\"selectedElement == 'checkbox'\">\n        <label class=\"col-sm-4\">No. Of Checkboxes</label>\n        <input class='col-sm-2' type=\"text\" placeholder=\"# of checkbox\" [(ngModel)]=\"totalCheckboxes\">\n      </div>\n      <div class=\"col-sm-6\" *ngIf=\"selectedElement == 'select'\">\n        <label class=\"col-sm-4\">No. Of option</label>\n        <input class='col-sm-2' type=\"text\" placeholder=\"# of options\" [(ngModel)]=\"totalOptions\">\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <button class=\"col-sm-3\" type=\"button\" (click)=\"addNewElement()\"> Add new</button>\n    </div>\n    <app-create [data]=\"inputArray\"></app-create>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/createform/createform.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createform/createform.component.ts ***!
  \****************************************************/
/*! exports provided: CreateformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateformComponent", function() { return CreateformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateformComponent = /** @class */ (function () {
    function CreateformComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.inputArray = [];
        this.selectArray = [
            {
                text: 'text',
                label: 'Text'
            },
            {
                text: 'number',
                label: 'Number'
            },
            {
                text: 'checkbox',
                label: 'Checkbox'
            },
            {
                text: 'select',
                label: 'Select'
            },
            {
                text: 'password',
                label: 'Password'
            },
            {
                text: 'radio',
                label: 'Radio'
            },
        ];
        this.selectedElement = 'text';
        this.elementName = 'Type your field name here';
        this.totalCheckboxes = 2;
        this.totalOptions = 2;
    }
    CreateformComponent.prototype.ngOnInit = function () {
        this.inputArray = [
            {
                placeholder: 'Type your text here',
                type: 'text',
                for: this.elementName,
                id: 0,
                fieldName: 'Text'
            },
            {
                placeholder: 'Type your text here',
                type: 'number',
                for: this.elementName,
                id: 1,
                fieldName: 'Number'
            }
        ];
    };
    CreateformComponent.prototype.addNewElement = function () {
        var _this = this;
        console.log(this.inputArray);
        if (this.selectedElement == 'checkbox') {
            var totalCheckboxes = [];
            for (var i = 1; i <= this.totalCheckboxes; i++) {
                var label = 'Checkbox' + i;
                totalCheckboxes.push({ label: label, id: i });
            }
            this.inputArray.push({
                type: this.selectedElement,
                for: this.elementName,
                id: this.inputArray.length,
                totalCheckboxes: totalCheckboxes,
                fieldName: this.selectArray.filter(function (element) { return element.text == _this.selectedElement; })[0].label
            });
        }
        if (this.selectedElement == 'select') {
            var totalOptions = [];
            for (var i = 1; i <= this.totalOptions; i++) {
                var label = 'Option' + i;
                totalOptions.push({ label: label, id: i });
            }
            this.inputArray.push({
                type: this.selectedElement,
                for: this.elementName,
                id: this.inputArray.length,
                totalOptions: totalOptions,
                fieldName: this.selectArray.filter(function (element) { return element.text == _this.selectedElement; })[0].label
            });
        }
        else {
            this.inputArray.push({
                placeholder: 'Type your text here',
                type: this.selectedElement,
                for: this.elementName,
                id: this.inputArray.length,
                fieldName: this.selectArray.filter(function (element) { return element.text == _this.selectedElement; })[0].label
            });
        }
    };
    CreateformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createform',
            template: __webpack_require__(/*! ./createform.component.html */ "./src/app/createform/createform.component.html"),
            styles: [__webpack_require__(/*! ./createform.component.css */ "./src/app/createform/createform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateformComponent);
    return CreateformComponent;
}());



/***/ }),

/***/ "./src/app/input-component/input-component.component.css":
/*!***************************************************************!*\
  !*** ./src/app/input-component/input-component.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input-component/input-component.component.html":
/*!****************************************************************!*\
  !*** ./src/app/input-component/input-component.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <ng-container *ngFor=\"let input of data\">\n    <ng-template [ngIf]=\"input.type == 'text'\">\n      <label [for]=\"input.for\">{{input.for}}</label>\n      <input type=\"text\" [name]=\"input.for\" [id]=\"input.for\" [placeholder]=\"input.placeholder\" />\n    </ng-template>\n    <ng-template [ngIf]=\"input.type == 'number'\">\n      <label [for]=\"input.for\">{{input.for}}</label>\n      <input type=\"number\" [name]=\"input.for\" [id]=\"input.for\" [placeholder]=\"input.placeholder\" />\n    </ng-template>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/input-component/input-component.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/input-component/input-component.component.ts ***!
  \**************************************************************/
/*! exports provided: InputComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponentComponent", function() { return InputComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponentComponent = /** @class */ (function () {
    function InputComponentComponent() {
        this.data = [];
    }
    InputComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputComponentComponent.prototype, "data", void 0);
    InputComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-component',
            template: __webpack_require__(/*! ./input-component.component.html */ "./src/app/input-component/input-component.component.html"),
            styles: [__webpack_require__(/*! ./input-component.component.css */ "./src/app/input-component/input-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponentComponent);
    return InputComponentComponent;
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

module.exports = __webpack_require__(/*! /home/blackbox/Desktop/registermyself/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map