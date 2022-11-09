import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { ArticleComponent } from './article/article.component';



@NgModule({
  declarations: [
    BodyComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
