//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//import { FileSelectDirective } from 'ng2-file-upload';
// import { FileUploadModule} from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FilesComponent } from './components/files/files.component';
import { PasswordComponent } from './components/password/password.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
//import { WebmasterValidationComponent } from './webmaster-validation/webmaster-validation.component';
//import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';

//Servicios
import { LoginService } from './services/login.service';
import { AuthService } from './auth/auth.service';
import { AnalyzeService } from './services/analyze.service';
import { UserService } from './services/user.service';
import { FileService } from './services/file.service';
import { StorageService } from './auth/storageService';
import { HomeService } from './services/home.service';
//import { DriveResource } from './services/drive-resource.service';

//Routing
import { APP_ROUTING } from './app.routes'
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { UniqueEmailValidatorDirective } from './validators/unique-email-validator.directive';
import { ReportsComponent } from './components/reports/reports.component';
import { GoogleDriveComponent } from './components/google-drive/google-drive.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ModalComponent } from './utils/modal/modal.component';
import { GapiSession } from '../infrastructure/sessions/gapi.session';
import { AppRepository } from '../infrastructure/repositories/app.repository';
import { FileRepository } from '../infrastructure/repositories/file.repository';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { AppContext } from '../infrastructure/app.context';
import { AppSession } from '../infrastructure/sessions/app.session';
import { UserSession } from '../infrastructure/sessions/user.session';
import { FileSession } from '../infrastructure/sessions/file.session';
import { BreadCrumbSession } from '../infrastructure/sessions/breadcrumb.session';
import { DialogOneInputComponent } from './components/dialogoneinput/dialogoneinput.component';
import { BreadCrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadCrumbItemComponent } from './components/breadcrumb/breadcrumbitem/breadcrumbitem.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatBottomSheetModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule } from '@angular/material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HelpComponent } from './components/help/help.component';




export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FilesComponent,
    PasswordComponent,
    CreateUserComponent,
    EditUserComponent,
    HomeComponent,
    FooterComponent,
    AnalyzeComponent,
    UniqueEmailValidatorDirective,
    ReportsComponent,
    GoogleDriveComponent,
    EditProfileComponent,
    ModalComponent,
    DialogOneInputComponent,
    BreadCrumbComponent,
    BreadCrumbItemComponent,
    PageNotFoundComponent,
    HelpComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule,
    NgbModule.forRoot(),
    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginService,
    UserService,
    FileService,
    AnalyzeService,
    StorageService,
    HomeService,
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSession], multi: true },
    AppContext,
    AppSession,
    FileSession,
    GapiSession,
    UserSession,
    BreadCrumbSession,
    AppRepository,
    FileRepository,
    UserRepository,

  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ModalComponent
]
})
export class AppModule { }
