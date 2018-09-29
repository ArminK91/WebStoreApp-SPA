import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
//import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from '../app/_directives/alert/alert.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { AppConfig } from '../app/app.config';
import { AlertService } from '../app/_services/alert.service';
import { AuthenticationService } from '../app/_services/authentication.service';
import { UserService } from '../app/_services/user.service';
//import { routing } from './app.routing';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: createTranslateLoader,
        //         deps: [HttpClient]
        //     }
        // }),
        AppRoutingModule
    ],
    declarations: [AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent],
    providers: [AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}
