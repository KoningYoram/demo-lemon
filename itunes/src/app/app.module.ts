import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment as env } from '../environments/environment';
import { StoreModule } from '@ngrx/store'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducers';
import { HttpClientModule } from '@angular/common/http';
import { HasIdGuard } from './shared/guards/hasId.interceptor';

const reduxDevTools = !env.production ? [StoreDevtoolsModule.instrument({maxAge: 25})] : []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    BrowserModule,
    AppRoutingModule,
    ...reduxDevTools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
