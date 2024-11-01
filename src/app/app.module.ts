import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './pages/login/login.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import { GameComponent } from './pages/game/game.component';
import { TrainingComponent } from './pages/training/training.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessageComponent } from './pages/message/message.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogContentAddTrainingComponent } from './components/dialog-content-add-training/dialog-content-add-training.component';
import { DialogContentAddGameComponent } from './components/dialog-content-add-game/dialog-content-add-game.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthInterceptor} from "./services/interceptor/auth-interceptor";
import {LoggingInterceptor} from "./services/interceptor/logging-interceptor";
import {ErrorInterceptor} from "./services/interceptor/error-interceptor";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { DialogContentTrainingDetailsComponent } from './components/dialog-content-open-training-details/dialog-content-training-details.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    GameComponent,
    TrainingComponent,
    ProfileComponent,
    MessageComponent,
    DialogContentAddTrainingComponent,
    DialogContentAddGameComponent,
    DialogContentTrainingDetailsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatTabsModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatBadgeModule,
        HttpClientModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
