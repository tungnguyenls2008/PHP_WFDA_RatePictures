import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbCarouselModule, NgbModule, NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { RateModelComponent } from './rate-model/rate-model.component';
import { RateResourceComponent } from './rate-resource/rate-resource.component';
@NgModule({
  declarations: [
    AppComponent,
    RateModelComponent,
    RateResourceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbRatingModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
