import { ReactiveFormsModule } from '@angular/forms';
import { CorreiosService } from './providers/correios/correios.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UtilModule } from './util/util.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UtilModule,
    ReactiveFormsModule
  ],
  providers: [CorreiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
