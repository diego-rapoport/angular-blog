import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { BodyComponent } from './body/body.component';
import { PostComponent } from './body/post/post.component';

@NgModule({
  declarations: [PagesComponent, HeaderComponent, LogoComponent, MenuComponent, BodyComponent, PostComponent],
  exports: [PagesComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
