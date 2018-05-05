webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_list_component__ = __webpack_require__("./src/app/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__team_detail_component__ = __webpack_require__("./src/app/team-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_create_component__ = __webpack_require__("./src/app/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__team_edit_component__ = __webpack_require__("./src/app/team-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__token_view_component__ = __webpack_require__("./src/app/token-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__employees_open_component__ = __webpack_require__("./src/app/employees-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employees_protected_component__ = __webpack_require__("./src/app/employees-protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guard_auth_service__ = __webpack_require__("./src/app/guard-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'team/detail/:_id', component: __WEBPACK_IMPORTED_MODULE_5__team_detail_component__["a" /* TeamDetailComponent */] },
    { path: 'team/create', component: __WEBPACK_IMPORTED_MODULE_6__team_create_component__["a" /* TeamCreateComponent */] },
    { path: 'team/edit/:_id', component: __WEBPACK_IMPORTED_MODULE_7__team_edit_component__["a" /* TeamEditComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] },
    { path: 'teams', component: __WEBPACK_IMPORTED_MODULE_4__team_list_component__["a" /* TeamListComponent */] },
    { path: 'viewtoken', component: __WEBPACK_IMPORTED_MODULE_8__token_view_component__["a" /* TokenViewComponent */] },
    { path: 'employees/raw', component: __WEBPACK_IMPORTED_MODULE_10__employees_open_component__["a" /* EmployeesOpenComponent */] },
    { path: 'employees/protected', component: __WEBPACK_IMPORTED_MODULE_11__employees_protected_component__["a" /* EmployeesProtectedComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guard_auth_service__["a" /* GuardAuthService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* Set padding to keep content from hitting the edges */\n.app-content {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/* Optional hover pointer change */\ndiv.radio>label:hover, div.radio>label>input:hover, div.checkbox>label:hover, div.checkbox>label>input:hover {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container app-content\">\n  <router-outlet></router-outlet>\n  <footer class=\"row\">\n    <hr>\n    <p>Copyright &copy; 2018 by Ehsan Ekbatani<br>\n    This is my own work, and I have practiced academic honesty.</p>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_component__ = __webpack_require__("./src/app/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_list_component__ = __webpack_require__("./src/app/team-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__team_detail_component__ = __webpack_require__("./src/app/team-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_create_component__ = __webpack_require__("./src/app/team-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_edit_component__ = __webpack_require__("./src/app/team-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__token_view_component__ = __webpack_require__("./src/app/token-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guard_auth_service__ = __webpack_require__("./src/app/guard-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__intercept_token_service__ = __webpack_require__("./src/app/intercept-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__employees_open_component__ = __webpack_require__("./src/app/employees-open.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__employees_protected_component__ = __webpack_require__("./src/app/employees-protected.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__team_list_component__["a" /* TeamListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__team_detail_component__["a" /* TeamDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__team_create_component__["a" /* TeamCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__team_edit_component__["a" /* TeamEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__token_view_component__["a" /* TokenViewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_20__employees_open_component__["a" /* EmployeesOpenComponent */],
                __WEBPACK_IMPORTED_MODULE_21__employees_protected_component__["a" /* EmployeesProtectedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        authScheme: 'JWT'
                    }
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__data_manager_service__["a" /* DataManagerService */], __WEBPACK_IMPORTED_MODULE_17__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guard_auth_service__["a" /* GuardAuthService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__intercept_token_service__["a" /* InterceptTokenService */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    // Initialization
    function AuthService(teamsApi, jwtHelper) {
        this.teamsApi = teamsApi;
        this.jwtHelper = jwtHelper;
        // Properties
        this.url = 'https://floating-island-52688.herokuapp.com/';
    }
    // Methods
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('access_token');
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('access_token');
        if (token) {
            console.log('token exists');
            return true;
        }
        else {
            console.log('no token');
            return false;
        }
    };
    AuthService.prototype.login = function (credentials) {
        // Uncomment if you want to see the passed-in credentials
        // console.log(credentials);
        // Attempt to login
        return this.teamsApi.post(this.url + "login", credentials);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/data-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataManagerService = /** @class */ (function () {
    function DataManagerService(teamsApi) {
        this.teamsApi = teamsApi;
        // Properties
        this.url = 'https://blooming-taiga-18152.herokuapp.com/';
    }
    // Methods
    // In any of the methods below, can use console.log() 
    // ############################################################
    // Team
    DataManagerService.prototype.teamGetAll = function () {
        return this.teamsApi.get(this.url + "teams");
    };
    DataManagerService.prototype.teamGetById = function (id) {
        return this.teamsApi.get(this.url + "team/" + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (wrapper) { return wrapper[0]; }));
    };
    DataManagerService.prototype.teamAdd = function (newItem) {
        return this.teamsApi.post(this.url + "teams", newItem)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (wrapper) { return wrapper.message; }));
    };
    DataManagerService.prototype.teamEdit = function (newItem) {
        return this.teamsApi.put(this.url + "team/" + newItem._id, newItem)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (wrapper) { return wrapper.message; }));
    };
    // ############################################################
    // Project
    DataManagerService.prototype.projectGetAll = function () {
        return this.teamsApi.get(this.url + "projects");
    };
    // ############################################################
    // Employee
    DataManagerService.prototype.employeeGetAll = function () {
        return this.teamsApi.get(this.url + "employees");
    };
    DataManagerService.prototype.employeeGetAllRaw = function () {
        return this.teamsApi.get(this.url + "employees-raw ");
    };
    DataManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataManagerService);
    return DataManagerService;
}());



/***/ }),

/***/ "./src/app/employees-open.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees-open.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <h1>Employees<span style=\"color: #195c08\"><b>(Open)</b></span>(list of {{employeesData.length}} )</h1>\n  <h4>Fetched from the <span style=\"color: #af0a13;background-color: rgba(214, 133, 122, 0.397)\"><b>/employees-raw</b></span> resource </h4>\n  <table class=\"table table-striped\" id=\"example\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"hidden\">Id</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tbody id=\"table-body\">\n      <tr *ngFor=\"let c of employeesData\" (click)=\"selectRow(c)\">\n        <td class=\"hidden\"></td>\n        <td>{{c.FirstName}}</td>\n        <td>{{c.LastName}}</td>\n        <td>{{c.HireDate | date:\"longDate\"}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/employees-open.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesOpenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesOpenComponent = /** @class */ (function () {
    function EmployeesOpenComponent(m, router) {
        this.m = m;
        this.router = router;
        //the sort function for last name
        this.sortemps = function (a, b) {
            if (a.LastName < b.LastName) {
                return -1;
            }
            if (a.LastName > b.LastName) {
                return 1;
            }
            // If you also want to sort on another property,
            // add another code block that's similar to
            // the one above, and use the other property's name
            return 0;
        };
        this.employeesData = [];
    }
    EmployeesOpenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.m.employeeGetAllRaw().subscribe(function (data) { return _this.employeesData = data.sort(_this.sortemps); });
    };
    EmployeesOpenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees-open',
            template: __webpack_require__("./src/app/employees-open.component.html"),
            styles: [__webpack_require__("./src/app/employees-open.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_manager_service__["a" /* DataManagerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EmployeesOpenComponent);
    return EmployeesOpenComponent;
}());



/***/ }),

/***/ "./src/app/employees-protected.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees-protected.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <h1>Employees<span style=\"color: #af0a13\"><b>(Protected)</b></span>(list of {{employeesData.length}} )</h1>\n  <h4>Fetched from the <span style=\"color: #af0a13;background-color: rgba(214, 133, 122, 0.397)\"><b>/employees</b></span> resource </h4>\n  <table class=\"table table-striped\" id=\"example\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th class=\"hidden\">Id</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tbody id=\"table-body\">\n      <tr *ngFor=\"let c of employeesData\" (click)=\"selectRow(c)\">\n        <td class=\"hidden\"></td>\n        <td>{{c.FirstName}}</td>\n        <td>{{c.LastName}}</td>\n        <td>{{c.HireDate | date:\"longDate\"}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/employees-protected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesProtectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesProtectedComponent = /** @class */ (function () {
    function EmployeesProtectedComponent(m, router) {
        this.m = m;
        this.router = router;
        //the sort function for last name
        this.sortemps = function (a, b) {
            if (a.LastName < b.LastName) {
                return -1;
            }
            if (a.LastName > b.LastName) {
                return 1;
            }
            // If you also want to sort on another property,
            // add another code block that's similar to
            // the one above, and use the other property's name
            return 0;
        };
        this.employeesData = [];
    }
    EmployeesProtectedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.m.employeeGetAll().subscribe(function (data) { return _this.employeesData = data.sort(_this.sortemps); });
    };
    EmployeesProtectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees-protected',
            template: __webpack_require__("./src/app/employees-protected.component.html"),
            styles: [__webpack_require__("./src/app/employees-protected.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_manager_service__["a" /* DataManagerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EmployeesProtectedComponent);
    return EmployeesProtectedComponent;
}());



/***/ }),

