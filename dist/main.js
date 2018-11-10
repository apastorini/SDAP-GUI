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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-navbar> </app-navbar>\n  <div class=\"container main-container\">\n    <div>\n       <router-outlet></router-outlet>\n    </div>\n  </div>\n  <app-footer> </app-footer>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initGapi, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGapi", function() { return initGapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_files_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/files/files.component */ "./src/app/components/files/files.component.ts");
/* harmony import */ var _components_password_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/password/password.component */ "./src/app/components/password/password.component.ts");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_analyze_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/analyze.service */ "./src/app/services/analyze.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _auth_storageService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/storageService */ "./src/app/auth/storageService.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/analyze/analyze.component */ "./src/app/components/analyze/analyze.component.ts");
/* harmony import */ var _validators_unique_email_validator_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./validators/unique-email-validator.directive */ "./src/app/validators/unique-email-validator.directive.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _components_google_drive_google_drive_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/google-drive/google-drive.component */ "./src/app/components/google-drive/google-drive.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
/* harmony import */ var _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../infrastructure/sessions/gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _infrastructure_repositories_app_repository__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../infrastructure/repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");
/* harmony import */ var _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../infrastructure/repositories/file.repository */ "./src/infrastructure/repositories/file.repository.ts");
/* harmony import */ var _infrastructure_repositories_user_repository__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../infrastructure/repositories/user.repository */ "./src/infrastructure/repositories/user.repository.ts");
/* harmony import */ var _infrastructure_app_context__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../infrastructure/app.context */ "./src/infrastructure/app.context.ts");
/* harmony import */ var _infrastructure_sessions_app_session__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../infrastructure/sessions/app.session */ "./src/infrastructure/sessions/app.session.ts");
/* harmony import */ var _infrastructure_sessions_user_session__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../infrastructure/sessions/user.session */ "./src/infrastructure/sessions/user.session.ts");
/* harmony import */ var _infrastructure_sessions_file_session__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../infrastructure/sessions/file.session */ "./src/infrastructure/sessions/file.session.ts");
/* harmony import */ var _infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../infrastructure/sessions/breadcrumb.session */ "./src/infrastructure/sessions/breadcrumb.session.ts");
/* harmony import */ var _components_dialogoneinput_dialogoneinput_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/dialogoneinput/dialogoneinput.component */ "./src/app/components/dialogoneinput/dialogoneinput.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "./src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_breadcrumb_breadcrumbitem_breadcrumbitem_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumbitem/breadcrumbitem.component */ "./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modulos






//import { FileSelectDirective } from 'ng2-file-upload';
// import { FileUploadModule} from 'ng2-file-upload';

//Components








//import { WebmasterValidationComponent } from './webmaster-validation/webmaster-validation.component';
//import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
//Servicios







//import { DriveResource } from './services/drive-resource.service';
//Routing
























