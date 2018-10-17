import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './components/files/files.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordComponent } from './components/password/password.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './components/home/home.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GoogleDriveComponent } from './components/google-drive/google-drive.component';
import { AuthGuard } from './auth/auth.guard';
import { HelpComponent } from './components/help/help.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'files', component: FilesComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'password', component: PasswordComponent },
  { path: 'analyze', component: AnalyzeComponent, canActivate: [AuthGuard]},
  { path: 'create-user', component: CreateUserComponent,  canActivate: [AuthGuard],data: {
        roles: {
            only: ['1'],
            redirectTo: 'password'
        }
    }},
  { path: 'edit-user', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  { path: 'google-drive', component: GoogleDriveComponent, canActivate: [AuthGuard]},
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
  //{ path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '**', component: PageNotFoundComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