/***/ "./src/app/guard-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardAuthService = /** @class */ (function () {
    // Initialization
    function GuardAuthService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    // Methods
    GuardAuthService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    GuardAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], GuardAuthService);
    return GuardAuthService;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Angular Project - Team Management Simulation</h1>\n  <h3>Ehsan Ekbatani</h3>\n  <hr>\n  <p>The purpose or objective of this project is to add security features to my Angular app and the backend Teams API <br> by utilizing the JSON Web Tokens library for authentication.\n      <br>The credentials to test the login features are as follows: <br> <br> <br>\n      Username: DEMONMAN <br>\n      Password: High1234<br>\n      </p>\n  <hr>\n  <p>\n    <a href=\"https://sictweb.github.io/bti425/graded-work/assign6\" class=\"btn btn-primary\" target=\"_blank\">Assignment Specifications</a>\n  </p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n</div>"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/intercept-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptTokenService = /** @class */ (function () {
    // Initialization
    function InterceptTokenService(a) {
        this.a = a;
    }
    // Methods
    InterceptTokenService.prototype.intercept = function (request, next) {
        // Clone the existing request, and add the authorization header
        request = request.clone({
            setHeaders: {
                Authorization: "JWT " + this.a.getToken()
            }
        });
        // Pass the request on to the next handler
        return next.handle(request);
    };
    InterceptTokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], InterceptTokenService);
    return InterceptTokenService;
}());