function initGapi(gapiSession) {
    return function () { return gapiSession.initClient(); };
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_files_files_component__WEBPACK_IMPORTED_MODULE_9__["FilesComponent"],
                _components_password_password_component__WEBPACK_IMPORTED_MODULE_10__["PasswordComponent"],
                _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_11__["CreateUserComponent"],
                _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _components_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_24__["AnalyzeComponent"],
                _validators_unique_email_validator_directive__WEBPACK_IMPORTED_MODULE_25__["UniqueEmailValidatorDirective"],
                _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_26__["ReportsComponent"],
                _components_google_drive_google_drive_component__WEBPACK_IMPORTED_MODULE_27__["GoogleDriveComponent"],
                _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_28__["EditProfileComponent"],
                _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_29__["ModalComponent"],
                _components_dialogoneinput_dialogoneinput_component__WEBPACK_IMPORTED_MODULE_39__["DialogOneInputComponent"],
                _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_40__["BreadCrumbComponent"],
                _components_breadcrumb_breadcrumbitem_breadcrumbitem_component__WEBPACK_IMPORTED_MODULE_41__["BreadCrumbItemComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_43__["PageNotFoundComponent"],
                _components_help_help_component__WEBPACK_IMPORTED_MODULE_44__["HelpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_21__["APP_ROUTING"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_42__["MatListModule"],
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_14__["LoginService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _services_file_service__WEBPACK_IMPORTED_MODULE_18__["FileService"],
                _services_analyze_service__WEBPACK_IMPORTED_MODULE_16__["AnalyzeService"],
                _auth_storageService__WEBPACK_IMPORTED_MODULE_19__["StorageService"],
                _services_home_service__WEBPACK_IMPORTED_MODULE_20__["HomeService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"], useFactory: initGapi, deps: [_infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_30__["GapiSession"]], multi: true },
                _infrastructure_app_context__WEBPACK_IMPORTED_MODULE_34__["AppContext"],
                _infrastructure_sessions_app_session__WEBPACK_IMPORTED_MODULE_35__["AppSession"],
                _infrastructure_sessions_file_session__WEBPACK_IMPORTED_MODULE_37__["FileSession"],
                _infrastructure_sessions_gapi_session__WEBPACK_IMPORTED_MODULE_30__["GapiSession"],
                _infrastructure_sessions_user_session__WEBPACK_IMPORTED_MODULE_36__["UserSession"],
                _infrastructure_sessions_breadcrumb_session__WEBPACK_IMPORTED_MODULE_38__["BreadCrumbSession"],
                _infrastructure_repositories_app_repository__WEBPACK_IMPORTED_MODULE_31__["AppRepository"],
                _infrastructure_repositories_file_repository__WEBPACK_IMPORTED_MODULE_32__["FileRepository"],
                _infrastructure_repositories_user_repository__WEBPACK_IMPORTED_MODULE_33__["UserRepository"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_29__["ModalComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_files_files_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/files/files.component */ "./src/app/components/files/files.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_password_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password/password.component */ "./src/app/components/password/password.component.ts");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-user/edit-user.component */ "./src/app/components/edit-user/edit-user.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/analyze/analyze.component */ "./src/app/components/analyze/analyze.component.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_google_drive_google_drive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/google-drive/google-drive.component */ "./src/app/components/google-drive/google-drive.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/help/help.component */ "./src/app/components/help/help.component.ts");














var APP_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'files', component: _components_files_files_component__WEBPACK_IMPORTED_MODULE_1__["FilesComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'password', component: _components_password_password_component__WEBPACK_IMPORTED_MODULE_3__["PasswordComponent"] },
    { path: 'analyze', component: _components_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_8__["AnalyzeComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'create-user', component: _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]], data: {
            roles: {
                only: ['1'],
                redirectTo: 'password'
            }
        } },
    { path: 'edit-user', component: _components_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'edit-profile', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'reports', component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'google-drive', component: _components_google_drive_google_drive_component__WEBPACK_IMPORTED_MODULE_11__["GoogleDriveComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'help', component: _components_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    //{ path: '**', pathMatch: 'full', redirectTo: '' },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] },
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn // {1}
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (l) {
            console.log("IS LOGED IN!  " + l);
            if (!l) {
                _this.router.navigate(['/login']); // {4}
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storageService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storageService */ "./src/app/auth/storageService.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import {Headers, RequestOptions} from 'angular2/http';
var AuthService = /** @class */ (function () {
    function AuthService(router, http, storageService, modalService) {
        this.router = router;
        this.http = http;
        this.storageService = storageService;
        this.modalService = modalService;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false); // {1}
        this.loginUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + 'loginController/login';
        this.logoutUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + 'loginController/logout/';
        this.secureEchoUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + 'Sdp/api/secure/echo/andrei';
        this.isLoggedInUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].BASE_URL + 'loginController/isLoggedIn';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            console.log("TOKEN:  " + this.getToken());
            if (this.getToken()) {
                this.loggedIn.next(true);
            }
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var email = sessionStorage.getItem('email');
        var token = sessionStorage.getItem('token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        console.log('headers' + headers.get('Content-Type'));
        this.http.post(this.logoutUrl, { email: email, token: token }, { headers: headers })
            .subscribe(function (res) {
            sessionStorage.setItem('token', '');
            sessionStorage.setItem('email', '');
            sessionStorage.setItem('role', '');
            _this.loggedIn.next(false);
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.login = function (login) {
        var _this = this;
        console.log("User and password: " + login);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        this.http.post(this.loginUrl, login, { headers: headers })
            .subscribe(function (res) {
            console.log(JSON.stringify("jjjjjjj" + JSON.stringify(res)));
            if (JSON.stringify(res['code']) == "0" || JSON.stringify(res['code']) == "2") {
                console.log('SESION    ' + JSON.stringify(res['result']));
                _this.storageService.setItem('token', res['result'][0].token);
                _this.storageService.setItem('email', res['result'][0].email);
                _this.storageService.setItem('role', res['result'][0].roles[0].id);
                _this.loggedIn.next(true);
                _this.router.navigate(['/home']);
            }
            else {
                _this.openModal(res['message'], "", "error", "error");
            }
        });
    };
    AuthService.prototype.openModal = function (title, text, type, action) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.type = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
            if (result == 'edit') {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _storageService__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/storageService.ts":
/*!****************************************!*\
  !*** ./src/app/auth/storageService.ts ***!
  \****************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.storageSub = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    StorageService.prototype.watchStorage = function () {
        return this.storageSub.asObservable();
    };
    StorageService.prototype.setItem = function (key, data) {
        sessionStorage.setItem(key, data);
        this.storageSub.next(data);
    };
    StorageService.prototype.removeItem = function (key) {
        sessionStorage.removeItem(key);
        this.storageSub.next(null);
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/components/analyze/analyze.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/analyze/analyze.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Analizar</h1>\n<hr>\n<br>\n<div class=\"animated fast fadeIn\">\n  <span><strong>1 - Elegir archivo a analizar</strong></span>\n  <br><br>\n  <select (change)='onOptionSelected($event)'>\n    <option value = \"-1\" selected=\"selected\">Seleccionar Archivo</option>\n    <option *ngFor = \"let file of fileList\" [value] = \"file.idFile\" >{{file.name}}</option>\n  </select>\n  <br><br>\n  <span><strong>2 - Elegir archivos para comparar</strong></span>\n  <br><br><br>\n  <div class=\"jumbotron\">\n    <h3>Tus Archivos</h3>\n      <p class=\"lead\"></p>\n    <hr>\n    <div *ngIf=\"!fileList\" class=\"\">\n      <img src=\"assets/img/error.png\" class=\"img-modal img-fluid pull-xs-left\" alt=\"...\"><span><strong> No hay archivos cargados en el sistema</strong></span>\n    </div>\n    <div *ngIf=\"fileList\" class=\"table-wrapper-scroll-y\">\n      <table class=\"table table-striped table-dark\" style=\"border-color:white;\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Extension</th>\n            <th scope=\"col\">Tamaño</th>\n            <th scope=\"col\">Seleccionar</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let f of fileList\">\n            <th scope=\"row\">#</th>\n            <td>{{f.name}}</td>\n            <td>{{f.extension}}</td>\n            <td>{{f.size}}</td>\n            <td><input type=\"checkbox\" class=\"checkbox\" (change)=\"onChange(f.idFile, $event.target.checked)\"name=\"{{ f.name }}\" type=\"checkbox\" id=\"{{f.idFile}}\"/></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n<div class=\"jumbotron\">\n    <h3>Archivos compartidos</h3>\n  <hr>\n\n  <div *ngIf=\"!sharedFileList\" class=\"\">\n    <img src=\"assets/img/error.png\" class=\"img-modal img-fluid pull-xs-left\" alt=\"...\"><span><strong> No hay archivos compartidos en el sistema</strong></span>\n  </div>\n\n  <div *ngIf=\"sharedFileList\" class=\"table-wrapper-scroll-y\">\n\n    <table class=\"table table-striped table-dark\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Extension</th>\n          <th scope=\"col\">Tamaño</th>\n          <th scope=\"col\">Seleccionar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let f of sharedFileList\">\n          <th scope=\"row\">#</th>\n          <td>{{f.name}}</td>\n          <td>{{f.extension}}</td>\n          <td>{{f.size}}</td>\n          <td><input type=\"checkbox\"  (change)=\"onChange(f.idFile, $event.target.checked)\"name=\"{{ f.name }}\" type=\"checkbox\" id=\"{{f.idFile}}\"/></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  </div>\n\n  <form action=\"action_page.php\">\n      <div class=\"container\">\n\n        <button type=\"submit\" [disabled]=\"buttonDisabled\" class=\"btn btn-outline-primary btn-block form-control\" (click)=\"onSubmit()\">Analizar</button>\n\n        <br>\n      </div>\n  </form>\n</div>\n\n<br>\n"

/***/ }),

/***/ "./src/app/components/analyze/analyze.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/analyze/analyze.component.ts ***!
  \*********************************************************/
/*! exports provided: AnalyzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeComponent", function() { return AnalyzeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _services_analyze_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/analyze.service */ "./src/app/services/analyze.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AnalyzeComponent = /** @class */ (function () {
    function AnalyzeComponent(analyzeService, fileService, http, router, fb, authService, modalService) {
        this.analyzeService = analyzeService;
        this.fileService = fileService;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.fileList = false;
        this.filesToCompare = [];
        this.sharedFileList = false;
        this.buttonDisabled = false;
    }
    AnalyzeComponent.prototype.doAnalysis = function () {
        var _this = this;
        this.analyzeService.iniciarAnalisis(this.fileToAnalize, this.filesToCompare).subscribe(function (res) {
            console.log("ANALISIS   " + JSON.stringify(res));
            _this.openModal("Analisis Iniciado", "Podes ver el estado de este y otros analisis en la pestaña Reportes.", "success", "success");
        });
    };
    AnalyzeComponent.prototype.onSubmit = function () {
        console.log("polo   " + this.fileToAnalize);
        if (this.fileToAnalize == "-1") {
            this.openModal("No se inició el analisis", "Seleccione documento a analizar y vuelva a intentarlo.", "error", "error");
        }
        else {
            console.log("polo 2  " + this.filesToCompare.length);
            if (this.filesToCompare.length == 0) {
                this.openModal("No se inició el analisis", "Seleccione 1 o mas archivos de la lista para comparar y vuelva a intentarlo.", "error", "error");
            }
            else {
                this.openModal("¿Esta seguro de querer iniciar el analisis?", "Haga click en 'Confirmar' para iniciar el analisis o en 'Cerrar' para cancelar la accion", "confirm", "analyze");
            }
        }
    };
    AnalyzeComponent.prototype.ngOnInit = function () {
        this.fileToAnalize = '-1';
        this.getAllUserFiles();
        this.getSharedFiles();
    };
    AnalyzeComponent.prototype.onChange = function (id, isChecked) {
        if (isChecked) {
            this.filesToCompare.push(id);
        }
        else {
            var index = this.filesToCompare.indexOf(id);
            this.filesToCompare.splice(index, 1);
        }
        console.log(this.filesToCompare);
    };
    AnalyzeComponent.prototype.onOptionSelected = function (event) {
        console.log(event.target.value);
        this.fileToAnalize = event.target.value;
    };
    AnalyzeComponent.prototype.getAllUserFiles = function () {
        var _this = this;
        this.fileService.userFilesList(sessionStorage.getItem('email'), sessionStorage.getItem('token'))
            .subscribe(function (res) {
            if (JSON.stringify(res['result']) != "[]") {
                _this.fileList = res['result'];
            }
            console.log("lista files " + JSON.stringify(_this.fileList));
        });
    };
    AnalyzeComponent.prototype.getSharedFiles = function () {
        var _this = this;
        this.fileService.getSharedFiles(sessionStorage.getItem('email'), sessionStorage.getItem('token'))
            .subscribe(function (res) {
            if (JSON.stringify(res['result']) != "[]") {
                _this.sharedFileList = res['result'];
            }
            console.log("lista shared" + _this.sharedFileList);
        });
    };
    AnalyzeComponent.prototype.openModal = function (title, text, type, action) {
        var _this = this;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.action = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
            if (result == "analyze") {
                _this.doAnalysis();
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    AnalyzeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analyze',
            template: __webpack_require__(/*! ./analyze.component.html */ "./src/app/components/analyze/analyze.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_analyze_service__WEBPACK_IMPORTED_MODULE_2__["AnalyzeService"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], AnalyzeComponent);
    return AnalyzeComponent;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span class=\"breadcrumbitemcontainer\" *ngFor=\"let item of items;let i=index\">\n        <!-- <breadcrumbitem (onSelectedOption)=\"onSelectedOptionHandler($event)\" (onSelected)=\"onSelectedHandler($event)\"\n            [model]=\"item\"></breadcrumbitem> -->\n        <mat-icon *ngIf=\"i !== (items.length -1)\">keyboard_arrow_right</mat-icon>\n    </span>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumb.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadCrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbComponent", function() { return BreadCrumbComponent; });
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

var BreadCrumbComponent = /** @class */ (function () {
    function BreadCrumbComponent() {
        this.onSelectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectedOptionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BreadCrumbComponent.prototype.onSelectedHandler = function ($event) {
        this.onSelectedItemChanged.emit($event);
    };
    BreadCrumbComponent.prototype.onSelectedOptionHandler = function ($event) {
        this.onSelectedOptionChanged.emit($event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BreadCrumbComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadCrumbComponent.prototype, "onSelectedItemChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadCrumbComponent.prototype, "onSelectedOptionChanged", void 0);
    BreadCrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "breadcrumb",
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/breadcrumb/breadcrumb.component.html"),
            styleUrls: []
        })
    ], BreadCrumbComponent);
    return BreadCrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"!model.ShowOption\">\n  <button mat-button (click)=\"select()\">{{model.Name}}</button>\n</span>\n<span *ngIf=\"model.ShowOption\">\n  <button mat-button [matMenuTriggerFor]=\"menu\">{{model.Name}}</button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item (click)=\"newFolder()\">\n      <mat-icon class=\"icon\">create_new_folder</mat-icon>\n      New folder\n    </button>\n\n    <span class=\"uploadFilesWrapper\">\n      <button mat-menu-item>\n        <mat-icon class=\"icon\">cloud_upload</mat-icon>\n        Upload files\n      </button>\n      <input (change)=\"uploadFiles($event)\" multiple type=\"file\" />\n    </span>\n\n  </mat-menu>\n</span>\n"

/***/ }),

/***/ "./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BreadCrumbItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbItemComponent", function() { return BreadCrumbItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_breadCrumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/breadCrumbItem */ "./src/model/breadCrumbItem.ts");
/* harmony import */ var _model_breadCrumbItemOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../model/breadCrumbItemOption */ "./src/model/breadCrumbItemOption.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadCrumbItemComponent = /** @class */ (function () {
    function BreadCrumbItemComponent() {
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectedOption = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BreadCrumbItemComponent.prototype.newFolder = function () {
        this.onSelectedOption.emit({ Name: "New folder", Option: _model_breadCrumbItemOption__WEBPACK_IMPORTED_MODULE_2__["OPTION_NEW_FOLDER"], Data: null });
    };
    BreadCrumbItemComponent.prototype.select = function () {
        this.onSelected.emit(this.model);
    };
    BreadCrumbItemComponent.prototype.uploadFiles = function ($event) {
        this.onSelectedOption.emit({ Name: "Upload files", Option: _model_breadCrumbItemOption__WEBPACK_IMPORTED_MODULE_2__["OPTION_UPLOAD_FILES"], Data: $event.target.files });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_breadCrumbItem__WEBPACK_IMPORTED_MODULE_1__["BreadCrumbItem"])
    ], BreadCrumbItemComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadCrumbItemComponent.prototype, "onSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BreadCrumbItemComponent.prototype, "onSelectedOption", void 0);
    BreadCrumbItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "breadcrumbitem",
            template: __webpack_require__(/*! ./breadcrumbitem.component.html */ "./src/app/components/breadcrumb/breadcrumbitem/breadcrumbitem.component.html"),
            styleUrls: []
        })
    ], BreadCrumbItemComponent);
    return BreadCrumbItemComponent;
}());



/***/ }),

/***/ "./src/app/components/create-user/create-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Crear Usuario</h1>\n<hr>\n\n<form class=\"user-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"jumbotron animated fast fadeIn\">\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"email\" emailExists placeholder=\"Email\"  class=\"form-control\" uniqueEmail [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div class=\"divider\"></div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.required\">Email requerido</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.email\">Email debe ser una cuenta valida</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors['uniqueEmail']\">Email existe</div>\n              </div>\n          </div>\n\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"name\" placeholder=\"Nombre\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.name.errors.required\">Nombre requerido</div>\n                </div>\n            </div>\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"secondName\" placeholder=\"Apellido\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.secondName.errors }\" />\n\n            <div *ngIf=\"submitted && f.secondName.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.secondName.errors.required\">Apellido requerido</div>\n                </div>\n            </div>\n\n\n        <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div class=\"divider\"></div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.required\">Contraseña requerida</div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.minlength\">Contraseña menor a 6 digitos</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"r_password\" placeholder=\"Confirmar Password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.r_password.errors }\" />\n          <div *ngIf=\"submitted && f.r_password.errors\" class=\"invalid-feedback\">\n            <div class=\"divider\"></div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.r_password.errors.required\">Confirmación requerida</div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.r_password.errors.minlength\">Confirmación menor a 6 digitos</div>\n          </div>\n        </div>\n\n\n        <!-- <div class=\"form-group\">\n            Habilitar usuario <input type=\"checkbox\" formControlName=\"enable-check\" name=\"enable-check\" [checked]=\"enable\"   (change)=\"$event.target.checked\" />\n        </div> -->\n\n        <br>\n        <div class=\"form-group\">\n            <button [disabled]=\"buttonDisabled\" class=\"btn btn-outline-primary btn-block form-control\">Registrar</button>\n        </div>\n    </div>\n    </form>\n"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthService, GoogleLoginProvider } from "angular5-social-login";







//[ existingMobileNumberValidator(this.userService),
var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, http, router, fb, authService, modalService) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.submitted = false;
        this.successfullySaved = false;
        this.errorSaved = false;
        this.buttonDisabled = false;
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ]],
            r_password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ]]
        });
    };
    Object.defineProperty(CreateUserComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.userService.createUser(this.registerForm.value).subscribe(function (res) {
                console.log("DATOOOOS   " + JSON.stringify(res) + " +++++++");
                console.log("DATOOOOS   " + JSON.stringify(res['code']));
                console.log(typeof res['code']);
                if (res['code'] == 0) {
                    _this.successfullySaved = true;
                    _this.openModal("Usuario creado", "", "success", "success");
                    _this.submitted = false;
                    _this.registerForm.reset();
                    //alert("")
                }
                else {
                    _this.errorSaved = true;
                    _this.openModal("Error al crear usuario", "", "success", "success");
                    //  alert("Error al crear usuario")
                }
            });
        }
    };
    CreateUserComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    CreateUserComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
            (this.registerForm.get(field).untouched && this.formSubmitAttempt));
    };
    CreateUserComponent.prototype.userExist = function () {
        var value = this.userService.exist(this.registerForm.controls['email'].value);
        //console.log(value);
        this.registerForm.controls['email'].setErrors({ 'incorrect': value });
    };
    CreateUserComponent.prototype.openModal = function (title, text, type, action) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.type = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    CreateUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/components/create-user/create-user.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/dialogoneinput/dialogoneinput.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/dialogoneinput/dialogoneinput.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.Title}}</h1>\n<div mat-dialog-content>\n  <mat-form-field class=\"name\">\n    <input (click)=\"$event.target.select()\" matInput [(ngModel)]=\"name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"cancel()\">CANCEL</button>\n  <button mat-button [mat-dialog-close]=\"name\" cdkFocusInitial>CREATE</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dialogoneinput/dialogoneinput.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dialogoneinput/dialogoneinput.component.ts ***!
  \***********************************************************************/
