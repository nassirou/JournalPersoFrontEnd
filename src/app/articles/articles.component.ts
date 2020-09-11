import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
  /*template: `
  
  <p>
      PLACER ICI LA LISTE DE TOUS LES ARTICLES
  </p>
  <br>
  CATEGORIE: {{categorie}}
  <br>  
  TITRE: {{titre}}
  <br>
  <br>
  
  <ul>
      <li *ngFor="let a of mesArticles">
      <a routerLink="[’detailsArticle’,dateArt,categorieArt,titreArt,contenuArt]" class="nav-link">
        DATE: {{a.date}}
        <br>
        CATEGORIE: {{a.categorie}}
        <br>
        TITRE: {{a.titre}}
        <br>
        CONTENU: {{a.contenu}}
      </a>  
        <hr>
      </li>
  </ul>

  `,
  styles: [
    `p {
      text-align: center;
      font-weight: bold;
    }`,
    `li:hover {
      background-color: rgb(190, 194, 245)
    }
    `,
    `a {
      text-decoration:none;
      color: black;
    }
    `
  ]
  */
})

// extrait du template: {{mesArticles|json}}

export class ArticlesComponent implements OnInit {

  categorie: any
  titre: any
  // route: any; si on n'a pas précisé "private" du constructeur, on est obligé d'ajouter cette ligne

  mesArticles: Array<Article>;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.categorie = res.get('categorie');
      this.titre = res.get('titre')
      // console.log("L'article choisi est de la catégorie " + this.categorie + " et a pour titre " + this.titre)
    })

    this.afficherArticles()

  }

  afficherArticles() {
    this.mesArticles = this.articleService.listerArticles()
    // console.dir(this.mesArticles);
  }

}