/***/ }),

/***/ "./src/app/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Login</h1>\n  <h4>Enter information, and click the login button</h4>\n  <div class='col-md-8 col-sm-12'>\n\n    <form (ngSubmit)='onSubmit()' #f='ngForm'>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"userName\">User name:</label>\n        <input class=\"form-control\" [(ngModel)]='credentials.userName' id=\"userName\" name=\"userName\" #userName='ngModel' required pattern='.{6,}' maxlength=\"50\"\n          autofocus placeholder=\"6 to 50 characters\">\n        <div *ngIf='userName.invalid && (userName.dirty || userName.touched)' class='alert alert-danger'>\n          <div *ngIf='userName.errors.required'>User name is required, 6 to 50 characters</div>\n          <div *ngIf='userName.errors.pattern'>User name must be at least 6 characters</div>\n        </div>\n        <!-- <div>{{ credentials.userName }}</div> -->\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"password\">Password:</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]='credentials.password' id=\"password\" name=\"password\" #password='ngModel' required pattern='.{6,}' maxlength=\"50\"\n          placeholder=\"6 to 50 characters\">\n        <div *ngIf='password.invalid && (password.dirty || password.touched)' class='alert alert-danger'>\n          <div *ngIf='password.errors.required'>Password is required, 6 to 50 characters</div>\n          <div *ngIf='password.errors.pattern'>Password must be at least 6 characters</div>\n        </div>\n        <!-- <div>{{ credentials.password }}</div> -->\n      </div>\n\n      <a class=\"btn btn-default\" routerLink='/home'>Back to home</a>\n      <!-- <button class=\"btn btn-default\" (click)='logout()'>Logout</button> -->\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]='!f.form.valid'>Login</button>&nbsp;&nbsp;\n      <span *ngIf='loginError.length>0' class=\"text-danger\">{{ loginError }}</span>\n    </form>\n\n  </div>\n</div>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n"

/***/ }),