/*! exports provided: DialogOneInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOneInputComponent", function() { return DialogOneInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _model_dialogOneInputData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/dialogOneInputData */ "./src/model/dialogOneInputData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogOneInputComponent = /** @class */ (function () {
    function DialogOneInputComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = data.DefaultInputText;
    }
    DialogOneInputComponent.prototype.ngOnInit = function () {
    };
    DialogOneInputComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    DialogOneInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dialogoneinput",
            template: __webpack_require__(/*! ./dialogoneinput.component.html */ "./src/app/components/dialogoneinput/dialogoneinput.component.html"),
            styleUrls: []
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _model_dialogOneInputData__WEBPACK_IMPORTED_MODULE_2__["DialogOneInputData"]])
    ], DialogOneInputComponent);
    return DialogOneInputComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Modificar Perfil</h1>\n<hr>\n\n<form class=\"user-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"jumbotron animated fast fadeIn\">\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"email\" emailExists placeholder=\"Email\"  readonly=\"readonly\" class=\"form-control\" uniqueEmail [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div class=\"divider\"></div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors['uniqueEmail']\">Email existe</div>\n              </div>\n          </div>\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"name\" placeholder=\"Nombre\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.name.errors.required\">Nombre requerido</div>\n                </div>\n            </div>\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"secondName\" placeholder=\"Apellido\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.secondName.errors }\" />\n\n            <div *ngIf=\"submitted && f.secondName.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.secondName.errors.required\">Apellido requerido</div>\n                </div>\n            </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div class=\"divider\"></div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.required\">Contraseña requerida</div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.password.errors.minlength\">Contraseña menor a 6 digitos</div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <input type=\"password\" formControlName=\"r_password\" placeholder=\"Confirmar Password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.r_password.errors }\" />\n\n          <div *ngIf=\"submitted && f.r_password.errors\" class=\"invalid-feedback\">\n            <div class=\"divider\"></div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.r_password.errors.required\">Confirmación requerida</div>\n            <div class=\"alert alert-danger\" *ngIf=\"f.r_password.errors.minlength\">Confirmación menor a 6 digitos</div>\n          </div>\n        </div>\n\n        <br>\n        <div class=\"form-group\">\n            <button class=\"btn btn-outline-primary btn-block form-control\">Modificar</button>\n        </div>\n    </div>\n    </form>\n    <!-- </div> -->\n"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(userService, http, router, fb, authService, modalService) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.submitted = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: [sessionStorage.getItem('email'),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ]],
            r_password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
                ]]
        });
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.openModal("Error al editar perfil", "Uno o mas campos son incorrectos, complete los campos correctamente y vuelva a intentarlo", "error", "error");
            return;
        }
        else {
            this.openModal("¿Esta seguro de modificar su perfil?", "Haga click en 'Confirmar' para modificar el perfil o en 'Cerrar' para cancelar la accion", 'edit', "confirm");
        }
    };
    EditProfileComponent.prototype.editarPerfil = function () {
        var _this = this;
        this.userService.modifyUser(this.registerForm.value).subscribe(function (res) {
            _this.openModal("Perfil modificado", "", "success", "success");
        });
    };
    EditProfileComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    EditProfileComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
            (this.registerForm.get(field).untouched && this.formSubmitAttempt));
    };
    EditProfileComponent.prototype.userExist = function () {
        var value = this.userService.exist(this.registerForm.controls['email'].value);
        console.log(value);
        this.registerForm.controls['email'].setErrors({ 'incorrect': value });
    };
    EditProfileComponent.prototype.getAllUsers = function () {
        this.userService.getAllUsers().subscribe(function (res) {
            //this.user = res['result'];
        });
    };
    EditProfileComponent.prototype.openModal = function (title, text, type, action) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.type = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
            if (result == 'edit') {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/edit-profile/edit-profile.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Editar Usuario</h1>\n<hr>\n<br>\n\n<select (change)='onOptionSelected($event)'>\n  <option value = \"-1\" selected=\"selected\">Seleccionar Usuario</option>\n  <option *ngFor = \"let file of fileList; let i = index\" [value] = 'i' >{{file.email}}</option>\n</select>\n\n<br>\n<br>\n\n<form class=\"user-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"jumbotron animated fast fadeIn\">\n      <div class=\"form-group\">\n          <input type=\"text\" formControlName=\"email\" emailExists placeholder=\"Email\"  readonly=\"readonly\" class=\"form-control\" uniqueEmail [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div class=\"divider\"></div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n              <div class=\"alert alert-danger\" *ngIf=\"f.email.errors['uniqueEmail']\">Email existe</div>\n              </div>\n          </div>\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"name\" placeholder=\"Nombre\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.name.errors.required\">Nombre requerido</div>\n                </div>\n            </div>\n\n        <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"secondName\" placeholder=\"Apellido\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.secondName.errors }\" />\n            <div *ngIf=\"submitted && f.secondName.errors\" class=\"invalid-feedback\">\n                <div class=\"divider\"></div>\n                <div class=\"alert alert-danger\" *ngIf=\"f.secondName.errors.required\">Aoellido requerido</div>\n                </div>\n            </div>\n\n        <!-- <div class=\"form-group\">\n            Habilitar usuario <input type=\"checkbox\" formControlName=\"enablecheck\" name=\"enablecheck\"  (change)=\"$event.target.checked\" />\n        </div> -->\n\n        <br>\n        <div class=\"form-group\">\n            <button  class=\"btn btn-outline-primary btn-block form-control\">Modificar</button>\n        </div>\n    </div>\n    </form>\n"

/***/ }),

/***/ "./src/app/components/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthService, GoogleLoginProvider } from "angular5-social-login";







