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
import { ContenteditableDirective } from './shared/directives/contenteditable.directive';
import { PhotoCommentComponent } from './shared/components/photo-comment/photo-comment.component';
import { OptionCommentComponent } from './shared/components/option-comment/option-comment.component';


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
    ContenteditableDirective,
    PhotoCommentComponent,
    OptionCommentComponent,
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