/***/ "./src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* unused harmony export Credentials */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    // Initialization
    function LoginComponent(router, a, jwtHelper) {
        this.router = router;
        this.a = a;
        this.jwtHelper = jwtHelper;
        this.credentials = new Credentials();
        this.credentials.userName = '';
        this.credentials.password = '';
        this.loginError = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Methods
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.credentials);
        // Complete this method...
        // Clear the existing token
        localStorage.removeItem('access_token');
        // Attempt to login, by calling the login method of the auth service
        // If successful...
        //   Save the token in the browser's local storage
        //   Navigate to a landing/info view (home page?)
        // If not successful...
        //   console.log the error
        //   Write an info message in the loginError property
        this.a.login(this.credentials).subscribe(function (response) {
            localStorage.setItem('access_token', response.token);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error.error);
            _this.loginError = error.error.message;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login.component.html"),
            styles: [__webpack_require__("./src/app/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], LoginComponent);
    return LoginComponent;
}());

// User name and password
var Credentials = /** @class */ (function () {
    function Credentials() {
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <!-- This is the hamburger button -->\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n                aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a routerLink='/home' class=\"navbar-brand\">Angular Project</a>\n        </div>\n        <!-- Menu items -->\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive='active'>\n                    <a routerLink='/teams'>Teams list</a>\n                </li>\n                <li routerLinkActive='active'>\n                    <a routerLink='/team/create'>Create team</a>\n                </li>\n                <!-- Add other menu items here  -->\n                <li routerLinkActive='active'>\n                    <a routerLink='/employees/raw'>Employees(Open)</a>\n                </li>\n                <li routerLinkActive='active'>\n                    <a routerLink='/employees/protected'>Employees(Protected)</a>\n                </li>\n                <li routerLinkActive='active'>\n                    <a routerLink='/login'>Login</a>\n                </li>\n                <li routerLinkActive='active'>\n                    <a routerLink='/viewtoken'>View Token</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>Not found</h3>\n  <hr>\n  <p>The requested resource could not be found.</p>\n  <hr>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n</div>"

/***/ }),

/***/ "./src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/team-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Create new team</h1>\n  <h4>Enter information, and click the create button</h4>\n  <div class='col-md-8 col-sm-12'>\n\n    <form (ngSubmit)='onSubmit()' #f='ngForm'>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Team Name:</label>\n        <input class=\"form-control\" [(ngModel)]='team.TeamName' id=\"name\" name=\"name\" #name='ngModel' required pattern='.{3,}' maxlength=\"50\"\n          autofocus placeholder=\"3 to 50 characters\">\n        <div *ngIf='name.invalid && (name.dirty || name.touched)' class='alert alert-danger'>\n          <div *ngIf='name.errors.required'>Team Name is required, 3 to 50 characters</div>\n          <div *ngIf='name.errors.pattern'>Team Name must be at least 3 characters</div>\n        </div>\n        <!-- <div>{{ team.TeamName }}</div> -->\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamLead\">Team Leader:</label>\n        <select name=\"teamLead\" id=\"teamLead\" #teamLead='ngModel' class=\"form-control\" [(ngModel)]='selectedTeamLead' required>\n          <option *ngIf='teamLead.invalid && teamLead.pristine' value='' disabled>Select a team leader...</option>\n          <option *ngFor='let e of employees' [value]=\"e._id\">{{ e.LastName }}, {{ e.FirstName }}</option>\n        </select>\n        <div *ngIf='teamLead.invalid && teamLead.touched' class='alert alert-danger'>\n          <div *ngIf='teamLead.errors.required'>Must select a team leader</div>\n        </div>\n        <!-- <div>{{ selectedEmployee }}</div> -->\n      </div>\n\n      <!-- This works OK -->\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamMembers\">Team Members:</label>\n        <select name=\"teamMembers\" id=\"teamMembers\" #teamMembers='ngModel' class=\"form-control\" [(ngModel)]='selectedEmployees' multiple\n          size=\"8\" required>\n          <option *ngIf='teamMembers.invalid && teamMembers.pristine' value='' disabled>Select one or more team members...</option>\n          <!-- The ? suppresses error messages -->\n          <option *ngFor='let e of employees' [value]=\"e._id\">{{ e.LastName }}, {{ e.FirstName }} - {{ e.Position?.PositionName }}</option>\n        </select>\n        <div *ngIf='teamMembers.invalid && teamMembers.touched' class='alert alert-danger'>\n          <div *ngIf='teamMembers.errors.required'>Must select one or more team members</div>\n        </div>\n        <!-- <div>\n    <span *ngFor='let e of selectedEmployees'>{{ e }}\n      <br>\n    </span>\n  </div> -->\n      </div>\n\n      <!-- This works OK -->\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamProjects\">Projects:</label>\n        <select name=\"teamProjects\" id=\"teamProjects\" #teamProjects='ngModel' class=\"form-control\" [(ngModel)]='selectedProjects'\n          multiple size=\"5\" required>\n          <option *ngIf='teamProjects.invalid && teamProjects.pristine' value='' disabled>Select one or more projects...</option>\n          <option *ngFor='let p of projects' [value]=\"p._id\">{{ p.ProjectName }} - {{ p.ProjectDescription.substring(0,50) }}...</option>\n        </select>\n        <div *ngIf='teamProjects.invalid && teamProjects.touched' class='alert alert-danger'>\n          <div *ngIf='teamProjects.errors.required'>Must select one or more projects</div>\n        </div>\n        <!-- <div>\n          <span *ngFor='let p of selectedProjects'>{{ p }}\n            <br>\n          </span>\n        </div> -->\n      </div>\n\n      <a class=\"btn btn-default\" routerLink='/teams'>Back to list</a>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]='!f.form.valid'>Create</button>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/team-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vms__ = __webpack_require__("./src/app/vms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeamCreateComponent = /** @class */ (function () {
    function TeamCreateComponent(router, m) {
        this.router = router;
        this.m = m;
        this.team = new __WEBPACK_IMPORTED_MODULE_1__vms__["b" /* Team */]();
        // To prevent console errors during rendering
        this.team.TeamName = '';
        this.team.TeamLead = new __WEBPACK_IMPORTED_MODULE_1__vms__["a" /* Employee */]();
        this.team.Projects = [];
        this.team.Employees = [];
        this.employees = [];
        this.projects = [];
        this.selectedTeamLead = '';
        this.selectedEmployees = [];
        this.selectedProjects = [];
    }
    TeamCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Sort function
        var cmp = function (a, b) {
            if (a > b)
                return +1;
            if (a < b)
                return -1;
            return 0;
        };
        // Get employees
        // c is "collection"
        this.m.employeeGetAll().subscribe(function (c) { return _this.employees = c.sort(function (a, b) { return cmp(a.LastName, b.LastName) || cmp(a.FirstName, b.FirstName); }); });
        // Get projects
        // c is "collection"
        this.m.projectGetAll().subscribe(function (c) { return _this.projects = c.sort(function (a, b) { return cmp(a.ProjectName, b.ProjectName); }); });
    };
    // Methods
    TeamCreateComponent.prototype.onSubmit = function () {
        // Assemble the team object
        var _this = this;
        this.team.TeamLead = this.employees.find(function (e) { return e._id == _this.selectedTeamLead; });
        this.selectedEmployees.forEach(function (se) {
            var teamMember = _this.employees.find(function (e) { return e._id == se; });
            _this.team.Employees.push(teamMember);
        });
        this.selectedProjects.forEach(function (sp) {
            var teamProject = _this.projects.find(function (p) { return p._id == sp; });
            _this.team.Projects.push(teamProject);
        });
        // Attempt to add the team
        console.log(this.team);
        this.m.teamAdd(this.team).subscribe(function (res) {
            // Show the response from the web service
            console.log(res);
            // Extract the team identifier
            var teamId = res;
            teamId = teamId.replace('Team ', '');
            teamId = teamId.replace(' added successfully', '');
            console.log(teamId);
            // Navigate to the team detail
            _this.router.navigate(['/team/detail', teamId]);
        });
    };
    TeamCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-create',
            template: __webpack_require__("./src/app/team-create.component.html"),
            styles: [__webpack_require__("./src/app/team-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_manager_service__["a" /* DataManagerService */]])
    ], TeamCreateComponent);
    return TeamCreateComponent;
}());



/***/ }),