var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(userService, http, router, fb, authService, modalService) {
        this.userService = userService;
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.modalService = modalService;
        this.submitted = false;
        this.fileList = [];
    }
    Object.defineProperty(EditUserComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditUserComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            secondName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
        });
    };
    EditUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            console.log('FLAG 10');
            return;
        }
        else {
            if (confirm("Esta seguro que quiere modificar el usuario")) {
                this.userService.modifyUser(this.registerForm.value).subscribe(function (res) {
                    if (true) {
                        _this.getAllUsers();
                        _this.openModal("Usuario modificado", "", "success", "success");
                    }
                    else {}
                });
            }
        }
    };
    EditUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (res) {
            console.log('RES!!!' + JSON.stringify(res['result']));
            _this.fileList = res['result'];
        });
    };
    EditUserComponent.prototype.onOptionSelected = function (event) {
        console.log("cheked :  " + this.isChecked);
        console.log(event); //option value will be sent as event
        this.optionSelected = event.target.value;
        console.log("REtencion " + event.target.value.enable);
        //this.isChecked=this.fileList[event.target.value].enable
        console.log("cheked :  " + this.isChecked);
        this.registerForm.setValue({
            name: this.fileList[event.target.value].name,
            secondName: this.fileList[event.target.value].secondName,
            email: this.fileList[event.target.value].email,
        });
    };
    EditUserComponent.prototype.openModal = function (title, text, type, action) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.type = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/components/edit-user/edit-user.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/files/files.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/files/files.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\"> Mis Archivos</h1>\n<hr>\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\"></h1>\n    <div *ngIf=\"!fileList\" class=\"\">\n      <img src=\"assets/img/error.png\" class=\"img-modal img-fluid pull-xs-left\" alt=\"...\"><span><strong> No hay archivos cargados en el sistema</strong></span>\n    </div>\n    <div *ngIf=\"fileList\" class=\"table-wrapper-scroll-y\">\n      <table class=\"table table-striped table-dark\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Extension</th>\n            <th scope=\"col\">Tamaño</th>\n            <th scope=\"col\">Descargar</th>\n            <th scope=\"col\">Eliminar</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let file of fileList\">\n            <th scope=\"row\">#</th>\n            <td>{{file.name}}</td>\n            <td>{{file.extension}}</td>\n            <td>{{file.size}}</td>\n            <td>\n              <a id=\"{{file.idFile}}\" (click)=\"downloadFile(file.idFile)\">\n                <img class=\"canClick\" src=\"assets/img/download.png\" alt=\"Descargar archivo\" style=\"width:20px;height:20px;border:0;\">\n              </a>\n            </td>\n            <td>\n              <a id=\"{{file.idFile}}\" (click)=\"deleteFileFlow(file.idFile)\">\n                <img class=\"canClick\" src=\"assets/img/delete.svg\" alt=\"Eliminar archivo\" style=\"width:20px;height:20px;border:0;\">\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n<h3 class=\"animated fast fadeIn\">Subir Archivo</h3>\n<hr>\n\n<div class=\"jumbotron jumbotron-fluid animated fadeIn \">\n  <div class=\"middle-centered\">\n    <div class=\"divider-nav\">\n    </div>\n    <input type=\"file\" class=\"file-btn\" (change)=onFileSelected($event)>\n    <div class=\"divider-nav\">\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-primary btn-block form-control\" [disabled]=\"buttonDisabled\" (click)=\"uploadFlow()\">Subir Archivo</button>\n\n    <span ng-if=\"porcentaje != 0\">{{porcentaje}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/files/files.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/files/files.component.ts ***!
  \*****************************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilesComponent = /** @class */ (function () {
    function FilesComponent(http, fileService, modalService) {
        this.http = http;
        this.fileService = fileService;
        this.modalService = modalService;
        this.fileList = false;
        this.porcentaje = '';
        this.uploadFile = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'documentController/addFileToUser';
        this.selectedFile = null;
        this.buttonDisabled = false;
        this.fileID = null;
    }
    FilesComponent.prototype.onFileSelected = function (event) {
        this.porcentaje = '';
        this.selectedFile = event.target.files[0];
    };
    FilesComponent.prototype.upload = function () {
        var _this = this;
        this.buttonDisabled = true;
        var fd = new FormData();
        console.log("ULPLOAD()");
        fd.append('file', this.selectedFile, this.selectedFile.name);
        this.http.post(this.uploadFile + "?email=" + sessionStorage.email + "&token=" + sessionStorage.token, fd, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                _this.porcentaje = Math.round(event.loaded / event.total * 100) + "%";
                console.log('Upload Progress: ' + _this.porcentaje);
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response) {
                _this.buttonDisabled = false;
                _this.getAllUserFiles();
                console.log("EVENT " + JSON.stringify(event));
                console.log("EVENT " + JSON.stringify(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response));
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].Response == 4) {
                    _this.openModal("Archivo subido", "puedes descargarlo o eliminarlo desde la lista de archivos", "success", "success");
                }
            }
        });
    };
    FilesComponent.prototype.uploadFlow = function () {
        console.log("hola " + this.selectedFile);
        if (this.selectedFile == null) {
            this.openModal("Archivo no seleccionado", "Seleccione archivo a subir e intentelo nuevamente", "error", "error");
        }
        else
            this.openModal("Esta seguro de subir el documento?", "Haga click en 'Confirmar' para subir el documento o en 'Cerrar' para cancelar la accion", "confirm", 'upload');
    };
    FilesComponent.prototype.ngOnInit = function () {
        this.getAllUserFiles();
    };
    FilesComponent.prototype.getAllUserFiles = function () {
        var _this = this;
        this.fileService.userFilesList(sessionStorage.getItem('email'), sessionStorage.getItem('token'))
            .subscribe(function (res) {
            console.log("solucion: " + JSON.stringify(res['result']));
            if (JSON.stringify(res['result']) != "[]") {
                console.log("Entra");
                _this.fileList = res['result'];
            }
        });
    };
    FilesComponent.prototype.deleteFileFlow = function (fileID) {
        this.fileID = fileID;
        this.openModal("¿Esta seguro de eliminar el archivo?", "Haga click en 'Confirmar' para eliminar el archivo o en 'Cerrar' para cancelar la accion", "confirm", 'delete');
    };
    FilesComponent.prototype.downloadFile = function (fileID) {
        var _this = this;
        console.log("entro!!!  " + fileID);
        this.fileService.downloadFile(sessionStorage.getItem('email'), sessionStorage.getItem('token'), fileID)
            .subscribe(function (res) {
            console.log("entro!!!  " + res);
            console.log("entro string !!!  " + JSON.stringify(res));
            var file = new Blob([res], { type: 'application/pdf' });
            _this.showFile(file);
        });
    };
    FilesComponent.prototype.deleteFile = function (fileID) {
        var _this = this;
        this.fileService.deleteFile(sessionStorage.getItem('email'), sessionStorage.getItem('token'), fileID)
            .subscribe(function (res) {
            _this.getAllUserFiles();
            console.log("OT " + JSON.stringify(res));
            //this.openModal("NO SE ELIMINO", "FUNCION NO IMPLEMENTADA,","assets/img/red.png");
        });
    };
    FilesComponent.prototype.showFile = function (blob) {
        console.log("size!!!  " + blob.size);
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob);
            return;
        }
        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        var data = window.URL.createObjectURL(blob);
        console.log("data windows url !!!  " + JSON.stringify(data));
        var link = document.createElement('a');
        link.href = data;
        link.download = "file.pdf";
        console.log("data file url !!!  " + JSON.stringify(link));
        link.click();
    };
    FilesComponent.prototype.openModal = function (title, text, type, action) {
        var _this = this;
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.action = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
            if (result == 'delete') {
                _this.deleteFile(_this.fileID);
            }
            if (result == 'upload') {
                _this.upload();
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    FilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/components/files/files.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/components/google-drive/google-drive.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/google-drive/google-drive.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n\n\n<h1 class=\"animated fast fadeIn display-3\"> Mis Archivos de Google Drive</h1>\n  <hr>\n  <p>Para cargar sus archivos debe loguearse en su cuenta de Google Drive</p>\n<div class=\"\">\n  <button class=\"btn btn-outline-primary btn-block form-control\" (click)=\"signIn()\">Seleccionar Cuenta</button>\n  <button *ngIf=\"isSignedIn\" type=\"button\"  (click)='onRefresh()'  class=\"btn btn-outline-primary btn-block form-control\"> Volver a carpeta Raiz</button>\n  <div class=\"divider-nav\">\n  <label for=\"\">{{email}}</label>\n  </div>\n</div>\n\n    <div class=\"jumbotron\">\n\n\n\n      <div  class=\"table-wrapper-scroll-y\">\n        <table class=\"table table-striped table-dark\">\n          <thead class=\"thead-dark\">\n            <tr>\n              <th scope=\"col\">#</th>\n              <th scope=\"col\">Nombre</th>\n              <th scope=\"col\">Ultima Modificacion</th>\n              <th scope=\"col\">Tamaño</th>\n              <th scope=\"col\">Descargar</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor=\"let file of files\">\n                <ng-template [ngIf]=\"file.MimeType == 'application/pdf' || file.MimeType =='application/msword' || file.MimeType == 'application/vnd.google-apps.folder'\">\n                <th>\n                  <img class=\"canClick\" (click)=\"browse(file)\" [class.folder]=\"file.IsFolder\" *ngIf=\"file.IsFolder\" src=\"assets/img/folder.png\" alt=\"Descargar archivo\" style=\"width:20px;height:20px;border:0;\">\n                </th>\n                <td>{{file.Name}}</td>\n                <td>{{ file.ModifiedTime | date }}</td>\n                <td>{{file.SizeText}}</td>\n                <td>\n                  <a *ngIf=\"file.Icon == 'file'\" id=\"{{file.idFile}}\" (click)=\"downloadFile(file.Id)\">\n                    <img class=\"canClick\" src=\"assets/img/download.png\" alt=\"Descargar archivo\" style=\"width:20px;height:20px;border:0;\">\n                  </a>\n                </td>\n                <td>\n                </td>\n              </ng-template>\n              </tr>\n          </tbody>\n        </table>\n      </div>\n      \n      <div *ngIf=\"!isSignedIn\" class=\"\">\n        <img  src=\"assets/img/error.png\" class=\"img-modal img-fluid pull-xs-left\" alt=\"...\"><span><strong>  No se encuentra logueado a ninguna cuenta de Google Drive</strong></span>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/google-drive/google-drive.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/google-drive/google-drive.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoogleDriveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleDriveComponent", function() { return GoogleDriveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _infrastructure_app_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../infrastructure/app.context */ "./src/infrastructure/app.context.ts");
/* harmony import */ var _model_fileInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../model/fileInfo */ "./src/model/fileInfo.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogoneinput_dialogoneinput_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialogoneinput/dialogoneinput.component */ "./src/app/components/dialogoneinput/dialogoneinput.component.ts");
/* harmony import */ var _model_dialogOneInputData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/dialogOneInputData */ "./src/model/dialogOneInputData.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GoogleDriveComponent = /** @class */ (function () {
    function GoogleDriveComponent(appContext, router, zone, dialog, bottomSheet) {
        this.appContext = appContext;
        this.router = router;
        this.zone = zone;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.breadCrumbItems = [];
        //displayedColumns: string[] = ["icon", "name", "modifiedTime", "size", "delete"];
        this.displayedColumns = ["icon", "name", "modifiedTime", "size"];
        this.files = [];
        this.isSignedIn = this.appContext.Session.Gapi.isSignedIn;
        console.log("TEST FILES   " + JSON.stringify(this.files));
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.files);
    }
    GoogleDriveComponent.prototype.onRefresh = function () {
        this.refresh("root");
    };
    GoogleDriveComponent.prototype.signIn = function () {
        var _this = this;
        this.appContext.Session.Gapi.signIn().then(function () {
            if (_this.appContext.Session.Gapi.isSignedIn) {
                _this.isSignedIn = _this.appContext.Session.Gapi.isSignedIn;
                console.log("ESTAS LOGUEADO");
                _this.appContext.Session.BreadCrumb.init();
                _this.breadCrumbItems = _this.appContext.Session.BreadCrumb.items;
                _this.refresh("root");
            }
            else
                console.log("NO ESTAS LOGUEADO");
        });
    };
    GoogleDriveComponent.prototype.singOut = function () {
        this.appContext.Session.Gapi.signOut();
        this.refresh("root");
    };
    GoogleDriveComponent.prototype.browse = function (file) {
        var _this = this;
        if (file.IsFolder) {
            this.appContext.Repository.File.getFiles(file.Id)
                .then(function (res) {
                _this.zone.run(function () {
                    _this.files = res;
                    _this.dataSource.data = _this.files;
                    _this.appContext.Session.BreadCrumb.navigateTo(file.Id, file.Name);
                    _this.breadCrumbItems = _this.appContext.Session.BreadCrumb.items;
                });
            });
        }
    };
    GoogleDriveComponent.prototype.createNewFolder = function () {
        var _this = this;
        var data = new _model_dialogOneInputData__WEBPACK_IMPORTED_MODULE_6__["DialogOneInputData"]();
        data.DefaultInputText = "Untitled folder";
        data.Title = "New folder";
        var dialogRef = this.dialog.open(_dialogoneinput_dialogoneinput_component__WEBPACK_IMPORTED_MODULE_5__["DialogOneInputComponent"], {
            width: '250px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.appContext.Repository.File.create(_this.appContext.Session.BreadCrumb.currentItem.Id, result)
                    .then(function () {
                    _this.refresh(_this.appContext.Session.BreadCrumb.currentItem.Id);
                });
            }
        });
    };
    GoogleDriveComponent.prototype.delete = function (file) {
        var _this = this;
        var index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
            this.appContext.Repository.File.delete(file.Id)
                .then(function () {
                _this.zone.run(function () {
                    _this.dataSource.data = _this.files;
                    console.log("Delete successfully");
                });
            });
        }
    };
    GoogleDriveComponent.prototype.ngOnInit = function () {
        console.log("isSignedIn 1  " + this.isSignedIn);
        this.isSignedIn = this.appContext.Session.Gapi.isSignedIn;
        this.appContext.Session.BreadCrumb.init();
        this.breadCrumbItems = this.appContext.Session.BreadCrumb.items;
        this.refresh("root");
        console.log("isSignedIn 2   " + this.isSignedIn);
    };
    GoogleDriveComponent.prototype.logout = function () {
    };
    GoogleDriveComponent.prototype.onSelectedItemChanged = function ($event) {
        var fileInfo = new _model_fileInfo__WEBPACK_IMPORTED_MODULE_2__["FileInfo"]();
        fileInfo.Id = $event.Id;
        fileInfo.Name = $event.Name;
        fileInfo.MimeType = _model_fileInfo__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE_FOLDER"];
        this.browse(fileInfo);
    };
    // onSelectedOptionChanged($event: BreadCrumbItemOption) {
    //     if ($event.Option === OPTION_NEW_FOLDER) {
    //         this.createNewFolder();
    //     }
    //     else if ($event.Option === OPTION_UPLOAD_FILES) {
    //         // this.importByUrl();
    //         this.bottomSheet.open(FilesUploadComponent, { data: $event.Data });
    //     }
    // }
    GoogleDriveComponent.prototype.refresh = function (fileId) {
        var _this = this;
        this.appContext.Repository.File.getFiles(fileId)
            .then(function (res) {
            _this.zone.run(function () {
                _this.files = res;
                console.log('files: ' + JSON.stringify(res));
                _this.dataSource.data = _this.files;
            });
        });
    };
    GoogleDriveComponent.prototype.downloadFile = function (fileID) {
        var _this = this;
        console.log("downloadFile");
        console.log("entro!!!  " + fileID);
        console.log("%c entro!!!, {color= orange}  " + fileID);
        //console.log("GOOGLE AUTH:   " + JSON.stringify(this.appContext.Session.Gapi.googleAuth));
        this.appContext.Repository.File.downloadFileGoogle(fileID)
            .subscribe(function (res) {
            console.log("ENTRO AL BLOB!!!!!! " + res);
            console.log("entro string !!!  " + JSON.stringify(res));
            var file = new Blob([res], { type: 'application/pdf' });
            _this.showFile(file);
        });
    };
    GoogleDriveComponent.prototype.showFile = function (blob) {
        console.log("size!!!  " + blob.size);
        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob);
            return;
        }
        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        var data = window.URL.createObjectURL(blob);
        console.log("data windows url !!!  " + JSON.stringify(data));
        var link = document.createElement('a');
        link.href = data;
        link.download = "file.pdf";
        console.log("data file url !!!  " + JSON.stringify(link));
        link.click();
    };
    GoogleDriveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "google-drive",
            template: __webpack_require__(/*! ./google-drive.component.html */ "./src/app/components/google-drive/google-drive.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_infrastructure_app_context__WEBPACK_IMPORTED_MODULE_1__["AppContext"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheet"]])
    ], GoogleDriveComponent);
    return GoogleDriveComponent;
}());



