import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CurrencyPipe } from '@angular/common';
import { LoginModule } from './components/login/login.module';
import { ModulesModule } from './components/modules/modules.module';
import { MaterialModule } from './core/modules/material.module';
import { LoadingDialogComponent } from './components/modals/loading-dialog/loading-dialog.component';
import { TokenInterceptor } from './core/service/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoadingDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
