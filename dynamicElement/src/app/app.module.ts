import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreRenderComponent } from './core-render/core-render.component';
import { ElementInitialisationService } from './core/element-initialisation.service';
import { ElementControlService } from './core/element-control.service';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'node_modules/ngx-bootstrap/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CoreRenderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [ElementInitialisationService, ElementControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