/***/ }),

/***/ "./src/app/components/help/help.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/help/help.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Ayuda</h1>\n<hr>\n<div *ngIf=\"role=='1'\" class=\"jumbotron animated fast fadeIn\">\n  <h2>Crear Usuario</h2>\n  <hr>\n  <p>Pagina donde crear usuarios, se debe llenar un formulario donde todos los campos son obligatorios.</p>\n  <br>\n  <br>\n  <h2>Editar Usuario</h2>\n  <hr>\n  <p>Pagina donde editar usuarios, se debe elegir el usuario a ser editado y el usuario cargará la información del usuario seleccionado. Se puede modificar el formulario donde todos los campos son obligatorios.</p>\n  <br>\n  <br>\n  <h2>Editar Perfil</h2>\n  <hr>\n  <p>Para acceder a la pagina Editar Perfil, se debe cliquear en el boton que despliega tu email ({{email}}), Se puede modificar el formulario donde todos los campos son obligatorios.</p>\n</div>\n\n<div *ngIf=\"role=='2'\" class=\"jumbotron animated fast fadeIn\">\n  <h2>Archivos</h2>\n  <hr>\n  <p>En esta pagina el usuario podra subir documentos a su cuenta en el sistema, ademas de ver un listado con los documentos que ya subió y la posibilidad de eliminarlos del mismo.</p>\n  <br>\n  <br>\n  <h2>Analizar</h2>\n  <hr>\n  <p>Para realizar un analisis se debe elegir el documento a ser analisado y al menos un documento ya sea de la tabla \"Mis documentos\" o de la tabla \"Documentos compartidos\", despues de ser seleccionados y cliquear \"Analizar\" el sistema iniciara el analisis que podras ver en la pagina de Reportes. </p>\n  <br>\n  <br>\n  <h2>Reportes</h2>\n  <hr>\n  <p>Aqui, se muestran los analisis que se estan ejecutando como los que ya se completaron, dando la opcion de descargar el reporte con los resultados de dicho analisis  </p>\n  <br>\n  <br>\n  <h2>Google Drive</h2>\n  <hr>\n  <p>El boton \"Seleccionar Cuenta\" permite conectarte a una cuenta de Google Drive y despliega los documentos validos para el sistema. Esta pagina permite la navegacion entre las carpetas de la cuenta y la descarga del archivo que puede posteriormente cargarse en el sistema atraves de la pagina \"Archivos\".</p>\n  <br>\n  <br>\n  <h2>Editar Perfil</h2>\n  <hr>\n  <p>Para acceder a la pagina Editar Perfil, se debe cliquear en el boton que despliega tu email ({{email}}), Se puede modificar el formulario donde todos los campos son obligatorios.</p>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/components/help/help.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
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

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
        this.role = sessionStorage.getItem('role');
        this.email = sessionStorage.getItem('email');
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/components/help/help.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\">Bienvenido</h1>\n<hr>\n<div *ngIf=\"role=='1'\" class=\"jumbotron animated fast fadeIn\">\n  <h2 >{{cantUsuariosDelSistema}}</h2>\n  <br>\n  <br>\n  <h2 >{{cantArchivosCarpetaCompartida}}</h2>\n  <br>\n  <br>\n  <h2>{{cantArchivosEnElSistema}}</h2>\n</div>\n<div *ngIf=\"role=='2'\" class=\"jumbotron animated fast fadeIn\">\n  <h2 >{{cantArchivos}}</h2>\n  <br>\n  <br>\n  <h2 >{{cantAnalisis}}</h2>\n  <br>\n  <br>\n  <h2>{{cantAnalisisTerminados}}</h2>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home.service */ "./src/app/services/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("role Nuevo " + this.role);
        this.role = sessionStorage.getItem('role');
        console.log("role Nuevo2 " + this.role);
        this.getDashBoard();
    };
    HomeComponent.prototype.getDashBoard = function () {
        var _this = this;
        this.homeService.getDashBoard(sessionStorage.getItem('email'), sessionStorage.getItem('token')).subscribe(function (res) {
            console.log('%c getDashBoard', 'color: orange;');
            console.table(" cantArchivos " + res);
            _this.cantArchivos = res['result'][0].cantArchivos;
            _this.cantAnalisis = res['result'][0].cantAnalisis;
            _this.cantAnalisisTerminados = res['result'][0].cantAnalisisTerminados;
            _this.cantUsuariosDelSistema = res['result'][0].cantUsuariosDelSistema;
            _this.cantArchivosCarpetaCompartida = res['result'][0].cantArchivosCarpetaCompartida;
            _this.cantArchivosEnElSistema = res['result'][0].cantArchivosEnElSistema;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box background-fixed titlelog fast animated fadeIn\">\r\n  <h1 class=\"animated fadeIn display-3\">SDP</h1>\r\n  <br>\r\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" >\r\n    <div class=\"container animated fadeIn \">\r\n      <input type=\"text\" placeholder=\"Email\" class=\"form-control\"  formControlName=\"mail\" required uniqueEmail [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" >\r\n      <br>\r\n\r\n      <input type=\"password\" placeholder=\"Contraseña\" class=\"form-control\" name=\"password\"  formControlName=\"password\" required>\r\n      <br>\r\n      <button class=\"btn btn-outline-primary btn-block form-control\" type=\"submit\">Login</button>\r\n      <br>\r\n      <li class=\"password-link\">\r\n        <a class=\"link\" (click)=\"goToPassword()\">Olvidaste tu Contraseña?</a>\r\n      </li>\r\n    </div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, fb, // {3}
    authService, // {4}
    router, modalService) {
        this.http = http;
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.modalService = modalService;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.registerForm = this.fb.group({
            mail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
            (this.registerForm.get(field).untouched && this.formSubmitAttempt));
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.registerForm.valid) {
            this.authService.login(this.registerForm.value);
            // {7}
        }
        this.formSubmitAttempt = true; // {8}
    };
    LoginComponent.prototype.goToPassword = function () {
        this.router.navigate(['password']);
    };
    LoginComponent.prototype.goToSignin = function () {
        this.router.navigate(['signin']);
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.openModal = function (title, text, type) {
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n<img src=\"assets/img/404.png\" alt=\"\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/password/password.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/password/password.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box animated fast fadeIn\">\n  <label for=\"\" style=\"font-size: 30px;\" class=\"header-box animated fadeIn\">Recuperar Contraseña</label>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmitClicked()\" >\n    <div class=\"container animated fadeIn \">\n      <input type=\"text\" placeholder=\"Ingresar Email\" class=\"form-control\" name=\"userEmail\" formControlName=\"userEmail\" required>\n      <br>\n      <p>Recibiras un email con un link para recuperar tu contraseña.</p>\n      <button class=\"btn btn-outline-primary btn-block form-control\" type=\"submit\">Confirmar</button>\n      <br>\n      <li class=\"password-link\">\n        <a class=\"link\" (click)=\"goToLogin()\" >Ingresar con Usuario existente</a>\n      </li>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/password/password.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/password/password.component.ts ***!
  \***********************************************************/
/*! exports provided: PasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordComponent", function() { return PasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_payload_PasswordPayload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payload/PasswordPayload */ "./src/app/services/payload/PasswordPayload.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/modal/modal.component */ "./src/app/utils/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(router, loginService, fb, modalService) {
        this.router = router;
        this.loginService = loginService;
        this.fb = fb;
        this.modalService = modalService;
    }
    PasswordComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            userEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    PasswordComponent.prototype.onSubmitClicked = function () {
        var _this = this;
        var payload = new _services_payload_PasswordPayload__WEBPACK_IMPORTED_MODULE_2__["PasswordPayload"]();
        payload.userEmail = this.userEmail;
        console.log("email." + this.form.get("userEmail").value);
        if (this.form.valid) {
            this.loginService.recuperarPassword(this.form.get("userEmail").value)
                .subscribe(function (res) {
                if (res['code'] === 1) {
                    _this.openModal(res["message"], "", "error", "error");
                }
                else
                    _this.openModal("Email enviado", "", "success", "success");
                console.log("asdasdsa" + JSON.stringify(res));
                //this.openModal("Email enviado", "","success","success")
            });
        }
    };
    PasswordComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    PasswordComponent.prototype.openModal = function (title, text, type, action) {
        var ngbModalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var modalRef = this.modalService.open(_utils_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], ngbModalOptions);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.text = text;
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.type = action;
        modalRef.result.then(function (result) {
            console.log("resultados del modal  " + result);
            if (result == 'edit') {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    PasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-password',
            template: __webpack_require__(/*! ./password.component.html */ "./src/app/components/password/password.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reports/reports.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"animated fast fadeIn display-3\"> Mis Reportes</h1>\n  <hr>\n  <div *ngIf=\"reportsList\" class=\"jumbotron\">\n    <h1 class=\"display-3\"></h1>\n\n  <div class=\"table-wrapper-scroll-y\">\n    <table class=\"table table-striped table-dark\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Documento</th>\n          <th scope=\"col\">Corpus</th>\n          <th scope=\"col\">Inicio</th>\n          <!-- <th scope=\"col\">resultado</th> -->\n          <th scope=\"col\">Finaliza</th>\n          <th scope=\"col\">Descargar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let report of reportsList\">\n          <th scope=\"row\">#</th>\n          <td>{{report.nombreArchivoAComparar}}</td>\n          <td>\n            <!-- {{report.nombreArchivosCorpus}} -->\n            <label data-toggle=\"tooltip\" data-delay=\"0\" title=\"{{report.nombreArchivosCorpus}}\" for=\"\">Ver más</label>\n          </td>\n          <td>{{report.fechaPedidoAnalisis | date}}</td>\n          <!-- <td>{{report.resultado}}</td> -->\n          <td>{{report.fechaFinaAnalisis | date}}</td>\n          <td>\n            <a id=\"{{report.idAnalisis}}\"  *ngIf=\"report.fechaFinaAnalisis != null\" (click)=\"downloadReport(report.idAnalisis)\">\n              <img class=\"canClick\" src=\"assets/img/download.png\" alt=\"Descargar Reporte\" style=\"width:20px;height:20px;border:0;\">\n            </a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_analyze_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/analyze.service */ "./src/app/services/analyze.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(analyzeService, http) {
        this.analyzeService = analyzeService;
        this.http = http;
        this.reportsList = false;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.getReportList();
    };
    ReportsComponent.prototype.getReportList = function () {
        var _this = this;
        this.analyzeService.listarAnalisisPorUsuario().subscribe(function (res) {
            console.log("entro!!!  " + JSON.stringify(res));
            if (JSON.stringify(res['result']) != "[]") {
                _this.reportsList = res['result'];
            }
        });
    };
    ReportsComponent.prototype.downloadReport = function (idAnalisis) {
        var _this = this;
        console.log("idAnalisis!!!  " + idAnalisis);
        this.analyzeService.reporteAnalisis(sessionStorage.getItem('email'), sessionStorage.getItem('token'), idAnalisis)
            .subscribe(function (res) {
            console.log("entro!!!  " + res);
            console.log("entro string !!!  " + JSON.stringify(res));
            var file = new Blob([res], { type: 'application/pdf' });
            _this.showFile(file);
        });
    };
    ReportsComponent.prototype.showFile = function (blob) {
        console.log("size!!!  " + blob.size);
        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob);
            return;
        }
        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        var data = window.URL.createObjectURL(blob);
        console.log("data windows url !!!  " + JSON.stringify(data));
        var link = document.createElement('a');
        link.href = data;
        link.download = "file.pdf";
        console.log("data file url !!!  " + JSON.stringify(link));
        link.click();
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/components/reports/reports.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_analyze_service__WEBPACK_IMPORTED_MODULE_1__["AnalyzeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"bottom-down\" *ngIf=\"isLoggedIn$ | async\">\n     <div class=\"container\">\n       <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 col-xs-12\">\n                <img src=\"assets/img/logo.png\" width=\"100\" height=\"45\" alt=\"\"><br>\n                <p>© 2018</p>\n                </div>\n                <div class=\"col-md-4 col-sm-6 col-xs-12\">\n                    <ul class=\"menu\">\n                      <!--   <span>Menu</span>\n                         <li>\n                            <a href=\"#\">Home</a>\n                          </li>\n                          <li>\n                             <a href=\"#\">About</a>\n                          </li>\n\n                          <li>\n                            <a href=\"#\">Blog</a>\n                          </li>\n\n                          <li>\n                             <a href=\"#\">Gallery </a>\n                          </li>-->\n                     </ul>\n                </div>\n                <div class=\"col-md-4 col-sm-6 col-xs-12\">\n                  <ul class=\"address\">\n                        <!-- <span>Contact</span>\n                        <li>\n                           <i class=\"fa fa-phone\" aria-hidden=\"true\"></i> <a href=\"#\">Phone</a>\n                        </li>\n                        <li>\n                           <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <a href=\"#\">Adress</a>\n                        </li>\n                        <li>\n                           <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <a href=\"#\">Email</a>\n                        </li> -->\n                   </ul>\n               </div>\n           </div>\n        </div>\n    </footer>\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService) {
        this.authService = authService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *ngIf=\"isLoggedIn$ | async\" -->\n\n\n<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded animated fast fadeIn\" *ngIf=\"isLoggedIn$ | async\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\"> <img src=\"assets/img/logo.png\" width=\"88\" height=\"24\" alt=\"\" class=\"img-fluid pull-xs-left\" alt=\"...\"></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"role=='2'\" >\n        <button mat-button [routerLink]=\"['files']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Archivos</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\" *ngIf=\"role=='1'\" >\n        <button mat-button  [routerLink]=\"['create-user']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Crear Usuario</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\" *ngIf=\"role=='1'\" >\n        <button mat-button  [routerLink]=\"['edit-user']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Editar Usuario</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\" *ngIf=\"role=='2'\" >\n        <button mat-button  [routerLink]=\"['analyze']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Analizar</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\" *ngIf=\"role=='2'\" >\n        <button mat-button  [routerLink]=\"['reports']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Reportes</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\" *ngIf=\"role=='2'\" >\n        <button mat-button  [routerLink]=\"['google-drive']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Google Drive</button>\n      </li>\n      <div class=\"divider-nav\"></div>\n      <li class=\"nav-item\">\n        <button mat-button  [routerLink]=\"['help']\" class=\"btn btn-outline-primary btn-block button-nav\" href=\"#\">Ayuda</button>\n      </li>\n    </ul>\n\n    <div class=\"navbar-collapse  w-100 order-3 \">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <button mat-button [routerLink]=\"['edit-profile']\" class=\"btn btn-outline-primary btn-block\">{{email}}</button>\n          </li>\n            <div class=\"divider-nav\"></div>\n          <li class=\"nav-item\" routerLinkActive=\"active\">\n            <button mat-button class=\"btn btn-outline-primary btn-block\" (click)=\"onLogout()\">Logout</button>\n          </li>\n      </ul>\n    </div>\n\n\n    <script>\n    $('.navbar-nav>li>button').on('click', function(){\n        $('.navbar-collapse').collapse('hide');\n    });\n    </script>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_storageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/storageService */ "./src/app/auth/storageService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, storageService) {
        this.authService = authService;
        this.storageService = storageService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
        console.log("si funciona bien " + this.isLoggedIn$);
        this.email = sessionStorage.getItem('email');
        this.role = sessionStorage.getItem('role');
        this.name = sessionStorage.getItem('name');
        this.storageService.watchStorage().subscribe(function (data) {
            console.log("soy Data " + data);
            _this.email = sessionStorage.getItem('email');
            _this.role = sessionStorage.getItem('role');
            //this will call whenever your localStorage data changes
            // use localStorage code here and set your data here for ngFor
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout(); // {3}
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _auth_storageService__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/analyze.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/analyze.service.ts ***!
  \*********************************************/
/*! exports provided: AnalyzeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeService", function() { return AnalyzeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnalyzeService = /** @class */ (function () {
    function AnalyzeService(http) {
        this.http = http;
        this.iniciarAnalisisUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/iniciarAnalisis/';
        this.analisisListUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/listarAnalisisPorUsuario/';
        this.obtenerResultadoAnalisisUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/reporteAnalisis';
    }
    AnalyzeService.prototype.iniciarAnalisis = function (fileToAnalize, corpus) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var body = {
            "credentials": {
                "mail": sessionStorage.getItem('email'),
                "password": "string",
                "roleDTOs": [
                    {
                        "desc": "string",
                        "id": 0,
                        "name": "string"
                    }
                ],
                "token": sessionStorage.getItem('token')
            },
            "fileToAnalyze": fileToAnalize,
            "filesToCompare": corpus,
            "finishDate": "2018-09-04T18:33:45.716Z",
            "idAnalize": 0,
            "initialDate": "2018-09-04T18:33:45.716Z",
            "terminado": true
        };
        return this.http.post(this.iniciarAnalisisUrl, body, { headers: headers });
    };
    // public getReportList(): Observable<any>{
    //   return this.http.post(this.obtenerResultadoAnalisisUrl + "?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token') , {responseType: 'text'}).pipe(
    //     catchError(new ErrorHandler().handleError('LoginService', null))
    //   );
    // }
    AnalyzeService.prototype.listarAnalisisPorUsuario = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var body = {
            "mail": sessionStorage.getItem('email'),
            "password": "string",
            "roleDTOs": [
                {
                    "desc": "string",
                    "id": 0,
                    "name": "string"
                }
            ],
            "token": sessionStorage.getItem('token')
        };
        return this.http.post(this.analisisListUrl, body, { headers: headers });
    };
    AnalyzeService.prototype.reporteAnalisis = function (email, token, idAnalisis) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/pdf');
        var url = this.obtenerResultadoAnalisisUrl + "?email=" + email + "&token=" + token + "&idAnalisis=" + idAnalisis;
        return this.http.get(url, { headers: headers, responseType: 'blob' });
    };
    AnalyzeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnalyzeService);
    return AnalyzeService;
}());



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileService = /** @class */ (function () {
    //documentController/download/{fileID}/{email}/{token}
    //documentController//downloadUserFiles/{email}/{token}/{fileID}/
    function FileService(http) {
        this.http = http;
        this.fileListUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'documentController/listUserFiles';
        this.sharedFilesUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'documentController/listSharedFiles/';
        this.downloadFileUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'documentController/downloadUserFiles/';
        this.downloadFileGoogleUrl = 'https://www.googleapis.com/drive/v3/files/';
        this.removeFileFromUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + '/documentController/removeFileFromUser';
    }
    FileService.prototype.userFilesList = function (email, token) {
        console.log("console log: " + this.fileListUrl);
        return this.http.post(this.fileListUrl + "?email=" + email + "&token=" + token, { responseType: 'text' });
        //.pipe(catchError(new ErrorHandler().handleError('LoginService', null)));
    };
    FileService.prototype.getSharedFiles = function (email, token) {
        return this.http.post(this.sharedFilesUrl + "?email=" + email + "&token=" + token, { responseType: 'text' });
        //.pipe(catchError(new ErrorHandler().handleError('LoginService', null)));
    };
    FileService.prototype.downloadFile = function (email, token, fileId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/pdf');
        var url = this.downloadFileUrl + "?email=" + email + "&token=" + token + "&fileID=" + fileId;
        return this.http.get(url, { headers: headers, responseType: 'blob' });
    };
    FileService.prototype.deleteFile = function (email, token, fileId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/pdf');
        var url = this.removeFileFromUserUrl + "?email=" + email + "&token=" + token + "&fileID=" + fileId;
        return this.http.post(url, { headers: headers, responseType: 'text' });
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
        this.dashBoardUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/getDashBoard';
    }
    HomeService.prototype.getDashBoard = function (email, token) {
        return this.http.post(this.dashBoardUrl + "?email=" + email + "&token=" + token, { responseType: 'text' });
        //.pipe(catchError(new ErrorHandler().handleError('LoginService', null)));
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ErrorHandler */ "./src/app/utils/ErrorHandler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.isUsedId = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/isUsedId';
        this.passwordByEmail = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/sendPasswordByMail';
        this.checkUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/isUsedId';
        this.createUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/createUser';
        this.secureEchoUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'Sdp/api/secure/echo/andrei';
    }
    LoginService.prototype.doLogin = function (payload) {
        return this.http.post(this.checkUserUrl, payload, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]().handleError('LoginService', null)));
    };
    //prototypeoneb@gmail.com
    LoginService.prototype.signin = function (user) {
        if (user.name !== '' && user.password !== '') {
            console.log("ENTRO" + user.name);
            var bool = this.exist(user.email);
            if (!this.exist(user.email)) {
                console.log("ENTRO" + user);
                //prototypeoneb@gmail.com
                //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
                this.http.post(this.createUserUrl, user, { responseType: 'text' })
                    .subscribe(function (respuesta) { return localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })); });
                var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                localStorage.setItem('token', currentUser.token);
                localStorage.setItem('userName', currentUser.name);
                //localStorage.setItem('userID',currentUser.userID);
                this.router.navigate(['/home']);
            }
            else {
                console.log("NO EXISTIO: " + user.email);
            }
        }
    };
    LoginService.prototype.exist = function (email) {
        console.log(this.checkUserUrl);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
        params.append('email', email);
        console.log("paramsssss= " + params);
        return this.http.get(this.checkUserUrl, { params: params })
            .subscribe(function (respuesta) { return respuesta; });
    };
    LoginService.prototype.doSecureEcho = function (authToken) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('x-auth-token', authToken);
        headers = headers.append('Content-Type', 'text/xml');
        return this.http.get(this.secureEchoUrl, { headers: headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]().handleError('LoginService', null)));
    };
    LoginService.prototype.getIsUsedId = function (eMail) {
        if (eMail !== '') {
            console.log("email: " + eMail);
            this.http.post(this.passwordByEmail, eMail, { responseType: 'text' })
                .subscribe(function (respuesta) { return localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })); });
            return true;
        }
    };
    LoginService.prototype.recuperarPassword = function (eMail) {
        if (eMail !== '') {
            console.log("email!!!!!  : " + eMail);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Content-Type', 'text/xml');
            //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
            return this.http.get(this.passwordByEmail + "?email=" + eMail);
            //localStorage.setItem('userID',currentUser.userID);
        }
    };
    LoginService.prototype.getPasswordByEmail = function (eMail) {
        if (eMail !== '') {
            console.log("email: " + eMail);
            //this.http.post(this.checkUserUrl, user, {responseType: 'text'}).subscribe(respuesta =>this.manageLoginResponse(respuesta));
            this.http.post(this.passwordByEmail, eMail, { responseType: 'text' })
                .subscribe(function (respuesta) { return localStorage.setItem('currentUser', JSON.stringify({ token: respuesta })); });
            //localStorage.setItem('userID',currentUser.userID);
            this.router.navigate(['/home']);
        }
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/payload/PasswordPayload.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/payload/PasswordPayload.ts ***!
  \*****************************************************/
/*! exports provided: PasswordPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPayload", function() { return PasswordPayload; });
var PasswordPayload = /** @class */ (function () {
    function PasswordPayload() {
    }
    return PasswordPayload;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Constants */ "./src/app/utils/Constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ErrorHandler */ "./src/app/utils/ErrorHandler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.isUsedId = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/isUsedId';
        this.passwordByEmail = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/sendPasswordByMail';
        this.checkUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'loginController/isUsedId';
        this.createUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/createUser';
        this.modifyUserUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/modifyUser';
        this.secureEchoUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'Sdp/api/secure/echo/andrei';
        this.allUsersUrl = _utils_Constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BASE_URL + 'systemController/listarUsuarios';
    }
    UserService.prototype.doLogin = function (payload) {
        return this.http.post(this.checkUserUrl, payload, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]().handleError('LoginService', null)));
    };
    UserService.prototype.createUser = function (user) {
        if (user.name !== '' && user.password !== '') {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers.append('Access-Control-Allow-Origin', '*');
            console.log('headers' + headers.get('Content-Type'));
            console.log('User ' + JSON.stringify(user));
            return this.http.post(this.createUserUrl + "?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token'), user, { headers: headers });
            //this.http.post(this.createUserUrl, user, {headers: headers})
            //.subscribe(respuesta =>JSON.stringify(console.log(respuesta)))
        }
    };
    UserService.prototype.getAllUsers = function () {
        var skeleton = {
            "mail": "string",
            "password": "string",
            "roleDTOs": [
                {
                    "desc": "string",
                    "id": 0,
                    "name": "string"
                }
            ],
            "token": "string"
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        console.log('headers' + headers.get('Content-Type'));
        return this.http.post(this.allUsersUrl, skeleton, { headers: headers });
        //this.http.post(this.createUserUrl, user, {headers: headers})
        //.subscribe(respuesta =>JSON.stringify(console.log(respuesta))
    };
    UserService.prototype.modifyUser = function (user) {
        console.log('1');
        if (user.name !== '' && user.password !== '') {
            console.log('2');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers.append('Access-Control-Allow-Origin', '*');
            console.log('headers' + headers.get('Content-Type'));
            return this.http.post(this.modifyUserUrl + "?email=" + sessionStorage.getItem('email') + "&token=" + sessionStorage.getItem('token'), user, { headers: headers });
            //this.http.post(this.createUserUrl, user, {headers: headers})
            //.subscribe(respuesta =>JSON.stringify(console.log(respuesta)))
        }
    };
    UserService.prototype.exist = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
        params.append('email', email);
        return this.http.get(this.checkUserUrl, { params: params })
            .map(function (res) { console.log("exist----> " + res); });
        //.map(res =>{return res});
        //.subscribe(res =>{console.log(res)});
        //.subscribe(res =>{return res});
    };
    UserService.prototype.doSecureEcho = function (authToken) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append("mail", "test@test.com")
            .append("password", "Password1");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('x-auth-token', authToken);
        headers = headers.append('Content-Type', 'text/xml');
        return this.http.get(this.secureEchoUrl, { headers: headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(new _utils_ErrorHandler__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"]().handleError('LoginService', null)));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/utils/Constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/Constants.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BASE_URL = "http://ec2-18-215-158-201.compute-1.amazonaws.com:8888/";
    return Constants;
}());



/***/ }),