/***/ "./src/app/team-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Team detail - {{ t.TeamName }}</h1>\n  <h4>View this team</h4>\n  <dl class=\"dl-horizontal\">\n    <dt>Team name</dt>\n    <dd>{{ t.TeamName }}</dd>\n    <dt>Name of team leader</dt>\n    <dd>{{ t.TeamLead.FirstName }} {{ t.TeamLead.LastName }}</dd>\n    <dt>Projects ({{ t.Projects.length }})</dt>\n    <dd><span *ngFor='let p of t.Projects'>{{ p.ProjectName }}<br></span></dd>\n    <dt>Team members ({{ t.Employees.length }})</dt>\n    <dd><span *ngFor='let e of t.Employees'>{{ e.FirstName }} {{ e.LastName }}<br></span></dd>\n  </dl>\n  <button class=\"btn btn-default\" (click)='back()'>Back to list</button>\n  <button class=\"btn btn-warning\" (click)='edit(t._id)'>Edit team</button>\n</div>"

/***/ }),

/***/ "./src/app/team-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vms__ = __webpack_require__("./src/app/vms.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamDetailComponent = /** @class */ (function () {
    function TeamDetailComponent(route, router, m) {
        this.route = route;
        this.router = router;
        this.m = m;
        // This prevents a data binding error
        this.t = new __WEBPACK_IMPORTED_MODULE_3__vms__["b" /* Team */]();
        this.t.TeamLead = new __WEBPACK_IMPORTED_MODULE_3__vms__["a" /* Employee */]();
        this.t.Projects = [];
        this.t.Employees = [];
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Extract the parameter that we need
        var id = this.route.snapshot.params['_id'];
        // Get team
        // o is "object"
        this.m.teamGetById(id).subscribe(function (o) { return _this.t = o; });
    };
    // Methods...
    TeamDetailComponent.prototype.back = function () {
        this.router.navigate(["/teams"]);
    };
    TeamDetailComponent.prototype.edit = function (id) {
        this.router.navigate(['/team/edit', id]);
    };
    TeamDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-detail',
            template: __webpack_require__("./src/app/team-detail.component.html"),
            styles: [__webpack_require__("./src/app/team-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__data_manager_service__["a" /* DataManagerService */]])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());



/***/ }),

/***/ "./src/app/team-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Edit team {{ team.TeamName }}</h1>\n  <h4>Enter information, and click the update button</h4>\n  <div class='col-md-8 col-sm-12'>\n\n    <form (ngSubmit)='onSubmit()' #f='ngForm'>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Team Name:</label>\n        <input class=\"form-control\" [(ngModel)]='team.TeamName' id=\"name\" name=\"name\" #name='ngModel' required pattern='.{3,}' maxlength=\"50\"\n          autofocus placeholder=\"3 to 50 characters\">\n        <div *ngIf='name.invalid && (name.dirty || name.touched)' class='alert alert-danger'>\n          <div *ngIf='name.errors.required'>Team Name is required, 3 to 50 characters</div>\n          <div *ngIf='name.errors.pattern'>Team Name must be at least 3 characters</div>\n        </div>\n        <!-- <div>{{ team.TeamName }}</div> -->\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamLead\">Team Leader:</label>\n        <select name=\"teamLead\" id=\"teamLead\" #teamLead='ngModel' class=\"form-control\" [(ngModel)]='selectedEmployee' required>\n          <option *ngIf='teamLead.invalid && teamLead.pristine' value='' disabled>Select a team leader...</option>\n          <option *ngFor='let e of employees' [value]=\"e._id\">{{ e.LastName }}, {{ e.FirstName }}</option>\n          <!-- [selected]='isTeamLeadSelected(e._id)' -->\n        </select>\n        <div *ngIf='teamLead.invalid && teamLead.touched' class='alert alert-danger'>\n          <div *ngIf='teamLead.errors.required'>Must select a team leader</div>\n        </div>\n        <!-- <div>{{ selectedEmployee }}</div> -->\n      </div>\n\n      <!-- This works OK -->\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamMembers\">Team Members:</label>\n        <select name=\"teamMembers\" id=\"teamMembers\" #teamMembers='ngModel' class=\"form-control\" [(ngModel)]='selectedEmployees' multiple\n          size=\"8\" required>\n          <option *ngIf='teamMembers.invalid && teamMembers.pristine' value='' disabled>Select one or more team members...</option>\n          <!-- The ? suppresses error messages -->\n          <option *ngFor='let e of employees' [value]=\"e._id\">{{ e.LastName }}, {{ e.FirstName }} - {{ e.Position?.PositionName }}</option>\n        </select>\n        <div *ngIf='teamMembers.invalid && teamMembers.touched' class='alert alert-danger'>\n          <div *ngIf='teamMembers.errors.required'>Must select one or more team members</div>\n        </div>\n        <!-- <div>\n          <span *ngFor='let e of selectedEmployees'>{{ e }}\n            <br>\n          </span>\n        </div> -->\n      </div>\n\n      <!-- This works OK -->\n      <div class=\"form-group\">\n        <label class=\"control-label\" for=\"teamProjects\">Projects:</label>\n        <select name=\"teamProjects\" id=\"teamProjects\" #teamProjects='ngModel' class=\"form-control\" [(ngModel)]='selectedProjects'\n          multiple size=\"5\" required>\n          <option *ngIf='teamProjects.invalid && teamProjects.pristine' value='' disabled>Select one or more projects...</option>\n          <option *ngFor='let p of projects' [value]=\"p._id\">{{ p.ProjectName }} - {{ p.ProjectDescription.substring(0,50) }}...</option>\n        </select>\n        <div *ngIf='teamProjects.invalid && teamProjects.touched' class='alert alert-danger'>\n          <div *ngIf='teamProjects.errors.required'>Must select one or more projects</div>\n        </div>\n        <!-- <div>\n          <span *ngFor='let p of selectedProjects'>{{ p }}\n            <br>\n          </span>\n        </div> -->\n      </div>\n\n      <a class=\"btn btn-default\" routerLink='/teams'>Back to list</a>\n      <a class=\"btn btn-default\" routerLink='/team/detail/{{ team._id }}'>Back to details</a>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]='!f.form.valid'>Update</button>\n    </form>\n\n    <!-- <p>Team edit message: {{ teamEditMessage }}</p> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/team-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vms__ = __webpack_require__("./src/app/vms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamEditComponent = /** @class */ (function () {
    function TeamEditComponent(route, router, m) {
        this.route = route;
        this.router = router;
        this.m = m;
        this.team = new __WEBPACK_IMPORTED_MODULE_1__vms__["b" /* Team */]();
        // Temporary
        this.team.TeamName = '';
        this.team.TeamLead = new __WEBPACK_IMPORTED_MODULE_1__vms__["a" /* Employee */]();
        this.team.Projects = [];
        this.team.Employees = [];
        this.employees = [];
        this.selectedEmployee = '';
        this.selectedEmployees = [];
        this.projects = [];
        this.selectedProjects = [];
        this.teamEditMessage = '';
    }
    TeamEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Extract the parameter that we need
        var id = this.route.snapshot.params['_id'];
        // Get team
        // o is "object"
        this.m.teamGetById(id).subscribe(function (o) {
            // Set the initial values
            _this.team = o;
            // Wow, the Angular DOM manager just makes this happen, no markup required
            _this.selectedEmployee = _this.team.TeamLead._id;
            // Use the map() method to extract a single property
            _this.selectedEmployees = _this.team.Employees.map(function (e) { return e._id; });
            _this.selectedProjects = _this.team.Projects.map(function (p) { return p._id; });
        });
        // Sort function
        var cmp = function (a, b) {
            if (a > b)
                return +1;
            if (a < b)
                return -1;
            return 0;
        };
        // Get employees
        // c is "collection"
        this.m.employeeGetAll().subscribe(function (c) { return _this.employees = c.sort(function (a, b) { return cmp(a.LastName, b.LastName) || cmp(a.FirstName, b.FirstName); }); });
        // Get projects
        // c is "collection"
        // this.m.projectGetAll().subscribe(c => this.projects = c.sort(function (a, b) { return cmp(a.ProjectName, b.ProjectName) }));
        this.m.projectGetAll().subscribe(function (c) { return _this.projects = c; });
    };
    // Methods
    TeamEditComponent.prototype.isTeamLeadSelected = function (id) {
        return (this.team.TeamLead._id == id) ? true : false;
    };
    TeamEditComponent.prototype.onSubmit = function () {
        // Assemble the team object
        var _this = this;
        this.team.TeamLead = this.employees.find(function (e) { return e._id == _this.selectedEmployee; });
        // Clear the existing collection first
        this.team.Employees = [];
        this.selectedEmployees.forEach(function (se) {
            var teamMember = _this.employees.find(function (e) { return e._id == se; });
            _this.team.Employees.push(teamMember);
        });
        // Clear the existing collection first
        this.team.Projects = [];
        this.selectedProjects.forEach(function (sp) {
            var teamProject = _this.projects.find(function (p) { return p._id == sp; });
            _this.team.Projects.push(teamProject);
        });
        // Attempt to update the team
        console.log(this.team);
        this.m.teamEdit(this.team)
            .subscribe(function (res) {
            _this.teamEditMessage = res;
            _this.router.navigate(['/team/detail', _this.team._id]);
        });
    };
    TeamEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-edit',
            template: __webpack_require__("./src/app/team-edit.component.html"),
            styles: [__webpack_require__("./src/app/team-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__data_manager_service__["a" /* DataManagerService */]])
    ], TeamEditComponent);
    return TeamEditComponent;
}());



/***/ }),

