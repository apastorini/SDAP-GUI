//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';


//Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { FilesComponent } from './components/files/files.component';
import { PasswordComponent } from './components/password/password.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
//import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';

//Servicios
import { LoginService } from './services/login.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthService } from './auth/auth.service';
import { AnalyzeService } from './services/analyze.service';
import { UserService } from './services/user.service';
import { FileService } from './services/file.service';
import { StorageService } from './auth/storageService';

//Routing
import { APP_ROUTING } from './app.routes'
import { AuthGuard } from './auth/auth.guard';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ResultsComponent } from './components/results/results.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { CreateUserSuccessComponent } from './components/create-user-success/create-user-success.component';
import { UniqueEmailValidatorDirective } from './validators/unique-email-validator.directive';
import { UserCreatedComponent } from './components/user-created/user-created.component';
import { ReportsComponent } from './components/reports/reports.component';
import { GoogleDriveComponent } from './components/google-drive/google-drive.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    FilesComponent,
    PasswordComponent,
    CreateUserComponent,
    EditUserComponent,
    UserListComponent,
    HomeComponent,
    FooterComponent,
    ResultsComponent,
    AnalyzeComponent,
    CreateUserSuccessComponent,
    UniqueEmailValidatorDirective,
    FileSelectDirective,
    UserCreatedComponent,
    ReportsComponent,
    GoogleDriveComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    APP_ROUTING,
    //AppMaterialModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthService,
    AuthGuard,
    LoginService,
    UserService,
    FileService,
    AnalyzeService,
    StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
