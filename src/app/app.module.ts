import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SprintComponent } from './sprint/sprint.component';
import { RaceComponent } from './race/race.component';
import { ResultComponent } from './result/result.component';
import { AudioComponent } from './audio/audio.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastNotifyComponent } from './toast-notify/toast-notify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SprintComponent,
    RaceComponent,
    ResultComponent,
    AudioComponent,
    RegisterComponent,
    LoginComponent,
    ToastNotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://localhost:7070"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