/***/ "./src/app/team-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/team-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>Teams (list of {{ teams.length }})</h1>\n  <h4>Click a row to view the team details</h4>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n      <tr>\n        <th>Team name</th>\n        <th>Name of team leader</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of teams\" (click)=\"selectRow(t)\">\n        <td>{{ t.TeamName }}</td>\n        <td>{{ t.TeamLead.FirstName }} {{ t.TeamLead.LastName }} ({{ t.TeamLead.Position.PositionName }})</td>\n      </tr>\n    </tbody>\n  </table>\n  <p *ngIf='teams.length==0'>Fetching data, please wait...</p>\n</div>"

/***/ }),

/***/ "./src/app/team-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_manager_service__ = __webpack_require__("./src/app/data-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamListComponent = /** @class */ (function () {
    function TeamListComponent(router, m) {
        this.router = router;
        this.m = m;
        this.teams = [];
    }
    TeamListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Sort function
        var cmp = function (a, b) {
            if (a > b)
                return +1;
            if (a < b)
                return -1;
            return 0;
        };
        // Get teams
        // c is "collection"
        this.m.teamGetAll()
            .subscribe(function (c) { return _this.teams = c.sort(function (a, b) { return cmp(a.TeamName, b.TeamName); }); });
    };
    // Methods
    TeamListComponent.prototype.selectRow = function (o) {
        this.selected = o;
        // Temporary, comment out or remove after testing...
        console.log(this.selected);
        this.router.navigate(['/team/detail', this.selected._id]);
    };
    TeamListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-list',
            template: __webpack_require__("./src/app/team-list.component.html"),
            styles: [__webpack_require__("./src/app/team-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__data_manager_service__["a" /* DataManagerService */]])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "./src/app/token-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/token-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1>View token</h1>\n  <h4>Fetched from local storage</h4>\n  <hr>\n  <dl class=\"dl-horizontal\">\n    <dt>Raw string value</dt>\n    <dd style=\"overflow-wrap:break-word;\">{{ tokenRaw }}</dd>\n    <dt></dt><dd>&nbsp;</dd>\n    <dt>Decoded payload</dt>\n    <dd>{{ tokenDecoded | json }}</dd>\n    <dt></dt><dd>&nbsp;</dd>\n    <dt>User name</dt>\n    <dd>{{ tokenDecoded.userName }}</dd>\n    <dt></dt><dd>&nbsp;</dd>\n    <dt>Full name</dt>\n    <dd>{{ tokenDecoded.fullName }}</dd>\n    <dt></dt><dd>&nbsp;</dd>\n    <dt>Role</dt>\n    <dd>{{ tokenDecoded.role }}</dd>\n    <dt></dt><dd>&nbsp;</dd>\n    <dt>Issued date-and-time</dt>\n    <dd>{{ tokenIssuedTimestamp }}</dd>\n  </dl>\n  <hr>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n  <p>&nbsp;</p>\n</div>"

/***/ }),

/***/ "./src/app/token-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenViewComponent = /** @class */ (function () {
    // Initialization
    function TokenViewComponent(jwtHelper) {
        this.jwtHelper = jwtHelper;
        // Fetch the token from the browser's local storage
        this.tokenRaw = localStorage.getItem('access_token');
        // If it exists, decode it, otherwise, create placeholder values for the view
        if (this.tokenRaw) {
            this.tokenDecoded = this.jwtHelper.decodeToken(this.tokenRaw);
            this.tokenIssuedTimestamp = new Date(this.tokenDecoded.iat * 1000);
        }
        else {
            this.tokenRaw = '(no token)';
            this.tokenDecoded = { userName: '', fullName: '', role: '' };
            this.tokenIssuedTimestamp = '';
        }
    }
    TokenViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-token-view',
            template: __webpack_require__("./src/app/token-view.component.html"),
            styles: [__webpack_require__("./src/app/token-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], TokenViewComponent);
    return TokenViewComponent;
}());



/***/ }),

/***/ "./src/app/vms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
/* unused harmony export Project */
/* unused harmony export Position */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Team; });
/* unused harmony export UserAccount */
// View models for all entities
// Generated by http://json2ts.com/
// after pasting results from my Teams API
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());

var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());

var Position = /** @class */ (function () {
    function Position() {
    }
    return Position;
}());

var Team = /** @class */ (function () {
    function Team() {
    }
    return Team;
}());

// User account
var UserAccount = /** @class */ (function () {
    function UserAccount() {
    }
    return UserAccount;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map