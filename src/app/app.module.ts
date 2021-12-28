import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { LoginComponent } from './components/login/login.component';
import { PipesModule } from './shared/pipes/pipes.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClient 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
