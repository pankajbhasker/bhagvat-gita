import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule,MatIconModule,MatListModule,MatMenuModule,MatRippleModule,MatTabsModule,MatGridListModule,MatButtonToggleModule,MatProgressSpinnerModule,MatSliderModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LessonsComponent } from './lessons/lessons.component';
import { AppRoutingModule } from './app-routing.module';
import { VerseComponent } from './verse/verse.component';
import { VerseListingComponent } from './verselisting/verselisting.component';
import { SlokMeaningService } from './services/SlokMeaningService';
import { SharedService } from './services/SharedService';

import {NgxWebstorageModule} from 'ngx-webstorage';
import { Settings } from './services/Settings';

import { MinuteSecondsPipe } from './pipe/minuteSeconds';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    LessonsComponent,
    VerseComponent,
    VerseListingComponent,
    MinuteSecondsPipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatRippleModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    NgxWebstorageModule.forRoot(),
    MatProgressSpinnerModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [SlokMeaningService,
    SharedService,
    Settings],
  bootstrap: [AppComponent]
})
export class AppModule { }
