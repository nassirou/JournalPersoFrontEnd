import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { _ArticleService } from '../-article.service';
// import { Article } from '../interfaces/article';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {

  id: string;
  article: any;
  // listeArticles:Article[];
  /* router:Router; 
  grave erreur d'avoir déclaré l'attribut router ici car on ne profite pas de 
  l'injection de dépendance. Solution: le déclarer dans le constructeur */

  constructor(private route: ActivatedRoute, private router: Router, private artService: _ArticleService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id');
      // console.log("L'article choisi a pour identifiant " + this.id)
    })

    // this.article = this.artService.trouverArticle(this.id);
    this.artService.trouverArticle(this.id).subscribe(
      data => {
        this.article = data;
        console.log(data)
      },
      err => console.log(err)
    );

  }

  supprimerArticle() {
    /* ANCIENNE VERSION AVANT DE DEPLACER LE CODE DE LA METHODE VERS LE SERVICE...
    // this.listeArticles=this.artService.articles

    var index = this.artService.listerArticles().indexOf(this.article);
    if (index > -1) {
      this.artService.listerArticles().splice(index, 1);
    } */
    if (confirm("SOUHAITEZ-VOUS VRAIMENT SUPPRIMER CET ARTICLE ?")) {
      this.artService.eliminerArticle(this.id/*this.article*/).subscribe(
        (data) => {
          alert("L'ARTICLE A ETE SUPPRIME AVEC SUCCES");
        },
        (err) => { }
      );

      this.router.navigate(['articles']);
      /* petits bugs à régler: 1: le message de succès n'est pas visible, 
      2: pas de mise à jour automatique après la redirection: simple lenteur 
      où erreur de conception */

      // console.dir(this.artService.listerArticles())

    }
  }
  modifierArticle() {
    this.router.navigate(['modifier', this.id])  // une forme de redirection
    // adapter du code pour tenir compte de l'identifiant de l'article à transmettre
    // ['detailsArticle', a.id]

  }

}