/***/ "./src/app/utils/ErrorHandler.ts":
/*!***************************************!*\
  !*** ./src/app/utils/ErrorHandler.ts ***!
  \***************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");

var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    };
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/app/utils/modal/modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/utils/modal/modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <img src=\"assets/img/{{type}}.png\" *ngIf=\"type === 'error' \" class=\"img-modal img-fluid pull-xs-left\" alt=\"\"><h4 *ngIf=\"type === 'error' \" class=\"modal-title\">{{title}} </h4>\n  <img src=\"assets/img/{{type}}.png\" *ngIf=\"type === 'success'\" class=\"img-modal img-fluid pull-xs-left\" alt=\"\"><h4 *ngIf=\"type === 'success' \" class=\"modal-title\">{{title}}</h4>\n  <img src=\"assets/img/{{type}}.png\" *ngIf=\"type === 'confirm'\" class=\"img-modal img-fluid pull-xs-left\" alt=\"\"><h4 *ngIf=\"type === 'confirm' \" class=\"modal-title\">{{title}}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"\n   (click)=\"activeModal.dismiss('Cross click')\">\n  </button>\n</div>\n<div *ngIf=\"text !== ''\"class=\"modal-body\">\n  <p>{{text}}</p>\n</div>\n<div class=\"modal-footer\" *ngIf=\"type === 'confirm'\">\n  <button class=\"btn btn-outline-primary logout-btn \" (click)=\"activeModal.close(action)\">\n    Confrimar\n  </button>\n\n  <button class=\"btn btn-outline-primary  logout-btn \" (click)=\"activeModal.dismiss('Close clicked')\">\n    Cerrar\n  </button>\n</div>\n<div class=\"modal-footer\" *ngIf=\"type != 'confirm'\">\n  <button class=\"btn btn-outline-primary logout-btn \" (click)=\"activeModal.dismiss('Close clicked')\">\n    Cerrar\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/utils/modal/modal.component.ts":
/*!************************************************!*\
  !*** ./src/app/utils/modal/modal.component.ts ***!
  \************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.text = "";
        this.type = "";
        this.title = "";
        this.action = "";
        console.log("DATA MODAL>  " + this.text + "   " + this.type + "   " + this.title + "   " + this.action);
    }
    ModalComponent.prototype.closeModal = function () {
        this.activeModal.close('Modal Closed');
    };
    ModalComponent.prototype.ngOnInit = function () {
        console.log("TEXT:   " + this.text + "   TYPE:    " + this.type + "    TITLE:   " + this.title + "     ACTION:   " + this.action);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "action", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/utils/modal/modal.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/validators/unique-email-validator.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/validators/unique-email-validator.directive.ts ***!
  \****************************************************************/
