import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { MaterialModule } from './material.module';
import { WhiteboardCanvasDirective } from './whiteboard-canvas.directive';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    WhiteboardCanvasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
