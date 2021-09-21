import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Partials/header/header.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RequestOptionsService } from './services/setting.headers';
import { HttpModule, RequestOptions } from '@angular/http';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpAppInterceptor } from './interceptors/http.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotfoundComponent, MainComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    HttpModule,
    LoadingBarHttpModule,
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    LoadingBarModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgxSpinnerModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: RequestOptions,
      useClass: RequestOptionsService,
    },
    // AuthGuardService,
    DatePipe,
    // OnFailService,
    // CookieService,
    // SafePipe,
    // FilterPipe
    // { provide: HTTP_INTERCEPTORS, useClass: HttpAppInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
