import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateformComponent } from './createform/createform.component';
import { InputComponentComponent } from './input-component/input-component.component';
import { CreateComponent } from './create/create.component';
import {NgxWebstorageModule} from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    CreateformComponent,
    InputComponentComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
