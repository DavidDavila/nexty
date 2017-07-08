import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RadarComponent } from './radar/radar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentComponent } from './dashboard/comment/comment.component';
import { TootlipComponent } from './shared/components/tootlip/tootlip.component';
import { ContextMenuComponent } from './shared/components/context-menu/context-menu.component';
import { InputComponent } from './dashboard/input/input.component';
import { MenuButtonComponent } from './header/menu-button/menu-button.component';

import { FacebookService } from './shared/services/facebook.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RadarComponent,
    DashboardComponent,
    CommentComponent,
    TootlipComponent,
    ContextMenuComponent,
    InputComponent,
    MenuButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    FacebookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