/*! exports provided: UniqueEmailValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEmailValidatorDirective", function() { return UniqueEmailValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UniqueEmailValidatorDirective = /** @class */ (function () {
    function UniqueEmailValidatorDirective(userService) {
        this.userService = userService;
    }
    UniqueEmailValidatorDirective_1 = UniqueEmailValidatorDirective;
    UniqueEmailValidatorDirective.prototype.validate = function (c) {
        return this.userService.exist(c.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return (res) ? { 'uniqueEmail': true } : null;
        }));
    };
    UniqueEmailValidatorDirective = UniqueEmailValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[uniqueEmail]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
                    useExisting: UniqueEmailValidatorDirective_1,
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UniqueEmailValidatorDirective);
    return UniqueEmailValidatorDirective;
    var UniqueEmailValidatorDirective_1;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/infrastructure/app.context.ts":
/*!*******************************************!*\
  !*** ./src/infrastructure/app.context.ts ***!
  \*******************************************/
/*! exports provided: AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sessions_app_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessions/app.session */ "./src/infrastructure/sessions/app.session.ts");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppContext = /** @class */ (function () {
    function AppContext(appRepository, appSession) {
        this.appRepository = appRepository;
        this.appSession = appSession;
    }
    Object.defineProperty(AppContext.prototype, "Repository", {
        get: function () {
            return this.appRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppContext.prototype, "Session", {
        get: function () {
            return this.appSession;
        },
        enumerable: true,
        configurable: true
    });
    AppContext = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_app_repository__WEBPACK_IMPORTED_MODULE_2__["AppRepository"],
            _sessions_app_session__WEBPACK_IMPORTED_MODULE_1__["AppSession"]])
    ], AppContext);
    return AppContext;
}());



/***/ }),

/***/ "./src/infrastructure/repositories/app.repository.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure/repositories/app.repository.ts ***!
  \***********************************************************/
/*! exports provided: AppRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRepository", function() { return AppRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.repository */ "./src/infrastructure/repositories/user.repository.ts");
/* harmony import */ var _file_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.repository */ "./src/infrastructure/repositories/file.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppRepository = /** @class */ (function () {
    function AppRepository(fileRepository, userRepository) {
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
    }
    Object.defineProperty(AppRepository.prototype, "File", {
        get: function () {
            return this.fileRepository;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppRepository.prototype, "User", {
        get: function () {
            return this.userRepository;
        },
        enumerable: true,
        configurable: true
    });
    AppRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_file_repository__WEBPACK_IMPORTED_MODULE_2__["FileRepository"],
            _user_repository__WEBPACK_IMPORTED_MODULE_1__["UserRepository"]])
    ], AppRepository);
    return AppRepository;
}());



/***/ }),

/***/ "./src/infrastructure/repositories/file.repository.ts":
/*!************************************************************!*\
  !*** ./src/infrastructure/repositories/file.repository.ts ***!
  \************************************************************/
/*! exports provided: FileRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileRepository", function() { return FileRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_fileInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/fileInfo */ "./src/model/fileInfo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileRepository = /** @class */ (function () {
    function FileRepository(http) {
        this.http = http;
        this.downloadFileGoogleUrl = 'https://www.googleapis.com/drive/v3/files/';
    }
    FileRepository.prototype.create = function (parentId, folderName) {
        var folder = {
            name: folderName,
            mimeType: _model_fileInfo__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE_FOLDER"],
            parents: [parentId]
        };
        return gapi.client.drive.files.create({
            //resource: folder,
            fields: "id, name, mimeType, modifiedTime, size"
        }).then(function (res) {
            return _model_fileInfo__WEBPACK_IMPORTED_MODULE_1__["FileInfo"].fromGoogleFile(res.result);
        });
    };
    FileRepository.prototype.delete = function (fileId) {
        return gapi.client.drive.files.delete({
            fileId: fileId
        });
    };
    FileRepository.prototype.getFiles = function (folderId) {
        return gapi.client.drive.files.list({
            pageSize: 100,
            fields: "nextPageToken, files(id, name, mimeType, modifiedTime, size)",
            q: "'" + folderId + "' in parents and trashed = false"
        }).then(function (res) {
            var files = [];
            res.result.files.forEach(function (file) { return files.push(_model_fileInfo__WEBPACK_IMPORTED_MODULE_1__["FileInfo"].fromGoogleFile(file)); });
            return files;
        });
    };
    FileRepository.prototype.importFile = function (parentId, file, onError, onComplete, onProgress) {
        var contentType = file.Blob.type || 'application/octet-stream';
        var metadata = {
            name: file.Blob.name,
            mimeType: contentType,
            parents: [parentId]
        };
        var uploader = new UploaderForGoogleDrive({
            file: file.Blob,
            token: gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token,
            metadata: metadata,
            onError: onError,
            onComplete: onComplete,
            onProgress: onProgress,
            params: {
                convert: false,
                ocr: false
            }
        });
        uploader.upload();
    };
    FileRepository.prototype.downloadFileGoogle = function (fileId) {
        console.log("my token experiment:  " + JSON.stringify(gapi.auth.getToken().access_token));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/pdf',
            'Authorization': 'Bearer' + ' ' + gapi.auth.getToken().access_token
        });
        console.log("FLAG 1");
        var url = this.downloadFileGoogleUrl + fileId + "?alt=media";
        console.log("FLAG 2");
        return this.http.get(url, { headers: headers, responseType: 'blob' });
    };
    FileRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileRepository);
    return FileRepository;
}());



