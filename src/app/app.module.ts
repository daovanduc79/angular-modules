import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { GelleryConfig } from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageGalleryModule
  ],
  providers: [
    {provide: GelleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
