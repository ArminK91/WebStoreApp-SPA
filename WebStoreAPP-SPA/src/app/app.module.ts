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
import { HomeComponent } from './home/home.component';
import { CreateproductComponent } from './layout/dashboard/components/createproduct/createproduct.component';
import { AlertComponent } from '../app/_directives/alert/alert.component';
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { AppConfig } from '../app/app.config';
import { AlertService } from '../app/_services/alert.service';
import { AuthenticationService } from '../app/_services/authentication.service';
import { UserService } from '../app/_services/user.service';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserproductlistComponent } from './userproductlist/userproductlist.component';
import { PreviewproductComponent } from './previewproduct/previewproduct.component';
import { GeneralService } from './_services/general.service';
import { ProductService } from './_services/product.service';
//import { routing } from '../app.routing';
// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {

    return new TranslateHttpLoader(
        http
        // '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        //'.json'
    ); 
    //return new TranslateHttpLoader(http);
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        LayoutModule,
        DashboardModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    declarations: [AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        ProductlistComponent,
        CreateproductComponent,
        UserproductlistComponent,
        PreviewproductComponent],
    providers: [AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
    GeneralService,
ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}
