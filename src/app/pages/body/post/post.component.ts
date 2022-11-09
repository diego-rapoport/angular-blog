import { Component, OnInit } from '@angular/core';

type Post = {
  src: string
  title: string
  sinopse: string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public posts: Post[] = []
  private readonly defaultSRC: string = '../../../../assets/logo.svg'

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        src: this.defaultSRC,
        title: 'Um título',
        sinopse: 'Meu primeiro artigo'
      },
      {
        src: this.defaultSRC,
        title: 'Segundo título',
        sinopse: 'Meu segundo artigo'
      },
      {
        src: this.defaultSRC,
        title: 'Terceiro título',
        sinopse: 'Meu terceiro artigo'
      },
      {
        src: this.defaultSRC,
        title: 'Quarto título',
        sinopse: 'Meu Quarto artigo'
      },
    ]
  }

}