/***/ }),

/***/ "./src/infrastructure/repositories/user.repository.ts":
/*!************************************************************!*\
  !*** ./src/infrastructure/repositories/user.repository.ts ***!
  \************************************************************/
/*! exports provided: UserRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRepository", function() { return UserRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/user */ "./src/model/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TABLE_USER = "users";
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.add = function (profile) {
        var users = this.getAll();
        //gapi.client.drive.
        var foundIndex = -1;
        for (var i = 0; i < users.length; i++) {
            if (users[i].Id === profile.getId()) {
                foundIndex = i;
                break;
            }
        }
        if (foundIndex >= 0)
            users.splice(foundIndex, 1);
        users.push(_model_user__WEBPACK_IMPORTED_MODULE_1__["User"].fromBasicProfile(profile));
        this.save(users);
    };
    UserRepository.prototype.getAll = function () {
        var data = localStorage.getItem(TABLE_USER);
        if (data) {
            return (JSON.parse(data));
        }
        else
            return [];
    };
    UserRepository.prototype.save = function (users) {
        localStorage.setItem(TABLE_USER, JSON.stringify(users));
    };
    UserRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserRepository);
    return UserRepository;
}());



/***/ }),

/***/ "./src/infrastructure/sessions/app.session.ts":
/*!****************************************************!*\
  !*** ./src/infrastructure/sessions/app.session.ts ***!
  \****************************************************/
/*! exports provided: AppSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSession", function() { return AppSession; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.session */ "./src/infrastructure/sessions/user.session.ts");
/* harmony import */ var _gapi_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gapi.session */ "./src/infrastructure/sessions/gapi.session.ts");
/* harmony import */ var _breadcrumb_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.session */ "./src/infrastructure/sessions/breadcrumb.session.ts");
/* harmony import */ var _file_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file.session */ "./src/infrastructure/sessions/file.session.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppSession = /** @class */ (function () {
    function AppSession(authSession, breadCrumbSession, fileSession, userSession) {
        this.authSession = authSession;
        this.breadCrumbSession = breadCrumbSession;
        this.fileSession = fileSession;
        this.userSession = userSession;
    }
    Object.defineProperty(AppSession.prototype, "File", {
        get: function () {
            return this.fileSession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSession.prototype, "Gapi", {
        get: function () {
            return this.authSession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSession.prototype, "BreadCrumb", {
        get: function () {
            return this.breadCrumbSession;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSession.prototype, "User", {
        get: function () {
            return this.userSession;
        },
        enumerable: true,
        configurable: true
    });
    AppSession = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_gapi_session__WEBPACK_IMPORTED_MODULE_2__["GapiSession"],
            _breadcrumb_session__WEBPACK_IMPORTED_MODULE_3__["BreadCrumbSession"],
            _file_session__WEBPACK_IMPORTED_MODULE_4__["FileSession"],
            _user_session__WEBPACK_IMPORTED_MODULE_1__["UserSession"]])
    ], AppSession);
    return AppSession;
}());



/***/ }),

/***/ "./src/infrastructure/sessions/breadcrumb.session.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure/sessions/breadcrumb.session.ts ***!
  \***********************************************************/
/*! exports provided: BreadCrumbSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbSession", function() { return BreadCrumbSession; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_breadCrumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/breadCrumbItem */ "./src/model/breadCrumbItem.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BreadCrumbSession = /** @class */ (function () {
    function BreadCrumbSession() {
        this.items = [];
    }
    BreadCrumbSession.prototype.setShowOptionOnLastItem = function () {
        var lastItem = this.items[this.items.length - 1];
        lastItem.ShowOption = true;
    };
    BreadCrumbSession.prototype.init = function () {
        this.items = [];
        this.push("root", "My Drive");
    };
    BreadCrumbSession.prototype.push = function (id, name) {
        this.items.forEach(function (item) { return item.ShowOption = false; });
        var item = new _model_breadCrumbItem__WEBPACK_IMPORTED_MODULE_1__["BreadCrumbItem"]();
        item.Id = id;
        item.Name = name;
        this.items.push(item);
        this.setShowOptionOnLastItem();
    };
    BreadCrumbSession.prototype.navigateTo = function (id, name) {
        var foundIndex = -1;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].Id === id) {
                foundIndex = i;
                break;
            }
        }
        if (foundIndex >= 0) {
            this.items = this.items.slice(0, foundIndex + 1);
            this.setShowOptionOnLastItem();
        }
        else
            this.push(id, name);
    };
    Object.defineProperty(BreadCrumbSession.prototype, "currentItem", {
        get: function () {
            return this.items[this.items.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    BreadCrumbSession = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BreadCrumbSession);
    return BreadCrumbSession;
}());



/***/ }),

/***/ "./src/infrastructure/sessions/file.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/file.session.ts ***!
  \*****************************************************/
/*! exports provided: FileSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSession", function() { return FileSession; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileSession = /** @class */ (function () {
    function FileSession() {
        this.uploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileSession = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FileSession);
    return FileSession;
}());



/***/ }),

/***/ "./src/infrastructure/sessions/gapi.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/gapi.session.ts ***!
  \*****************************************************/
/*! exports provided: GapiSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapiSession", function() { return GapiSession; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CLIENT_ID = "861953150681-u8rlagkokej3ehit6k6j9r3cp1u8cn02.apps.googleusercontent.com";
var API_KEY = "AIzaSyDhs0okeCBP7QsM4P4InlhDMI_kIEe5OLA";
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';
var GapiSession = /** @class */ (function () {
    function GapiSession(appRepository) {
        this.appRepository = appRepository;
    }
    GapiSession.prototype.initClient = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            gapi.load('client:auth2', function () {
                return gapi.client.init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    discoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES,
                }).then(function () {
                    _this.googleAuth = gapi.auth2.getAuthInstance();
                    //console.log("GET TOKEN " + gapi.auth.getToken());
                    //console.log("GET TOKEN " + JSON.stringify(gapi.auth.getToken()));
                    resolve();
                });
            });
        });
    };
    Object.defineProperty(GapiSession.prototype, "isSignedIn", {
        get: function () {
            return this.googleAuth.isSignedIn.get();
        },
        enumerable: true,
        configurable: true
    });
    GapiSession.prototype.signIn = function () {
        var _this = this;
        return this.googleAuth.signIn({
            prompt: 'consent'
        }).then(function (googleUser) {
            console.log("google user   " + JSON.stringify(googleUser.getBasicProfile()));
            _this.appRepository.User.add(googleUser.getBasicProfile());
        });
    };
    GapiSession.prototype.signOut = function () {
        this.googleAuth.signOut();
    };
    GapiSession = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_app_repository__WEBPACK_IMPORTED_MODULE_1__["AppRepository"]])
    ], GapiSession);
    return GapiSession;
}());



/***/ }),

/***/ "./src/infrastructure/sessions/user.session.ts":
/*!*****************************************************!*\
  !*** ./src/infrastructure/sessions/user.session.ts ***!
  \*****************************************************/
/*! exports provided: UserSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSession", function() { return UserSession; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _repositories_app_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repositories/app.repository */ "./src/infrastructure/repositories/app.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSession = /** @class */ (function () {
    function UserSession(appRepository) {
        this.appRepository = appRepository;
    }
    UserSession = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_repositories_app_repository__WEBPACK_IMPORTED_MODULE_1__["AppRepository"]])
    ], UserSession);
    return UserSession;
}());



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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/breadCrumbItem.ts":
/*!*************************************!*\
  !*** ./src/model/breadCrumbItem.ts ***!
  \*************************************/
/*! exports provided: BreadCrumbItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbItem", function() { return BreadCrumbItem; });
var BreadCrumbItem = /** @class */ (function () {
    function BreadCrumbItem() {
    }
    return BreadCrumbItem;
}());



/***/ }),

/***/ "./src/model/breadCrumbItemOption.ts":
/*!*******************************************!*\
  !*** ./src/model/breadCrumbItemOption.ts ***!
  \*******************************************/
/*! exports provided: OPTION_NEW_FOLDER, OPTION_UPLOAD_FILES, BreadCrumbItemOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_NEW_FOLDER", function() { return OPTION_NEW_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTION_UPLOAD_FILES", function() { return OPTION_UPLOAD_FILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbItemOption", function() { return BreadCrumbItemOption; });
var OPTION_NEW_FOLDER = 0;
var OPTION_UPLOAD_FILES = 1;
var BreadCrumbItemOption = /** @class */ (function () {
    function BreadCrumbItemOption() {
    }
    return BreadCrumbItemOption;
}());



/***/ }),

/***/ "./src/model/dialogOneInputData.ts":
/*!*****************************************!*\
  !*** ./src/model/dialogOneInputData.ts ***!
  \*****************************************/
/*! exports provided: DialogOneInputData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOneInputData", function() { return DialogOneInputData; });
var DialogOneInputData = /** @class */ (function () {
    function DialogOneInputData() {
    }
    return DialogOneInputData;
}());



/***/ }),

/***/ "./src/model/fileInfo.ts":
/*!*******************************!*\
  !*** ./src/model/fileInfo.ts ***!
  \*******************************/
/*! exports provided: MIME_TYPE_FOLDER, FileInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE_FOLDER", function() { return MIME_TYPE_FOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInfo", function() { return FileInfo; });
var MIME_TYPE_FOLDER = "application/vnd.google-apps.folder";
var FileInfo = /** @class */ (function () {
    function FileInfo() {
    }
    FileInfo.fromGoogleFile = function (file) {
        var fileInfo = new FileInfo();
        fileInfo.Id = file.id;
        fileInfo.MimeType = file.mimeType;
        fileInfo.ModifiedTime = new Date(file.modifiedTime);
        fileInfo.Name = file.name;
        fileInfo.Size = file.size;
        return fileInfo;
    };
    Object.defineProperty(FileInfo.prototype, "Icon", {
        get: function () {
            if (this.IsFolder) {
                return "folder";
            }
            else {
                return "file";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "IsFolder", {
        get: function () {
            return this.MimeType === MIME_TYPE_FOLDER;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "ModifiedTimeText", {
        get: function () {
            return this.ModifiedTime.getDate() + "." + (this.ModifiedTime.getMonth() + 1) + "." + this.ModifiedTime.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInfo.prototype, "SizeText", {
        get: function () {
            if (!this.Size)
                return "-";
            var size = parseInt(this.Size);
            if (size < Math.pow(1024, 1))
                return size.toString();
            else if (size < Math.pow(1024, 2))
                return Math.floor(size / Math.pow(1024, 1)) + " KB";
            else if (size < Math.pow(1024, 3))
                return Math.floor(size / Math.pow(1024, 2)) + " MB";
            else if (size < Math.pow(1024, 3))
                return Math.floor(size / Math.pow(1024, 3)) + " GB";
            else
                return Math.floor(size / Math.pow(1024, 4)) + " GB";
        },
        enumerable: true,
        configurable: true
    });
    return FileInfo;
}());



/***/ }),

/***/ "./src/model/user.ts":
/*!***************************!*\
  !*** ./src/model/user.ts ***!
  \***************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.fromBasicProfile = function (profile) {
        var user = new User();
        user.Id = profile.getId();
        user.Email = profile.getEmail();
        return user;
    };
    return User;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/david/repo/SDAP-GUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);