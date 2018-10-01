import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './shared';
import { LayoutComponent } from './layout/layout.component';

import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent },
    { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard]  },
    //{ path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    //{ path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard] },

    // { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    // { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    // { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    //declarations:[HomeComponent, LoginComponent,DashboardComponent ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
