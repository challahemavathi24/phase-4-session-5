import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { read } from 'fs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './ChangeColorDirective';
import { CustomPipe } from './CustomPipe';
import { HighlightDirective } from './HighlightDirective';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterComponent } from './register/register.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserComponent,
    ChangeColorDirective,
    HighlightDirective,
    SwitchdemoComponent,
    PipeDemoComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
